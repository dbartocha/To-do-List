import React from 'react';
import '../sass/patientsStyle.css'
import * as firebase from "firebase";
import MainPageLogged from "../../mainPageLogged/jsx/mainPage";


class Patients extends React.Component {

    state = {
        login:this.props.login,
        main: false,
        id: this.props.id,
        patients: []
    };

//Funkcja która pomaga wrócić do strony głównej
    backToMain=()=>{

        this.setState({
            main:!this.state.main,
        })

    };
// Dzięki temu pokazuje nam całą listę pacjentów :)
    componentDidMount() {
        firebase.database().ref(`users/${this.state.id}/patients`).on("value", snap => {

            const val = snap.val();

            let tab = [];

            for (let key in val) {
                tab.push(val[key])
            }

            this.setState({
                patients: tab
            })
        })


    }


    render() {
        if (this.state.main === false) {
            return (
                <div>
                    <ul>
                        {this.state.patients.map((el) => {

                                return (<li>
                                    <span>Imię pacjenta : {el.name}</span>
                                    <span> Wiek pacjenta : {el.age}</span>
                                    <span>Wzrost pacjenta : {el.height}</span>
                                    <span>Waga pacjenta : {el.weight}</span>
                                    <span>Grupa krwi pacjenta : {el.bloodGroup}</span>
                                </li>)
                            }
                        )}
                    </ul>
                    <button onClick={this.backToMain}>Strona główna</button>
                </div>
            )
        }
        else {
            return (
                <MainPageLogged login={this.state.login} id={this.state.id}/>
            )
        }
    }


}

export default Patients;