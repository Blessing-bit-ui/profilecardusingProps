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
    <>
    <div>
      <Avatar />
      <Intro
        name="Yembe Blessing"
        about="Aspiring full-stack web-developer, international and business management student and teacher ate Humly. When am not coding,teaching or studying, I like to listen to music, cook and try new food."
      />
      </div>
      <ul>
       {skills.map((skillname)=>(
        <Skills skill={skillname.skill} color={skillname.color}/>
       ))}
    </ul>
    </>
  );
}
export default ProfileCard;


function Avatar(){
    return(
        <img src={blessing} alt="myphoto" class="avatar"/>
    )
}
 function Intro(props){
    return(
        <div>
            <h>{props.name}</h>
            <p>
             {props.about}
            </p>
        </div>
    )
 }
  function Skills(props){
    return (
        <div style={{backgroundColor:props.color}}>
            <span>{props.skill}</span>
        </div>
    )
  }

