import React, { Component } from 'react';
import styles from './ProfileStatus.module.css'

class ProfileStatus extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }



    render() {
        return (
            <div className={styles.status_block}>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input onChange={this.onStatusChange} className={styles.input_status} autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.props.status} type='text' />
                        </div>
                        :
                        <div>
                            <span
                                title='Double click to change status'
                                onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'Status empty'}</span>
                        </div>
                }
            </div>
        );
    }

};

export default ProfileStatus;