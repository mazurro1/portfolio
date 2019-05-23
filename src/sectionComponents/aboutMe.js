import React from 'react';
import '../sass/aboutMe.scss';
import arrowUp from '../images/arrowUp.png';


class AboutMe extends React.Component {
    state = {
        arrowActive: false,
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
                                Nazywam się Hubert Mazur. Mam 23 lata, ukończyłem studia informatyczne na Katolickim Uniwersytecie Lubelskim Jana Pawła II na specjalizacji: grafika komputerowa. Aktualnie mieszkam w Radomiu, ale rozważam pracę w Warszawie. Od pół roku robię wszystko w kierunku zawodu, w którym zamierzam pracować.
                        </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2>Kim zamierzam być?</h2>
                            <p>
                                Z zawodu zamierzam być front web developerem. Na samym początku, czyli około 5 lat temu zamierzałem być grafikiem komputerowym, dlatego w moich pracach Państwo mogą spodziewać się nowoczesnego wyglądu stron. Oczywiście nie mówię, że wszystkie moje prace tak wyglądają. Jest tak dlatego, ponieważ ciągle się uczę i wraz z kolejnymi projektami staram się je udoskonalać pod tym aspektem.
                        </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2>Co aktualnie robię?</h2>
                            <p>
                                Staram się ciągle uczyć nowych technologii. Aktualnie władam biegle: HTML5, CSS3, SASS, JavaScript, Bootstrap 4, C++, oraz programami takimi jak: Adobe Photoshop CC, Adobe Illustrator CC, Adobe Animate CC oraz Blender. Językami, które opanowałem na poziomie podstawowym oraz aktualnie, których się uczę są: PHP 7, React. W przyszłości zamierzam się nauczyć: Wordpress, WooCommerce.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default AboutMe;
