import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';

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
            <Routes>
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>

        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
