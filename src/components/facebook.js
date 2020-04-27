import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
       isLoggedIn: false, 
       userID: '',
       name : '',
       email: '',
       picture: '',
   
    }

    //The response from Facebook's server 
    responseFacebook = response => {
       this.setState ({
           isLoggedIn: true,
           userID: response.userID,
           name : response.name,
           email: response.email,
           picture: response.picture.data.url,
       });
    }
    
    componentClicked = () => console.log('clicked');

    render (){
        let facebookContent;
    
        //Checks if logged in or not
        if(this.state.isLoggedIn){

            //If logged in, print out the information we have about the user.
            facebookContent=(
                <div style = {{
                    width: '500px',
                    margin: 'auto',
                    background: '#f3f2f2',
                    padding: '30px'
                }}>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
            Email: {this.state.email}
            </div>
                            
            );
        } else {
            //If not logged in we send a request to login to facebook with the App-ID, and then to user.
            //The user needs to accept the data we gets from it to get access to the website. 
            facebookContent = (<FacebookLogin
                appId = "694384494722995"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />);
        }


    return <div>{facebookContent}</div>;
    }
}