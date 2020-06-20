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
import View from '@vkontakte/vkui/dist/components/View/View';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';



import './css/Main.css';

const Main = ({ id, go, fetchedUser, fetchedGeo }) => (
<View id="view1" activePanel="{id}">
  
	<Panel id={id}>
		<PanelHeader separator="hide">iЧтоЗдесь</PanelHeader>
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
<Group>
              <CellButton onClick={ () => this.setState({ activeView: 'view2' }) }>
                to View 2
              </CellButton>
            </Group>

        <Group title="Страна">
     <Div>
		<button class="country c3" onClick={go} data-to="home">

		</button>
     </Div>
     <Div>
       <div class="country c4"> </div>
     </Div>
  		</Group>
	</Panel>
</View>
<View id="view2" activePanel="panel1">
	<Panel id="panel1">
 
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'view1' }) }>
                Back to View 1
              </CellButton>
            </Group>
	</Panel>
</View>
);

Main.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Main;
