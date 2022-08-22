import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        props.updateStatus(status)
        setEditMode(false)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={styles.status_block}>
            {
                editMode
                    ?
                    <div>
                        <input onChange={onStatusChange}
                            className={styles.input_status}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            defaultValue={status}
                            type='text' />
                    </div>
                    :
                    <div>
                        <span
                            title='Double click to change status'
                            onDoubleClick={activateEditMode}>{props.status || 'Status empty'}</span>
                    </div>
            }
        </div>
    );

};

export default React.memo(ProfileStatusWithHooks);