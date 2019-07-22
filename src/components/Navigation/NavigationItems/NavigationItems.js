import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = (props) => {

    if (!props.links) return null;

    const links = props.links.map((NavigationLinks, index) => {
        return (
            <NavigationItem link={NavigationLinks.destination} exact click={props.click} key={NavigationLinks.destination}>{NavigationLinks.linkText}</NavigationItem>        
        );
    })

    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" click={props.click} exact>
                <Logo />
            </NavigationItem>
            {links}
        </ul>
    );

}


export default navigationItems;