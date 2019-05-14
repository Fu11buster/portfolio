import React, { Fragment, Component } from 'react';
import MainMenu from './Components/mainMenu/mainMenu';
import { Switch, Route, withRouter } from 'react-router-dom';
import MainPage from './Components/mainPage/mainPage';
import Container from './Components/container/container';
import SideBlock from './Components/sideBlock/sideBlock';
import SideTitle from './Components/sideTitle/sideTitle';
import menuList from './Components/mainMenu/menuList';

import './App.css';

class App extends Component {
  state = {
    wheeling: false,
    functionCall: false
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    window.addEventListener("wheel", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.onScroll);
  }

  onScroll = event => {
    let pathname = this.props.history.location.pathname;
    let deltaY = event.deltaY;
    if (this.state.wheeling || this.state.functionCall) return;

    this.setState({wheeling: true});

    if (!this.state.functionCall) {
      let ticking;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.props.history.replace(this.getNextLocation(pathname, menuList, deltaY));
          ticking = false;
        });

        ticking = true;
      }

      this.setState({functionCall: true});
    };

    setTimeout(() => {
      this.setState({
        wheeling: false,
        functionCall: false
      })
    }, 1500);
  };

  getNextLocation = (location, locationsArray, deltaY) => {
    let index = locationsArray.findIndex(el => el.link === location);
    if (index !== undefined && deltaY > 0 && index !== locationsArray.length - 1) {
      return locationsArray[index + 1].link;
    }
    if (index !== undefined && deltaY < 0 && index !== 0) {
      return locationsArray[index - 1].link;
    }
  }

  render() {
    return (
      <Fragment>
        <MainMenu />
        <Switch>
          <Route path='/' exact render={() => (
            <Container>
              <MainPage />
              <SideBlock>
                <SideTitle titleText="Nikolay Stepin" />
              </SideBlock>
            </Container>
          )} />
          <Route path='/about' exact render={() => (
            <Container>
              <SideBlock>
                <SideTitle titleText="About me" />
              </SideBlock>
            </Container>
          )} />
          <Route path='/works' exact render={() => (
            <Container>
              <SideBlock>
                <SideTitle titleText="Works" />
              </SideBlock>
            </Container>
          )} />

        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App);