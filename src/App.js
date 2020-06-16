import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
// import Dialogs from './components/Dialogs/Dialogs';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settingss from './components/Settingss/Settingss';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './assets/images/preloader/Preloader';
import UsersContainer from './components/Users/UsersContainer';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { WithSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      // <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Route path='/profile/:userId?'
            render={WithSuspense(ProfileContainer)}/>
          <Route path='/dialogs'
            render={WithSuspense(DialogsContainer)} />
          <Route path='/users' render={() => <UsersContainer />} />
          {/* <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settingss' component={Settingss} /> */}
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
      // </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);


const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp