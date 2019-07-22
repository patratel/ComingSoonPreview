import React from 'react';

import classes from './ViewCard.module.css';
import Aux from '../../../hoc/Aux/Aux';

const viewCard = (props) => {

    let cards = (
        <div className = {classes.ContainerCardWithIcon}>
            <img className = {classes.Icon} src = {props.icon} alt="presentationIcon"/>
            <div className = {classes.TitleCardWithIcon}>{props.title}</div>
            <div className = {classes.LineCardWithIcon}></div>
            <div className = {classes.BodyCardWithIcon}>{props.body}</div>
        </div> 
    );

    if(props.type === "PresentationCard"){
        cards = (
            <div className = {classes.ContainerCard}>
                <div className = {classes.TitleCard}>{props.title} <strong>US</strong></div>
                <div className = {classes.LineCard}></div>
                <div className = {classes.BodyCard}>{props.body}</div>
            </div> 
        );
    }
    else if(props.type === "ContactCard")
    {
        cards = (
            <div className = {classes.ContainerCard}>
                <div className = {classes.LineCard}></div>
                <div className = {classes.BodyCard}><strong>Address: </strong>{props.address}</div>
                <div className = {classes.BodyCard}><strong>Phone: </strong>{props.phone}</div>
                <div className = {classes.BodyCard}><strong>Email: </strong>{props.email}</div>
                <div className = {classes.SocialMediaContainer}>
                    <i className="fa fa-2x fa-facebook-square"  aria-hidden="true" style = {{color:'#3a559f'}}></i>
                    <i className="fa fa-2x fa-google-plus-square" aria-hidden="true" style = {{color:'gray'}}></i>
                    <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" style = {{color:'#0084b1'}}></i>
                    <i className="fa fa-2x fa-twitter-square" aria-hidden="true" style = {{color:'#50abf1'}}></i>
                </div>
            </div> 
        );
    }

    return(
        <Aux>
            {cards}
        </Aux>
        
    );
           
    };

export default viewCard;