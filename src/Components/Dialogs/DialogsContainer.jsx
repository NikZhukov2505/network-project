import { connect } from 'react-redux';
import { addMessageActionCreator, messageChangeActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(messageChangeActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;