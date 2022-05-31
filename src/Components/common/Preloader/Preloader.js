import React from 'react';
import loading from '../../../assets/images/loading.gif'
import '../../../App.css'

const Preloader = () => {
    return (
        <div>
            <img className='loading_img' src={loading} alt="loading" />
        </div>
    );
};

export default Preloader;