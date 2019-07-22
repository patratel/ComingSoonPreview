import React, {Component} from 'react';
import Aux from '../Aux/Aux';

import classes from './Layout.module.css';

import backgroundImage from '../../assets/images/background.jpg';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = { 
        showSideDrawer: false,
        navigationLinks: [
            {
                destination:"/aboutUs",
                linkText: "About Us"
            },
            {
                destination:"contactUs",
                linkText:"Get in Touch"
            }
        ]
    }

    componentDidMount(){
        this.updateToolBar(this.props.pathName);
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.pathName !== prevProps.pathName)
            this.updateToolBar(this.props.pathName);
    }

    sideDrawerClosedHandler = () => {
        console.log("fds");
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    updateToolBar = (destination) => {
        let updatedLinks = [...this.state.navigationLinks];
        if(destination === '/'){
            updatedLinks = [
                {
                    destination:"/aboutUs",
                    linkText: "About Us"
                },
                {
                    destination:"contactUs",
                    linkText:"Get in Touch"
                }
            ] 
        }
        if(destination === "/aboutUs")
        {
            updatedLinks = [
                {
                    destination:"/",
                    linkText:"Home"
                },
                {
                    destination:"/contactUs",
                    linkText:"Get in Touch"
                }
            ]
        }
        if(destination === "/contactUs")
        {
            updatedLinks = [
                {
                    destination:"/aboutUs",
                    linkText:"About Us"
                },
                {
                    destination:"/",
                    linkText:"Home"
                }
            ]
        }
        this.setState({navigationLinks: updatedLinks })
    }

    render(){
        return(
            <Aux>
                <Toolbar 
                    pathName = {this.props.pathName} 
                    links = {this.state.navigationLinks} 
                    sideDrawerClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    links = {this.state.navigationLinks}
                    closed={this.sideDrawerClosedHandler} />
                <img className={classes.BackgroundImage} src={backgroundImage} alt="backgroundImage"/>
                {this.props.children}
            </Aux>
        );
    }
   
};

export default Layout;