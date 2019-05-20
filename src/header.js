import React from 'react';
import './sass/header.scss';

class Header extends React.Component {
    state = {
        welcome: '',
        indexText: 0,
    }

    componentDidMount() {
        const text = 'Witaj na moim portfolio!';
        this.indexInterval = setInterval(() => {
            this.setState(prevState => ({
                indexText: prevState.indexText + 1,
                welcome: prevState.welcome + text[prevState.indexText],
            }))

            if (this.state.indexText === text.length) {
                clearInterval(this.indexInterval);
            }
        }, 50)
    }

    componentWillUnmount() {
        if (this.state.indexText === 5) {
            clearInterval(this.indexInterval);
        }
    }

    render() {
        return (
            <div className="header">
                <h1>{this.state.welcome}</h1>
                <div>

                </div>
            </div>
        )
    }
}

export default Header;