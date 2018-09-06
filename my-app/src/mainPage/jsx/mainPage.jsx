import React from 'react';
import '../sass/mainPageStyle.css'
import {
    Link
} from 'react-router-dom';


class MainPage extends React.Component {

    render() {
        return (
            <div className="mainPage">
                <div className='firstButtonDiv'>
                    <Link to='/1'>
                        <button>Tu jest pierwszy przycisk</button>
                    </Link>
                </div>
                <div className='secondButtonDiv'>
                    <Link to='/2'>
                        <button>Tu jest drugi przycisk</button>
                    </Link>
                </div>
                <div className='thirdButtonDiv'>
                    <Link to='/3'>
                        <button>Tu jest trzeci przycisk</button>
                    </Link>
                </div>
                <div className='fourthButtonDiv'>
                    <Link to='/4'>
                        <button>Tu jest czwarty przycisk</button>
                    </Link>
                </div>
                <div className='addUser'>
                    <Link to='/register'>
                        <button>TU będzie plusik :D</button>
                    </Link>
                </div>

                <div>
                    <Link to='/login'><button>Logowanie</button></Link>
                </div>
            </div>


        )
    }

}

export default MainPage;