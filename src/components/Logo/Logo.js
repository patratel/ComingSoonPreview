import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
        <div className = {classes.LogoContainer}>
            <div className = {classes.Square}></div>
            <div className = {classes.LogoText}>
                <p><strong>SQU</strong></p>
                <p><strong>ARE.</strong></p>
            </div>
        </div>
   
    );

export default logo;