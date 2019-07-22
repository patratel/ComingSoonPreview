import React, { Component } from 'react';

import classes from './AboutUs.module.css';
import ViewCards from '../../components/ViewCards/ViewCards';
import ViewCard from '../../components/ViewCards/ViewCard/ViewCard';

class AboutUs extends Component {

    render () {
        return (
            <div className = {classes.Content}>
                <ViewCard 
                    icon = {null} 
                    title = {"ABOUT"} 
                    type = {"PresentationCard"}
                    body = {"A full-service team of award-winning copywriters, producers, and graphic designers delivers solutions that harness the power of our digital properties. We work with you from conception through activation to develop on-strategy, breakthrough creative that generates attention and response"} />
                <ViewCards />
            </div>
        );
    }
}

export default AboutUs;