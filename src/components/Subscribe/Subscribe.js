import React from 'react';

import classes from './Subscribe.module.css';

import mailIcon from '../../assets/icons/buttons/mail.png';


const subscribe = (props) => (
          <div className = {classes.Container}>
              <input placeholder="Get notified by email..." className = {classes.Input}></input>
              <img  className = {classes.MailIcon} src = {mailIcon} alt="email"/>
          </div>  
    );

export default subscribe;