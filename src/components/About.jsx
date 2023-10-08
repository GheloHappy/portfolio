import '../css/about.css';
import propic from '../assets/img/propic_v4.png';
import { useEffect, useState } from 'react';

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

    return [age,exp];
};

const About = () => {
    const defaultBirthday = '1998-05-07';
    const defaultExpDate = '2017-11-08';
    const [birthday, setBirthday] = useState(defaultBirthday);
    const [experience, setExperience] = useState(defaultExpDate)
    const [age, exp] = calculateAge(birthday, experience);

    return (
        <div className='about-page'>
            <div className="abt-propic">
                <img src={propic} alt='profile-pic' />
                <h5>" Ghelo "</h5>
                <h6>Software Developer</h6>
            </div>

            <div className='abt-information'>
                <p>
                    Hi! My name is Ghelonico G. Maligaya living in Antipolo City Rizal, Philippines. {age} years old and
                    I'm currently employed at Monheim Group of Companies as a Programmer.
                </p>

                <p>
                    With nearly {exp} years of experience, I have honed my programming skills, specializing in the development of web,
                    mobile, and desktop applications. My expertise extends to navigating agile software development processes and workflows.
                </p>

                <h3>Summary</h3>

                <div className='abt-summary'>
                    <h6>Age : </h6>
                    <h5> {age}</h5>
                </div>
                <div className='abt-summary'>
                    <h6>Age : </h6>
                    <h5> {age}</h5>
                </div>
            </div>

        </div>
    )
}

export default About;