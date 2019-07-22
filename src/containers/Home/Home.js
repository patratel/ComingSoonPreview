import React, { PureComponent } from 'react';

import TextAndSquare from '../../components/TextAndSquare/TextAndSquare';
import Countdown from '../../components/Countdown/Countdown';
import Subscribe from '../../components/Subscribe/Subscribe';

import classes from './Home.module.css';

class Home extends PureComponent {
    render () {
        return (
            <div className={classes.Content}>
                <TextAndSquare />
                <Countdown 
                        days = {this.props.countDown.days}
                        hours = {this.props.countDown.hours}
                        minutes = {this.props.countDown.minutes}
                        seconds = {this.props.countDown.seconds}/>
                <Subscribe />
            </div>
        );
    }
}

export default Home;