import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (
      <div className="App">
        <div className="app_wrapper">
          <HeaderContainer />
          <Navbar />
          <div className='app_wrapper_content'>
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<React.Suspense fallback={<Preloader />}><ProfileContainer /></React.Suspense>} />
                <Route path='/dialogs' element={<React.Suspense fallback={<Preloader />}><DialogsContainer /></React.Suspense>} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </React.Suspense>
          </div>

        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp