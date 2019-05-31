import React from 'react';
import '../sass/aboutMe.scss';


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
        const { colorBg, colorTxt, arrowUpColor, languagePl } = this.props;

        return (
            <div id="aboutMe" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUpColor} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1 className={`${colorTxt}`}>
                        {languagePl ? 'O mnie' : 'About me'}
                    </h1>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <h2 className={`${colorBg}`}>
                                {languagePl ? 'Kim jestem?' : 'Who am I?'}
                            </h2>
                            <p>

                                {languagePl ? 'Nazywam się Hubert Mazur. Mam 23 lata, ukończyłem studia informatyczne na Katolickim Uniwersytecie Lubelskim Jana Pawła II na specjalizacji: grafika komputerowa oraz Mieszkam w Warszawie.'
                                    :
                                    'My name is Hubert Mazur. I am 23 years old, I graduated from the IT studies at the John Paul II Catholic University of Lublin on the specialization of computer graphics and I live in Warsaw.'}
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2 className={`${colorBg}`}>
                                {languagePl ? 'Co umiem?' : 'What can I do?'}
                            </h2>
                            <p>

                                {languagePl ? 'Jestem samoukiem, którego pasją jest programowanie, dlatego nieustannie staram się rozwijać swoje umiejętności. Aktualnie znam: HTML5, CSS3, SASS, JavaScript, React, Bootstrap 4, C++, oraz programy takie jak: GitHub, VisualStudio Code, Adobe Photoshop CC, Adobe Illustrator CC, Adobe Animate CC oraz Blender.'
                                    :
                                    `I am self-taught whose passion is programming :), that's why I constantly try to develop my skills. Currently I know: HTML5, CSS3, SASS, JavaScript, React, Bootstrap 4,C ++, and programs such as: GitHub, VisualStudio Code, Adobe Photoshop CC, Adobe Illustrator CC, Adobe Animate CC and Blender.`}
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2 className={`${colorBg}`}>
                                {languagePl ? 'Co aktualnie robię?' : 'What I am currentaly doing?'}
                            </h2>
                            <p>

                                {languagePl ? 'Pracuję na stanowisku Junior Front-end developer w firmie Global-Dial z siedzibą w Warszawie.'
                                    :
                                    'I work as a Junior Front-end developer at Global-Dial based in Warsaw.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default AboutMe;
