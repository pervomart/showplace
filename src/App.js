import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Main from './panels/Main';
import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('main');
	const [fetchedUser, setUser] = useState(null);
	const [fetchedGeo, setGeo] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			var location = await bridge.send("VKWebAppGetGeodata", {});
			setUser(user);
			setGeo(location);
			setPopout(null);
			setInterval(
				async function(){
					location = await bridge.send("VKWebAppGetGeodata", {});
					setGeo(location);
				}, 5000
			);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Main id='main' go={go} />
			<Home id='home' fetchedUser={fetchedUser} fetchedGeo={fetchedGeo} go={go} />

		</View>
	);
}

export default App;

