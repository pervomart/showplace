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
import { Root, View } from '@vkontakte/vkui';

import './css/Main.css';

const Main = ({ id, go, fetchedUser, fetchedGeo }) => (
	<Panel id={id}>
		<PanelHeader separator="hide">iЧтоЗдесь</PanelHeader>
        <CardScroll>
            <Card size="m">
                <div class="topcard c1" style={{ width: 259, height: 152 }}> </div>
            </Card>
            <Card size="m">
                <div class="topcard c2" style={{ width: 259, height: 152 }}> </div>
            </Card>
        </CardScroll>


        <Group title="Страна">
     class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'view1'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <Group>
              <CellButton class="c3 country" onClick={ () => this.setState({ activeView: 'view2' }) }>
                
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View header activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader>Город</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'view1' }) }>
                Back
              </CellButton>
            </Group>
          </Panel>
        </View>
      </Root>
    )
  }
}

<Example />
  		</Group>

		<Group title="Навигация">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="home">
					Моё местоположение
				</Button>
			</Div>
		</Group>
	</Panel>
);

Main.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Main;
