import React, { Component } from 'react';

import classes from './Form.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import axios from 'axios';
import errorHandler from '../../../hoc/ErrorHandler/ErrorHandler';

const API_KEY = "0dbdbddda54e1cb73a3f3825a917b8da";
const API_SECRET = "5ae353f65df7907bafc2bfa75336c94f";
const SENDER_EMAIL = "tomapaul71@gmail.com";
const REQUEST_URL = "https://api.mailjet.com/v3.1/send";

class Form extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            company: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Company'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    sendEmail = (email) =>{

        const data = {"Messages":[
            {
            "From": {
                    "Email": SENDER_EMAIL,
                    "Name": "Me"
            },
            "To": [
                    {
                            "Email": email,
                            "Name": "You"
                    }
            ],
            "Subject": "My first Mailjet Email!",
            "TextPart": "Greetings from Mailjet!",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
        ]};  

        axios.post(REQUEST_URL,data,{
            auth: {
                username: API_KEY,
                password: API_SECRET
            }
        } )
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        });
    }

    contactFormHandler = ( event ) => {
        event.preventDefault();
        this.sendEmail(this.state.contactForm.email.value);
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = { 
            ...updatedContactForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    }

   render(){
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }
        let form = (
            <form onSubmit={this.contactFormHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button disabled={!this.state.formIsValid}>SUBMIT</Button>
            </form>
        );
        return (
            <div className={classes.Container}>
                {form}
            </div>
        );
   }
}
export default errorHandler(Form, axios);