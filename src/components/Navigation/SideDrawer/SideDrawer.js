import React from 'react';

import classes from './SideDrawer.module.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems links = {props.links} click = {props.closed}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;