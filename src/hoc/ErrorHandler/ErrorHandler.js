import React, { Component } from 'react';
import Aux from '../Aux/Aux';

const errorHandler = ( WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
            } );
        }

        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        }


        render () {
            return (
                <Aux>
                    {this.state.error ? alert(this.state.error.message) : null}
                    <WrappedComponent {...this.props} />
                </Aux>            );
        }
    }
}

export default errorHandler;