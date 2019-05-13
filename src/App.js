import React, { Fragment } from 'react';
import MainMenu from './Components/mainMenu/mainMenu';
import { Switch, Route } from 'react-router-dom';
import MainPage from './Components/mainPage/mainPage';
import Container from './Components/container/container';
import SideBlock from './Components/sideBlock/sideBlock';
import SideTitle from './Components/sideTitle/sideTitle';

import './App.css';

const App = () => (
  <Fragment>
    <MainMenu />
    <Switch>
      <Route path='/' exact render={() => (
        <Container>
          <MainPage />
          <SideBlock>
            <SideTitle titleText="Nikolay Stepin"/>
          </SideBlock>
        </Container>
      )} />
      <Route path='/about' exact render={() => (
        <Container>
          <SideBlock>
            <SideTitle titleText="About me"/>
          </SideBlock>
        </Container>
      )} />
      <Route path='/works' exact render={() => (
        <Container>
          <SideBlock>
            <SideTitle titleText="Works"/>
          </SideBlock>
        </Container>
      )} />

    </Switch>
  </Fragment>
)

export default App;
