const skillBag = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#AFD83D",
  },
  {
    skill: "Java Script",
    level: "Intemediate",
    color: "#C3DCAF",
  },
  {
    skill: "Tailwind",
    level: "Intemediate",
    color: "#2662EA",
  },
  {
    skill: "Git & Github",
    level: "Intemediate",
    color: "#C862EC",
  },
  {
    skill: "React",
    level: "Intemediate",
    color: "#60DAFB",
  },
  {
    skill: "Next JS",
    level: "Beginner",
    color: "#FF3800",
  },
];

function App() {
  return (
    <div className="App">
      <img
        className="Avatar"
        src={require("./Images/Portrait.jpg")}
        alt="Victor Osukak"
      />
      <AboutSection />
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <h1>Victor Osukak</h1>
      <p>
        I am a Front-End Developer with a background in Mechanical Engineering
        Technology. I am passionate about technological innovations and always
        looking out for creative and better ways to do things. I love to learn
        and evolve with a team.
      </p>
      <div className="skill-List">
        <SkillList />
      </div>
    </div>
  );
};

const SkillList = () => {
  return skillBag.map((skill) => (
    <ItemComp skill={skill.skill} level={skill.level} color={skill.color} />
  ));
};
const ItemComp = ({ skill, level, color }) => {
  return (
    <div className="skillsContainer">
      <div className="skillItem" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        {level === "Beginner" && <span> 😊</span>}
        {level === "Intemediate" && <span> 👍🏾</span>}
        {level === "Advanced" && <span> 💪🏾</span>}
      </div>
    </div>
  );
};

export default App;
