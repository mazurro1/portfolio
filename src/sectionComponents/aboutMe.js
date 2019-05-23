import React from 'react';
import '../sass/aboutMe.scss';
import arrowUp from '../images/arrowUp.png';


class AboutMe extends React.Component {
    state = {
        arrowActive: true,
        classArrow: 'noActive',
        classArrowRotate: 'noActiveArrow'
    }

    handleArrow = e => {
        if (this.state.arrowActive) {
            this.setState(prevState => ({
                arrowActive: !prevState.arrowActive,
                classArrow: 'active',
                classArrowRotate: 'activeArrow',
            }))
        } else {
            this.setState(prevState => ({
                arrowActive: !prevState.arrowActive,
                classArrow: 'noActive',
                classArrowRotate: 'noActiveArrow',
            }))
        }

    }


    render() {


        return (
            <div id="aboutMe" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUp} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1>O mnie</h1>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <h2>Kim jestem?</h2>
                            <p>
                                Nazywam się Hubert Mazur. Mam 23 lata, ukończyłem studia informatyczne na Katolickim Uniwersytecie Lubelskim Jana Pawła II na specjalizacji: grafika komputerowa oraz Mieszkam w Warszawie.
                        </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2>Co umiem?</h2>
                            <p>
                                Jestem samoukiem, którego pasją jest programowanie :), dlatego nieustannie staram się rozwijać swoje umiejętności.
                                Aktualnie znam: HTML5, CSS3, SASS, JavaScript, React, Bootstrap 4, C++, oraz programy takie jak: GitHub, VisualStudio Code, Adobe Photoshop CC, Adobe Illustrator CC, Adobe Animate CC oraz Blender.
                        </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2>Co aktualnie robię?</h2>
                            <p>
                                Pracuję na stanowisku Junior Front-end developer w firmie Global-Dial z siedzibą w Warszawie.

                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default AboutMe;
