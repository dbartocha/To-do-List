import React from 'react';
import '../sass/mainPageStyle.css'
import {
    Link
} from 'react-router-dom';


class MainPage extends React.Component {

    render() {
        return (
            <div className='body'>
                <div className='hit-the-floor logo'><span>Sissy</span>     Virtual Nurse</div>
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

                <div className='addUser'>
                    <Link to='/register'>

                        <button className='hit-the-floor add '>  Dodaj</button>
                        <button className='hit-the-floor btn'></button>
                        <button className='hit-the-floor add2 '>pacjenta</button>
                    </Link>
                </div>

                <div className='registerBox'>
                    <Link to='/login'>
                        <button className='hit-the-floor registerBtn'>Zarejestruj się!</button>
                    </Link>
                </div>



            </div>


        )
    }

}

export default MainPage;