import React, { Fragment } from 'react';
import MainMenu from './Components/mainMenu/mainMenu';
import { Switch, Route } from 'react-router-dom';
import MainPage from './Components/mainPage/mainPage';
import SideTitle from './Components/sideTitle/sideTitle';
import Container from './Components/container/container';
import './App.css';

const App = () => (
  <Fragment>
    <MainMenu />
    <Switch>
      <Route path='/' exact render={() => (
        <Container>
          <MainPage />
          <SideTitle titleText="Nikolay Stepin"/>
        </Container>
      )} />
      <Route path='/about' exact render={() => (
        <Container>
          <SideTitle titleText="About me"/>
        </Container>
      )} />
      <Route path='/works' exact render={() => (
        <Container>
          <SideTitle titleText="Works"/>
        </Container>
      )} />

    </Switch>
  </Fragment>
)

export default App;
