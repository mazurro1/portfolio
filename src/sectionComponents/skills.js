import React from 'react';
import '../sass/skills.scss';
import arrowUp from '../images/arrowUp.png';
import html from '../images/icon_html5.png';


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


        return (
            <div id="skills" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUp} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1>Umiejętności</h1>
                    <div className="technology">
                        <p>Lista technologii, ktore opanowalem na poziomie podstawowym i aktualnie je rozwijam.</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CreateIcons icons={this.icons} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const CreateIcons = ({ icons }) => {
    const create = icons.map(icon => { })
    return (
        <>
            <img src="" alt="" />
        </>
    )
}


export default Skills;
