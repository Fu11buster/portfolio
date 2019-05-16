import React, { Fragment, Component } from 'react';
import MainMenu from './Components/mainMenu/mainMenu';
import { Switch, Route, withRouter } from 'react-router-dom';
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
  state = {
    wheeling: false,
    functionCall: false
  }

  // componentDidMount() {
  //   window.addEventListener("wheel", this.throttle());
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("wheel", this.throttle());
  // }

  // throttle = (fn, wait) => {
  //   var time = Date.now();
  //   return function() {
  //     if ((time + wait - Date.now()) < 0) {
  //       fn();
  //       time = Date.now();
  //     }
  //   }
  // }
  
  // handleWheel = () => {
  //   let pathname = this.props.history.location.pathname;
  //   let deltaY = event.deltaY;
  // }

  // onScroll = event => {
  //   let pathname = this.props.history.location.pathname;
  //   let deltaY = event.deltaY;
  //   if (this.state.wheeling || this.state.functionCall) return;

  //   // let ticking;
  //   // if (!ticking) {
  //   //   window.requestAnimationFrame(() => {
  //   //     const nextLocation = this.getNextLocation(pathname, menuList, deltaY);
  //   //     if (nextLocation !== pathname && nextLocation !== undefined) {
  //   //       this.props.history.push(nextLocation);
  //   //     }
  //   //     ticking = false;
  //   //   });

  //   //   ticking = true;
  //   // }

  //   this.setState({
  //     wheeling: true,
  //     functionCall: true
  //   });

  //   setTimeout(() => {
  //     this.setState({
  //       wheeling: false,
  //       functionCall: false
  //     })
  //   }, 1500);
  // };

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
          <CSSTransition key={location.pathname} classNames="transition" timeout={7000}>
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