import '../css/about.css';
import propic from '../assets/img/propic_v4.png';
import { useEffect, useState } from 'react';
import Summary from './about/Summary.jsx'

const calculateAge = (birthday, experience) => {
    const currentDate = new Date();
    const birthDate = new Date(birthday);
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const startExpDate = new Date(experience);
    const expDiff = currentDate - startExpDate;
    const expDate = new Date(expDiff);
    const exp = Math.abs(expDate.getUTCFullYear() - 1970);

    return [age, exp];
};

const About = () => {
    const defaultBirthday = '1998-05-07';
    const defaultExpDate = '2017-11-08';
    const [birthday, setBirthday] = useState(defaultBirthday);
    const [experience, setExperience] = useState(defaultExpDate)
    const [age, exp] = calculateAge(birthday, experience);
    const [cardType, setCardType] = useState("")


    const paragraphItems = [
        {
            value: `Hi! My name is Ghelonico G. Maligaya living in Antipolo City Rizal, Philippines. ${age} years old and
        I'm currently employed at Monheim Group of Companies as a Programmer.`},
        {
            value: `With nearly ${exp} years of experience, I have honed my programming skills, specializing in the development of web,
            mobile, and desktop applications. My expertise extends to navigating agile software development processes and workflows.`
        }
    ];

    const cards = [
        { id: `summ`, value: `Summary`, component: Summary },
        { id: `educ`, value: `Education` },
        { id: `exp`, value: `Experience` },
        { id: `cont`, value: `Contact` },
    ]

    const renderComponent = () => {
        const selectedCard = cards.find((card) => card.id === cardType);
        if (selectedCard && selectedCard.component){
            const CardComponent = selectedCard.component;
            return <CardComponent />;
        }

        return null;
    }

    return (
        <div>
            {cardType ? (
                <div>
                    {renderComponent()}
                </div>
            ) : (
                <div className='about-page'>
                    <div className="abt-propic">
                        <img src={propic} alt='profile-pic' />
                        <h5>Ghelo</h5>
                        <h6>Software Developer</h6>
                    </div>

                    <div className='abt-information'>
                        {paragraphItems.map((item, index) => (
                            <p key={index}>
                                {item.value}
                            </p>
                        ))}

                        <div className='abt-cards'>
                            {cards.map((item, index) => (
                                <div className='abt-card' key={index} onClick={() => setCardType(item.id)}>
                                    <h3>{item.value}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default About;