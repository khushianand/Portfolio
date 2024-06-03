import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const SkillCard = ({ skill, level }) => (
  <div className="skills__card">
    <BsPatchCheckFill className="skills__icon" />
    <h4 className="skills__skill">{skill}</h4>
    <small className="skills__level">{level}</small>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development', skills: [
        { skill: 'React', level: 'Basic' },
        { skill: 'HTML', level: 'Intermediate' },
        { skill: 'CSS', level: 'Intermediate' },
        { skill: 'JavaScript', level: 'Basic' },
        { skill: 'Bootstrap', level: 'Basic' },
        { skill: 'Tailwind', level: 'Basic' },
      ]
    },
    {
      category: 'Backend Development', skills: [
        { skill: 'Node JS', level: 'Basic       ' },
        { skill: 'MongoDB', level: 'Basic' },
        { skill: 'MySQL', level: 'Basic' },
      ]
    },

  ];

  return (
    <section id="skills" className="skills">
      <h5>Explore My Skillset</h5>
      <h2>My Proficiencies</h2>

      <div className="container skills__container">
        {skillsData.map((category, index) => (
          <div className="skills__category" key={index}>
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__content">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill.skill}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
