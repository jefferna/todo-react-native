import React, { Component } from 'react';
import {
    View,
} from 'react-native';
  
import {
    UsernameInput,
    PasswordInput,
} from '../../components/text-input'

import {
    LoginButton,
    SignupButton,
} from '../../components/button'


import {
    ValidateCredentials,
} from '../../utils/validators'

// interface Props {
//     username: string,

// }

// interface Credentials {
//     username: string,
//     password: string,
// }

interface State {
    user_credentials: {
        username: string,
        password: string,
    }
}

class LoginPage extends Component<any, State> {

    constructor(props: any)
    {
        super(props);

        this.state = {
            user_credentials: {
                username: '',
                password: '',
            },
        };
    }

    assignToUsernameContext = (text: string) => {
        const { password } = this.state.user_credentials;
        this.setState({
            user_credentials: {
                username: text,
                password: password
            }
        });
    }

    assignToPasswordContext = (text: string) => {
        const { username } = this.state.user_credentials;
        this.setState({
            user_credentials: {
                username: username,
                password: text
            }
        });
    }

    sendUserCredentialsForValidation = () => {
        // new ValidateCredentials(this.state.user_credentials);
        // vc.validateCredentials(this.state.user_credentials);
        const vc = new ValidateCredentials;
        vc.startValidatingCredentials(this.state.user_credentials);
        console.log(`Sending credentials for validation: ${JSON.stringify(this.state.user_credentials)}`);

    }

    render() {
        return(
            <>
                <View style={{paddingLeft: 75, paddingRight: 75, justifyContent: 'center', flex: 10}}>
                    <UsernameInput handleTextChange={this.assignToUsernameContext}/>
                    <PasswordInput handleTextChange={this.assignToPasswordContext}/>
                    <LoginButton handleButtonClick={this.sendUserCredentialsForValidation}/>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <SignupButton/>
                </View>
            </>
        );
    };
};

export default LoginPage;