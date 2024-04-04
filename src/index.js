import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Ioana Ciceu" />;
}
function Intro() {
  return (
    <div>
      <h1> Ioana Ciceu</h1>
      <p>
        Detail-oriented IT professional with expertise in front-end web
        development, including JavaScript, HTML, and CSS. Possessing practical
        experience in developing responsive web interfaces and some exposure to
        React.js. Enthusiastic about learning new technologies and staying
        updated with industry trends. Outside of work, I enjoy makeup artistry
        and spending quality time with my family.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="blue" />
      <Skill skill="CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="👶" color="orangered" />
      <Skill skill="Responsive design" emoji="👶" color="blue" />
      <Skill skill="Github" emoji="💪" color="yellow" />
      <Skill skill="Canva" emoji="💪" color="orangered" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
