import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutUs from  './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';

class App extends Component {
  // This state is handled here and not in the more appropriate Home component
  //    in order to ensure the continuous updating of the timer.
  // A more elegant solution would be to get an updated state of the Countdown 
  //    from the server whenever the Home component is mounted.

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

  render() {
    return (
      <div>
        <Layout pathName = {this.props.location.pathname}>
          <Switch>
            <Route path="/"  exact render={(props) => <Home countDown = {this.state.countdown} />}/>
            <Route path="/aboutUs" exact component={AboutUs} />
            <Route path="/contactUs" exact component={ContactUs} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter (props => <App {...props} />);
