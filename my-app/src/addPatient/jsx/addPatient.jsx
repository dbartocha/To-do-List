import React from 'react';
import '../sass/addPatientStyle.css'
import * as firebase from "firebase";
import MainPageLogged from "../../mainPageLogged/jsx/mainPage";


class AddPatient extends React.Component {

    state = {
        login:this.props.login,
        name: '',
        age: '',
        height: '',
        weight: '',
        bloodGroup: '',
        errors: [],
        main:false,
        id:this.props.id

    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
// Ta funkcja pomaga wrócić na stronę główną
    backToMain=()=>{

    this.setState({
        main:!this.state.main,
    })

};

    // Ta funkcja sprawdza czy pola nie są puste i jeśli nie są dodaje do danego użytkownika pacjenta
    adding = () => {
        if (this.state.name.length < 1 && this.state.weight.length < 1 && this.state.height < 1 && this.state.bloodGroup.length < 1 && this.state.age.length < 1) {

            this.setState({
                errors: ['Uzupełnij Dane!']
            })
        }
        else {
                        firebase.database().ref(`users/${this.state.id}/patients`).push({
                            name: this.state.name,
                            age: this.state.age,
                            height: this.state.height,
                            weight: this.state.weight,
                            bloodGroup: this.state.bloodGroup


                        }).then()
        }
    };


    render() {
if(this.state.main===false) {
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
            <button onClick={this.backToMain}>Strona główna</button>


            <div>
                {this.state.errors.length > 0 && <h2>{this.state.errors}</h2>}
            </div>

        </div>
    )
}
else{
    return(
        <MainPageLogged login={this.state.login} id={this.state.id}/>
    )
}

    }

}

export default AddPatient;