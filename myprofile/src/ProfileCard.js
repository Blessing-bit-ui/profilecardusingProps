import './App.css';
import blessing from './assets/blessing.jpg'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function ProfileCard() {
  return (
    <div className="Profile">
    <div>
      <Avatar />
      <Intro
        name="Yembe Blessing"
        about="Aspiring full-stack web-developer, international and business management student and teacher ate Humly. When am not coding,teaching or studying, I like to listen to music, cook and try new food."
      />
      </div>
      <ul>
       {skills.map((skillname)=>(
        <Skills skill={skillname.skill} color={skillname.color} level={skillname.level} className='Skills'/>
       ))}
    </ul>
    </div>
  );
}
export default ProfileCard;
function Avatar(){
    return(
        <img src={blessing} alt="myphoto" className="avatar"/>
    )
}
 function Intro(props){
    return(
        <div className="Card">
            <h className="Header">{props.name}</h>
            <p className='About'>
             {props.about}
            </p>
        </div>
    )
 }
  function Skills({skill, level, color}){
    return (
      <div className="skill"style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level==="advanced" && "💪"}
          {level==="intermediate" && "👍"}
          {level==="beginner" && "👶"}
        </span>
      </div>
    );
  }

