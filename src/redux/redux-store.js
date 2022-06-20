import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import formikReducer from "./formik-reducer";
import appReducer from "./app-reducer";
// import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formikReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store


export default store