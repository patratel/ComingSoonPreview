import React from 'react';

import classes from './TextAndSquare.module.css';

const textAndSquare = (props) => (
        <div className = {classes.TextAndSquare}>
            <div className = {classes.Square}></div>
            <div className = {classes.HeadlineText}>
                <p>WE ARE <strong>SQUARE</strong></p>
                <p>AND WE ARE <strong>COMING SOON</strong></p>
            </div>
        </div>
    );

export default textAndSquare;