import React from 'react';
import '../sass/signInStyle.css'
import {
    Link
} from 'react-router-dom';
import * as firebase from "firebase";


class SignIn extends React.Component {

    state = {

        login: '',
        password: '',
        errors: '',
        good: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleClick = () => {


        firebase.database().ref('users').on("value", snap => {

            const val = snap.val();


            for (let key in val) {


                if (this.state.login === val[key].login && this.state.password === val[key].password) {
                    this.setState({
                        good: ["Brawo udało Ci się zalogować!! ;)"]
                    })
                }
                else {

                    this.setState({
                        errors: ['Coś poszło nie tak, spróbuj jeszcze raz!']
                    })

                }

            }

        })


    };


    render() {


        return (

            <div>

                <div>
                    <input type="text" id='login' placeholder='Podaj nazwę użytkownika' onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password" id='password' placeholder='Wpisz hasło' onChange={this.handleChange}/>
                </div>
                <div>
                    <button onClick={this.handleClick}>Zaloguj</button>
                </div>

                <div>
                    <Link to='/'>
                        <button>Strona główna</button>
                    </Link>
                </div>
                <div>

                    {this.state.good.length > 0 ? <h1>{this.state.good}</h1> : <h1>{this.state.errors}</h1>}


                </div>
            </div>
        )
    }


}

export default SignIn;