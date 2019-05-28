import React from 'react';
import '../sass/skills.scss';
import arrowUp from '../images/arrowUp.png';
import html from '../images/icon_html5.png';
import css3 from '../images/icon_css3.png';
import sass from '../images/icon_sass.png';
import js from '../images/icon_js.png';
import bootstrap from '../images/icon_bootstrap.png';
import react from '../images/icon_react.png';
import webpack from '../images/icon_webpack.png';
import github from '../images/icon_github.png';
import photoshop from '../images/icon_ps.png';
import illustrator from '../images/icon_ai.png';
import blender from '../images/icon_blender.png';


class Skills extends React.Component {
    state = {
        arrowActive: true,
        classArrow: 'noActive',
        classArrowRotate: 'noActiveArrow'
    }

    icons = [
        {
            id: 1,
            alt: 'icon html',
            img: html,
        },
        {
            id: 2,
            alt: 'icon css3',
            img: css3,
        },
        {
            id: 3,
            alt: 'icon sass',
            img: sass,
        },
        {
            id: 4,
            alt: 'icon bootstrap',
            img: bootstrap,
        },
        {
            id: 5,
            alt: 'icon js',
            img: js,
        },
        {
            id: 6,
            alt: 'icon react',
            img: react,
        },
        {
            id: 7,
            alt: 'icon webpack',
            img: webpack,
        },
        {
            id: 8,
            alt: 'icon github',
            img: github,
        },
        {
            id: 9,
            alt: 'icon photoshop',
            img: photoshop,
        },
        {
            id: 10,
            alt: 'icon illustrator',
            img: illustrator,
        },
        {
            id: 11,
            alt: 'icon blender',
            img: blender,
        },
    ]

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
        const { colorTxt } = this.props;

        return (
            <div id="skills" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUp} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1 className={`${colorTxt}`}>Umiejętności</h1>

                    <p>Lista programów oraz technologii, ktore opanowalem.</p>

                    <div className="row">
                        <div className="col icons">
                            <CreateIcons icons={this.icons} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const CreateIcons = ({ icons }) => {
    const create = icons.map(icon => {
        return (
            <img src={icon.img} alt={icon.alt} key={icon.id} />
        )
    })
    return (
        <>
            {create}
        </>
    )

}


export default Skills;
