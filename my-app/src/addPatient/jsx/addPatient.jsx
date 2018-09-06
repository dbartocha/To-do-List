import React from 'react';
import '../sass/addPatientStyle.css'
import {
    Link
} from 'react-router-dom';
import * as firebase from "firebase";


class AddPatient extends React.Component {

    state = {
        name: '',
        age: '',
        height: '',
        weight: '',
        bloodGroup: '',
        errors: []


    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };


    adding = () => {
        if (this.state.name.length < 1 && this.state.weight.length < 1 && this.state.height < 1 && this.state.bloodGroup.length < 1 && this.state.age.length < 1) {

            this.setState({
                errors: ['Uzupełnij Dane!']
            })
        }
        else {

            firebase.database().ref('patients').push({

                imię: this.state.name,
                wiek: this.state.age,
                wzrost: this.state.height,
                waga: this.state.weight,
                grupaKrwi: this.state.bloodGroup


            }).then()


        }
    };

    render() {

        return (

            <div>
                <div>
                    <input onChange={this.handleChange} type='text' placeholder='Podaj imię pacjenta' id='name'/>
                </div>
                <div>
                    <input onChange={this.handleChange} type='number' placeholder='Podaj wiek pacjenta' id='age'/>
                </div>
                <div>
                    <input onChange={this.handleChange} type='number' placeholder='Podaj wzrost pacjenta' id='height'/>
                </div>
                <div>
                    <input onChange={this.handleChange} type='number' placeholder='Podaj wagę pacjenta' id='weight'/>
                </div>
                <div>
                    <input onChange={this.handleChange} type='text' placeholder='Podaj grupę krwi pacjenta'
                           id='bloodGroup'/>
                </div>

                <button onClick={this.adding}>Dodaj</button>
                <Link to='/'>
                    <button>Strona główna</button>
                </Link>

                <div>
                    {this.state.errors.length>0&&<h2>{this.state.errors}</h2>}
                </div>

            </div>
        )


    }

}

export default AddPatient;