import React from 'react';
import '../sass/portfolio.scss';
import ImgPortfolio1 from '../images/websites/portfolio1.png';
import ImgPortfolio2 from '../images/websites/portfolio2.png';
import ImgPortfolio3 from '../images/websites/portfolio3.png';
import ImgPortfolio4 from '../images/websites/portfolio4.png';
import ImgPortfolio5 from '../images/websites/portfolio5.png';
import ImgPortfolio6 from '../images/websites/portfolio6.png';
import ImgPortfolio7 from '../images/websites/portfolio7.png';
import ImgPortfolio8 from '../images/websites/portfolio8.png';
// import ImgPortfolio9 from '../images/websites/portfolio9.png';
import ImgPortfolio10 from '../images/websites/portfolio10.png';
import ImgPortfolio11 from '../images/websites/portfolio11.png';
import ImgPortfolio12 from '../images/websites/portfolio12.png';
import ImgPortfolio13 from '../images/websites/portfolio13.png';
import ImgPortfolio14 from '../images/websites/portfolio14.png';
import ImgPortfolio15 from '../images/websites/portfolio15.png';
import ImgWeb from '../images/web.png';
import ImgCode from '../images/code.png';

const arrayPortfolioAll = [
    {
        id: 1,
        name: 'Portfolio',
        language: ["HTML5", "CSS3", "SCSS", "JavaScript", "React", "Bootstrap 4"],
        linkWeb: '',
        linkCode: 'https://github.com/mazurro1/portfolio',
        image: ImgPortfolio14,
    },
    {
        id: 2,
        name: 'PC-Tech',
        language: ["HTML5", "CSS3", "SCSS", "JavaScript", "Bootstrap 4"],
        linkWeb: 'https://www.pc-tech.pl/',
        linkCode: 'https://github.com/mazurro1/pc-tech',
        image: ImgPortfolio15,
    },
    {
        id: 3,
        name: 'PC-Tech Old',
        language: ["HTML5", "CSS3", "Bootstrap 4"],
        linkWeb: 'https://mazurro1.github.io/PC-tech-old-v3/',
        linkCode: 'https://github.com/mazurro1/PC-tech-old-v3',
        image: ImgPortfolio2,
    },
    {
        id: 4,
        name: 'PC-Tech Old v2',
        language: ["HTML5", "CSS3", "Bootstrap 4"],
        linkWeb: 'https://mazurro1.github.io/pc-tech_old/',
        linkCode: 'https://github.com/mazurro1/pc-tech_old',
        image: ImgPortfolio4,
    },
    {
        id: 5,
        name: 'Radiostacja',
        language: ["HTML5", "CSS3", "Bootstrap 4"],
        linkWeb: 'http://www.radiostacja.pc-tech.pl/',
        linkCode: '',
        image: ImgPortfolio3,
    },
    {
        id: 6,
        name: 'Project Study',
        language: ["HTML5", "CSS"],
        linkWeb: 'https://mazurro1.github.io/study/',
        linkCode: 'https://github.com/mazurro1/study',
        image: ImgPortfolio5,
    },
    {
        id: 7,
        name: 'Portfolio Old',
        language: ["HTML5", "CSS3", "Bootstrap 4", "JavaScript"],
        linkWeb: '',
        linkCode: 'https://github.com/mazurro1/portfolio_oldv2',
        image: ImgPortfolio1,
    },
    {
        id: 8,
        name: 'Portfolio Old v2',
        language: ["HTML5", "CSS3", "Bootstrap 4"],
        linkWeb: 'https://mazurro1.github.io/portfolio_old/',
        linkCode: 'https://github.com/mazurro1/portfolio_old',
        image: ImgPortfolio6,
    },
    {
        id: 9,
        name: 'Template 1',
        language: ["HTML5", "CSS"],
        linkWeb: 'https://mazurro1.github.io/template1/',
        linkCode: 'https://github.com/mazurro1/template1',
        image: ImgPortfolio7,
    },
    {
        id: 10,
        name: 'Template 2',
        language: ["HTML5", "CSS3"],
        linkWeb: 'https://mazurro1.github.io/template2/',
        linkCode: 'https://github.com/mazurro1/template2',
        image: ImgPortfolio8,
    },
    // {
    //     id: 11,
    //     name: 'PSP',
    //     language: ["HTML5", "CSS", "Flash"],
    //     linkWeb: '',
    //     linkCode: '',
    //     image: ImgPortfolio9,
    // },
    {
        id: 12,
        name: 'Inter Pako',
        language: ["HTML5", "CSS", "Flash"],
        linkWeb: 'https://mazurro1.github.io/interpako/',
        linkCode: 'https://github.com/mazurro1/interpako',
        image: ImgPortfolio10,
    },
    {
        id: 13,
        name: 'Go Out',
        language: ["HTML5", "CSS", "Flash"],
        linkWeb: 'https://mazurro1.github.io/go-out/',
        linkCode: 'https://github.com/mazurro1/go-out',
        image: ImgPortfolio11,
    },
    {
        id: 14,
        name: 'Flash 1',
        language: ["HTML5", "CSS", "Flash"],
        linkWeb: 'https://mazurro1.github.io/Flash1/',
        linkCode: 'https://github.com/mazurro1/Flash1',
        image: ImgPortfolio12,
    },
    {
        id: 15,
        name: 'Flash 2',
        language: ["HTML5", "CSS", "Flash"],
        linkWeb: 'https://github.com/mazurro1/Flash2',
        linkCode: 'https://mazurro1.github.io/Flash2/',
        image: ImgPortfolio13,
    },
]

class Portfolio extends React.Component {
    state = {
        arrowActive: true,
        classArrow: 'noActive',
        classArrowRotate: 'noActiveArrow',
        arrayPortfolio: arrayPortfolioAll,
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

    CreateProjects = (arrayPortfolio, colorBg) => {

        const create = arrayPortfolio.map(item =>
            <CreateProjectsOne
                key={item.id}
                colorBg={colorBg}
                id={item.id}
                name={item.name}
                language={item.language}
                linkWeb={item.linkWeb}
                linkCode={item.linkCode}
                image={item.image}
            />)
        return create;
    }


    render() {
        const { colorBg, colorTxt } = this.props;
        const { arrayPortfolio } = this.state;

        return (
            <div id="portfolio">
                <div className="container">
                    <h1 className={`${colorTxt}`}>Portfolio</h1>
                    <div className="search">

                    </div>
                    <div className="row">

                        {this.CreateProjects(arrayPortfolio, colorBg)}
                    </div>
                </div>
            </div>
        );
    }
}


const CreateProjectsOne = ({ image, linkCode, linkWeb, language, name, colorBg }) => {
    const createLangs = language.map(item => <CreateLang key={item} lang={item} colorBg={colorBg} />);

    return (
        <div className="col-12 website">
            <h2 className={`${colorBg}`}>{name}</h2>

            <div className="content">
                <div className="scrollDown">
                    <a href={linkWeb} target="_blank" rel="noopener noreferrer">
                        <button className={`${colorBg}`}>
                            <img src={ImgWeb} alt="" />
                        </button>
                    </a>
                    <a href={linkCode} target="_blank" rel="noopener noreferrer">
                        <button className={`${colorBg}`}>
                            <img src={ImgCode} alt="" />
                        </button>

                    </a>
                </div>
                <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="languages">
                {createLangs}
            </div>
        </div>
    )
};

const CreateLang = ({ lang, colorBg }) => {
    return (
        <div className={`${colorBg} badge badge-pill`}>
            {lang}
        </div>
    )
}


export default Portfolio;
