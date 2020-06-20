import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { platform, IOS } from '@vkontakte/vkui';
const osName = platform();

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="main">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Моё местоположение
		</PanelHeader>
		{props.fetchedUser &&
		<Group title="Кто у нас тут путешествует?">
			<Cell
				before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
				description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Div>
		<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A238a8393175ae4d7f3f15da54333d43f9a01ddbde552453f63e811a99bda857d&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>
		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
	fetchedGeo: PropTypes.shape({
		lat: PropTypes.string,
		long: PropTypes.string,
	}),

};

export default Home;
