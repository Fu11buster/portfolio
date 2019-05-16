import React, { Fragment, Component } from 'react';
import MainMenu from './Components/mainMenu/mainMenu';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainPage from './Components/mainPage/mainPage';
import Container from './Components/container/container';
import SideBlock from './Components/sideBlock/sideBlock';
import SideTitle from './Components/sideTitle/sideTitle';
import AboutInfo from './Components/aboutInfo/aboutInfo';
import WorksPage from './Components/worksPage/worksPage';
import ContactsPage from './Components/contactsPage/contactsPage';
import menuList from './Components/mainMenu/menuList';

import './App.css';

class App extends Component {
  // state = {
  //   wheeling: false,
  //   functionCall: false
  // }

  componentDidMount() {
    window.addEventListener("wheel", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.onScroll);
  }

  onScroll = event => {
    let pathname = this.props.history.location.pathname;
    let deltaY = event.deltaY;
    if (this.wheeling || this.functionCall) return;

    let ticking;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const nextLocation = this.getNextLocation(pathname, menuList, deltaY);
        if (nextLocation !== pathname && nextLocation !== undefined) {
          this.changeLocation(nextLocation);
        }
        ticking = false;
      });

      ticking = true;
    }

    this.wheeling = true;
    this.functionCall = true;

    setTimeout(() => {
      this.wheeling = false;
      this.functionCall = false;
    }, 1500);
  };

  changeLocation(nextLocation) {
    this.props.history.push(nextLocation);
  }

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
    const location = this.props.history.location;
    console.log(location.pathname);
    return (
      <Fragment>
        <MainMenu />
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="transition" timeout={1000}>
            <Switch location={location}>
              <Route path='/' exact render={() => (
                <Container onWheel={(e) => { console.log(e) }}>
                  <MainPage />
                  <SideBlock>
                    <SideTitle titleText="Nikolay Stepin" />
                  </SideBlock>
                </Container>
              )} />
              <Route path='/about' exact render={() => (
                <Container>
                  <AboutInfo />
                  <SideBlock>
                    <SideTitle titleText="About me" />
                  </SideBlock>
                </Container>
              )} />
              <Route path='/works' exact render={() => (
                <Container>
                  <WorksPage />
                  <SideBlock>
                    <SideTitle titleText="Works" />
                  </SideBlock>
                </Container>
              )} />

              <Route path='/contacts' component={ContactsPage} />

            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    )
  }
}

export default withRouter(App);