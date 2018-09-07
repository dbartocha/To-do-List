import React from 'react';
import '../sass/reigstrationStyle.css'
import {
    Link
} from 'react-router-dom';
import * as firebase from "firebase";


class Registration extends React.Component {

    state = {
        email: '',
        login: '',
        password: '',
        password2: '',
        error: ['Coś poszło nie tak']

    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

// Ta funkcja przeprowadza podstawową walidację
    checkRegister = () => {

        if (this.state.email.indexOf('@') < 0) {


            this.setState({
                error: [...this.state.error, 'To nie jest prawidłowy adres email']
            })


        }
        else if(this.state.password!==this.state.password2){
            this.setState({
                error:[...this.state.error,'Hasła nie są takie same']
            })
        }
        else if(this.state.password.length<1){
            this.setState({
                errort:[...this.state.error,'Hasło za krótkie']
            })
        }
        else if(this.state.login.length<1){
            this.setState({
                errort:[...this.state.error,'Nazwa użytkownika zbyt krótka']
            })
        }
        else {
            this.setState({
                error: []
            });

            this.register();
        }


    };


    //Ta funkcja  przeprowadza dodatkową walidację i przesyła dane które wprowadził użytkownik do bazy danych

    register = () => {

        firebase.database().ref('users').push({

            email: this.state.email,
            login: this.state.login,
            password: this.state.password,


        }).then()



    };



    render() {
        let counter = 0;


        return (
            <div>
                <div>
                    <input id='email' type='email' placeholder='Tutaj wprowadź swój adres e-mail'
                           onChange={this.handleChange}/>
                </div>

                <div>
                    <input id='login' type='text' placeholder='Tu podaj swoją nazwę użytkownika'
                           onChange={this.handleChange}/>
                </div>

                <div>
                    <input id='password' type='password' placeholder='Tutaj wpisz swoje hasło'
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <input id='password2' type='password' placeholder='Powtórz hasło'
                           onChange={this.handleChange}/>
                </div>

                <div>
                    <Link to='/'>
                        <button>
                            Strona główna
                        </button>
                    </Link>
                </div>
                <div>
                    <button onClick={this.checkRegister}>Zarejestruj</button>
                </div>
                <div>

                    {this.state.error.length > 1 && this.state.error.map((el) => {
                        counter++;
                        return (
                            <ul>
                                <li key={counter}>{el}</li>
                            </ul>
                        )


                    })}


                    {this.state.error.length === 0 && <h2>Wszystkie dane prawidłowe udało się zarejestrować :)</h2>}

                </div>
            </div>
        )
    }


}


export default Registration;