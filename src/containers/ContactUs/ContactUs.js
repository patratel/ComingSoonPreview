import React, { PureComponent } from 'react';

import classes from './ContactUs.module.css';
import ViewCard from '../../components/ViewCards/ViewCard/ViewCard';
import Form from './Form/Form';

class ContactUs extends PureComponent {

    render () {
        return (
            <div className = {classes.Content}>
                <div className = {classes.CardsContainer}>
                    <ViewCard
                        title = {"Contact"} 
                        type = {"PresentationCard"}
                        body = {"We are here to help you and find answers to your questions on our Support section.If you can't find the answer to your question or have any feedback, reach out to us by completing the form. All fields are mandatory unless otherwise stated."} 
                    />
                    <ViewCard
                        type = {"ContactCard"}
                        address = {"123 Palo Alto, CA 94300"}
                        phone = {"+1 234-567-8910"}
                        email = {"contact@yourdomain.net"}
                    />
                </div>            
                <Form />
            </div>
        );
    }
}

export default ContactUs;