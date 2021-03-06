import ValidateEmail from "./ValidateEmail";
import ValidateUsername from "./ValidateUsername";

interface ICredentials {
    username: string,
    password: string,
}

class ValidateCredentials {
    // constructor(credentials: ICredentials)
    // {
    //     // const credentials = credential;
    //     console.log('Constructor Validate Credentials called.')

    //     this.startValidatingCredentials(credentials);
    // }

    startValidatingCredentials = (credentials: ICredentials) => {
        const login_method = this.#getLoginMethod(credentials.username);

        if (login_method === "EMAIL") {
            const email = credentials.username;
            const ve = new ValidateEmail();
            if (!ve.isEmailValid(email)) {
                console.log('EMail is not valid fucker!');
                return 'FAIL';
            }
            console.log('Email input is valid!');
            if (!ve.verifyEmailIfPresentInDB(email)) {
                console.log('Email is not present in DB!');
                return 'FAIL';    
            }
            console.log('Email is present in DB!');
        }
    }

    #getLoginMethod = (name_or_email: string) => {
        if (name_or_email.indexOf('@') > -1)
        {
            console.log('METHOD USED IN LOGGING IN IS EMAIL!!');
            return "EMAIL";
        }

        console.log('METHOD USED IN LOGGING IN IS USERNAME!!');
        return "USERNAME";
    }
};

export default ValidateCredentials;