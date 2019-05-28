import React from 'react';
import '../sass/errorComponent.scss';
import arrowUp from '../images/arrowUp.png';


class ErrorComponent extends React.Component {
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
        const { colorTxt } = this.props;
        return (
            <div id="errorComponent" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUp} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1 className={`${colorTxt}`}>Error</h1>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}




export default ErrorComponent;
