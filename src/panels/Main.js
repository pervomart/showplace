import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './css/Main.css';

const Main = ({ id, go, fetchedUser, fetchedGeo }) => (
	
	<Panel id={id}>
		<PanelHeader separator="hide">GeoUT</PanelHeader>
        <CardScroll>
            <Card size="m">
                <div class="topcard c1" style={{ width: 259, height: 152 }}> </div>
            </Card>
            <Card size="m">
                <div class="topcard c2" style={{ width: 259, height: 152 }}> </div>
            </Card>
            <Card size="m">
                <div class="topcard c5" style={{ width: 259, height: 152 }}> </div>
            </Card>
        </CardScroll>


        <Group title="Страна">
     <Div>

		<button class="country c3" onClick={go} data-to="home">
           <p>кликать сюда</p> 
		</button>
     </Div>
     <Div>
       <div class="country c4"></div>
       
     </Div>
     <Div>
       <div class="country c6"></div>
       
     </Div>
     <Div>
       <div class="country c7"></div>
       
     </Div>
  		</Group>
	</Panel>
);

Main.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Main;
