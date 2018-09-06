import React from 'react';
import '../sass/reigstrationStyle.css'
import {
    Link
} from 'react-router-dom';
import * as firebase from "firebase";


class Registration extends React.Component{

    state={
      email:'',
      login:'',
      password:'',
        error:['Coś poszło nie tak']

    };



    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };


    checkRegister=()=>{

        if(this.state.email.indexOf('@')<0){



            this.setState({
                error:[...this.state.error,'To nie jest prawidłowy adres email']
            })



        }
        else{
            this.setState({
                error:[]
            });

            this.register();
        }


    };


        register=()=>{



                firebase.database().ref('users').push({

                    email:this.state.email,
                    login:this.state.login,
                    password:this.state.password,



                }).then()



        };


// firebase.database().ref('/users').push({
//                 nickname: this.state.name,
//                 points: 0
//             }).then( () => this.props.history.push('/game'))

    render(){
        let counter=0;


        return(
            <div>
                <div>
                    <input id='email' type='email' placeholder='Tutaj wprowadź swój adres e-mail' onChange={this.handleChange}/>
                </div>

                <div>
                    <input id='login' type='text' placeholder='Tu podaj swoją nazwę użytkownika' onChange={this.handleChange}/>
                </div>

                <div>
                    <input id='password' type='password' placeholder='Tutaj wpisz swoje hasło' onChange={this.handleChange}/>
                </div>

                <div>
                    <Link to='/'><button>
                        Strona główna
                    </button></Link>
                </div>
                <div>
                    <button onClick={this.checkRegister}>Zarejestruj</button>
                </div>
                <div>

                    {this.state.error.length>1&&this.state.error.map((el)=>{
                        counter++;
                        return(
                            <ul>
                                <li key={counter}>{el}</li>
                            </ul>
                        )


                    })}


                    {this.state.error.length===0&&<h2>Wszystkie dane prawidłowe udało się zarejestrować :)</h2>}

                </div>
            </div>
        )
    }


}


export default Registration;