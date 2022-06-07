import { connect } from 'react-redux';
import { compose } from 'redux';
import WithAuthRedirect from '../../Hoc/WithAuthRedirect';
import { addMessageActionCreator, messageChangeActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);