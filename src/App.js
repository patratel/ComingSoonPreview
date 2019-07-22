import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutUs from  './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';

class App extends Component {
  render() {
    return (
      <div>
        <Layout pathName = {this.props.location.pathname}>
          <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/aboutUs" exact component={AboutUs} />
            <Route path="/contactUs" exact component={ContactUs} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter (props => <App {...props} />);
