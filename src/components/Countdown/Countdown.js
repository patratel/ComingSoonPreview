import React from 'react';

import classes from './Countdown.module.css';

const countdown = (props) => {
    return (
        <div className = {classes.Container}>
            <div className = {classes.ContainerSubComponent}>
                <div className = {classes.Time}>{props.days}</div>
                <div className = {classes.TimeSubtitle}>DAYS</div>
            </div>
            <div className = {classes.ContainerSubComponent}>
                <div className = {classes.Time}>{props.hours}</div>
                <div className = {classes.TimeSubtitle}>HOURS</div>
            </div>
            <div className = {classes.ContainerSubComponent}>
                <div className = {classes.Time}>{props.minutes}</div>
                <div className = {classes.TimeSubtitle}>MINUTES</div>
            </div>
            <div className = {classes.ContainerSubComponent}>
                <div className = {classes.Time}>{props.seconds}</div>
                <div className = {classes.TimeSubtitle}>SECONDS</div>
            </div>
        </div> 
    );
           
};

export default countdown;