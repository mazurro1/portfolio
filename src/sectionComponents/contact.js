import React from 'react';
import '../sass/contact.scss';
import facebook from '../images/facebook.png';
import messenger from '../images/messenger.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

class Contact extends React.Component {
    state = {
        arrowActive: true,
        classArrow: 'noActive',
        classArrowRotate: 'noActiveArrow'
    }
    contactList = [
        {
            id: 1,
            target: "_blank",
            image: facebook,
            link: 'https://www.facebook.com/Hubaa01',
            alt: 'Facebook',
        },
        {
            id: 2,
            target: "_blank",
            image: messenger,
            link: 'https://web.facebook.com/messages/t/Hubaa01',
            alt: 'Messenger',
        },
        {
            id: 3,
            target: "_blank",
            image: linkedin,
            link: 'https://www.linkedin.com/in/hubert-mazur-378a19113/',
            alt: 'Linkedin',
        },
        {
            id: 4,
            target: "_blank",
            image: github,
            link: 'https://github.com/mazurro1',
            alt: 'github',
        },
    ];
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
        const { colorTxt, arrowUpColor, languagePl } = this.props;
        const { classArrow, classArrowRotate } = this.state;
        const { handleArrow, contactList } = this;

        return (
            <div id="contact" className={classArrow}>
                <div className="container">
                    <div className="arrow" onClick={handleArrow}>
                        <img src={arrowUpColor} alt="arrow" className={classArrowRotate} />
                    </div>
                    <h1 className={`${colorTxt}`}>
                        {languagePl ? 'Kontakt' : 'Contact'}
                    </h1>
                    <p>
                        {languagePl ? 'Masz pytanie? Napisz do mnie!' : 'Do you have a question? Write to me!'}
                    </p>
                    <div className="row contactIcon">
                        <CreateIconContact contactList={contactList} />
                    </div>
                </div>
            </div>
        );
    }
}

const CreateIconContact = ({ contactList }) => {
    const doIcons = contactList.map(item => {
        return (
            <div className="col" key={item.id}>
                <a href={item.link} target={item.target}>
                    <img src={item.image} alt={item.alt} />
                </a>
            </div>
        )
    })
    return (
        <>
            {doIcons}
        </>
    )
}

export default Contact;
