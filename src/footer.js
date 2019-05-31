import React from 'react';
import './sass/footer.scss';

class Footer extends React.Component {
    state = {

    }

    render() {
        const { languagePl } = this.props;
        return (
            <div className="container">
                {languagePl ? '© 2019 Hubert Mazur | Wszelkie prawa zastrzeżone.'
                    :
                    '© 2019 Hubert Mazur | All rights reserved.'}
            </div>
        )
    }
}

export default Footer;