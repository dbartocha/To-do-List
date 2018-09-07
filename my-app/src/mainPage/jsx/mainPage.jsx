import React from 'react';
import '../sass/mainPageStyle.css'
import {
    Link
} from 'react-router-dom';
import * as firebase from "firebase";
import MainPageLogged from '../../mainPageLogged/jsx/mainPage'

class MainPage extends React.Component {

    state = {
        password: '',
        errors: '',
        good: '',
        login: '',
        check: false
    };


//To jest kontrola inputów
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };


    //Ta funkcja odpowiada za wysyłanie danych do bazy danych
    handleClick = () => {


        firebase.database().ref('users').on("value", snap => {

            const val = snap.val();

            snap.forEach((el)=>{

                if(this.state.login===el.val().login){
                    this.setState({
                        id:el.key
                    })
                }


            });




            for (let key in val) {


                if (this.state.login === val[key].login && this.state.password === val[key].password) {

                    this.setState({
                        check: true,
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

        //Tu mamy warunkowe renderowanie aby rozróźnić elementy przed i po zalogowaniu
        //Te większe przerwy, pomiędzy nie wrzuciłem formularz logowania :)
        //Tu pod spodem jest strona przed zalogowaniem
        if (this.state.check === false) {
            return (
                <div className='body'>


                    <div>

                        <div>
                            <input type="text" id='login' placeholder='Podaj nazwę użytkownika'
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="password" id='password' placeholder='Wpisz hasło'
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <button onClick={this.handleClick}>Zaloguj</button>
                        </div>


                        <div>

                            {this.state.good.length > 0 ? <h1>{this.state.good}</h1> : <h1>{this.state.errors}</h1>}


                        </div>
                    </div>


                    <div className='hit-the-floor logo'><span>Sissy</span> Virtual Nurse</div>
                    <div className='sissy'>
                    </div>

                    <div className="fourButtons">
                        <div className='buttons firstButtonDiv'>

                                <div className='butt'>
                                    <div className='doctorIcon'> </div>
                                </div>

                        </div>
                        <div className='buttons secondButtonDiv'>

                                <div className='butt'>
                                    <div className='medicineIcon'> </div>
                                </div>

                        </div>
                        <div className='buttons thirdButtonDiv'>

                                <div className='butt'>
                                    <div className='historyIcon'> </div>
                                </div>

                        </div>
                        <div className='buttons fourthButtonDiv'>

                                <div className='butt'>
                                    <div className='contactIcon'> </div>
                                </div>

                        </div>
                    </div>
                    <div className='infoBox'>
                        xxx
                    </div>

                    <div className='addUser'>


                            <button className='hit-the-floor add '> Dodaj</button>
                            <button className='hit-the-floor btn'> </button>
                            <button className='hit-the-floor add2 '>pacjenta</button>

                    </div>

                    <div className='registerBox'>
                        <Link to='/register'>
                            <button className='hit-the-floor registerBtn'>Zarejestruj się!</button>
                        </Link>
                    </div>


                </div>


            )
        }


        //Tu mamy wersję strony po zalogowaniu :)
        else {
           return (
               <MainPageLogged login={this.state.login} id={this.state.id}/>
           )
        }

    }

}

export default MainPage;