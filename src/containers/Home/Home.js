import React, { Component } from 'react';

import TextAndSquare from '../../components/TextAndSquare/TextAndSquare';
import Countdown from '../../components/Countdown/Countdown';
import Subscribe from '../../components/Subscribe/Subscribe';

import classes from './Home.module.css';

class Home extends Component {

    state = {
        countdown: {
            days: 120,
            hours: 12,
            minutes: 44,
            seconds: 5 
        }      
    }

    componentDidMount() {

        this.interval = setInterval(() => {

            let time = {
                ...this.state.countdown
            };

            time.seconds = time.seconds !== 0 ? time.seconds - 1 : 0;
            if ( time.seconds === 0 && (time.minutes !== 0 || time.hours !== 0 || time.days !== 0)) {
                time.seconds = 60;
                time.minutes = time.minutes - 1;
                if(time.minutes === -1 && (time.hours !== 0 || time.days !==0))
                {
                    time.minutes = 59;
                    time.hours = time.hours - 1;
                    if(time.hours === -1 && time.days !== 0){
                        time.hours = 23;
                        time.days = time.days - 1;
                    }
                }
            }

            this.setState({countdown: time })
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render () {
        return (
            <div className={classes.Content}>
                <TextAndSquare />
                <Countdown 
                        days = {this.state.countdown.days}
                        hours = {this.state.countdown.hours}
                        minutes = {this.state.countdown.minutes}
                        seconds = {this.state.countdown.seconds}/>
                <Subscribe />
            </div>
        );
    }
}

export default Home;