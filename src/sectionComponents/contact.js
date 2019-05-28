import React from 'react';
import '../sass/contact.scss';
import arrowUp from '../images/arrowUp.png';
import facebook from '../images/facebook.png';
import messenger from '../images/messenger.png';
import linkedin from '../images/linkedin.png';



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


        return (
            <div id="contact" className={this.state.classArrow}>
                <div className="container">
                    <div className="arrow" onClick={this.handleArrow}>
                        <img src={arrowUp} alt="arrow" className={this.state.classArrowRotate} />
                    </div>
                    <h1>Kontakt</h1>
                    <p>Masz pytanie? Napisz!</p>
                    <div className="row contactIcon">
                        <CreateIconContact contactList={this.contactList} />
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
