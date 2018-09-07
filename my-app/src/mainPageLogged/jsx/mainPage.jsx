import React from 'react';
import '../sass/mainPageStyle.css'
import {
    Link
} from 'react-router-dom';

import AddPatient from "../../addPatient/jsx/addPatient";
import Patients from "../../patients/jsx/patients";

class MainPageLogged extends React.Component {

    state = {
        id: this.props.id,
        adding: false,
        login: this.props.login,
        patients: false

    };
// Funkcja która pomaga przekierować na strone z pacjentami
    patients = () => {

        this.setState({
            patients: !this.state.patients
        })

    };
// Funkcja która pomaga przekierować na stronę z dodawaniem pacjentów
    adding = () => {

        this.setState({
            adding: !this.state.adding
        })
    };

    render() {
//Warunkowe renderowanie, w zależności od tego jaki jest podany argument wyświetla daną stronę :)

        if (this.state.adding === true) {
            return (
                <AddPatient login={this.state.login} id={this.state.id}/>
            )
        }
        else if (this.state.patients === true) {

            return (
                <Patients id={this.state.id} login={this.state.login}/>
            )

        }
        else {
            return (
                <div className='body'>


                    <h1> Witaj {this.state.login}!!</h1>
                    <button onClick={this.patients}>Pacjenci</button>

                    <div className='hit-the-floor logo'><span>Sissy</span> Virtual Nurse</div>
                    <div className='sissy'>
                    </div>

                    <div className="fourButtons">
                        <div className='buttons firstButtonDiv'>
                            <Link to='/1'>
                                <div className='butt'>
                                    <div className='doctorIcon'></div>
                                </div>
                            </Link>
                        </div>
                        <div className='buttons secondButtonDiv'>
                            <Link to='/2'>
                                <div className='butt'>
                                    <div className='medicineIcon'></div>
                                </div>
                            </Link>
                        </div>
                        <div className='buttons thirdButtonDiv'>
                            <Link to='/3'>
                                <div className='butt'>
                                    <div className='historyIcon'></div>
                                </div>
                            </Link>
                        </div>
                        <div className='buttons fourthButtonDiv'>
                            <Link to='/4'>
                                <div className='butt'>
                                    <div className='contactIcon'></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='infoBox'>
                        xxx
                    </div>

                    <div className='addUser' onClick={this.adding}>

                        <button className='hit-the-floor add '> Dodaj</button>
                        <button className='hit-the-floor btn'></button>
                        <button className='hit-the-floor add2 '>pacjenta</button>

                    </div>


                </div>


            )
        }

    }
}


export default MainPageLogged;