import react from "react";
import { useState, useEffect } from "react";
import "./experience.modules.css";
function Experience() {
  const [skillValue, setSkillValue] = useState({
    html: 0,
    react: 0,
    node: 0,
    css: 0,
  });

  useEffect(() => {
    if (skillValue.react == 62) {
      return;
    } else {
      const id = setInterval(() => {
        setSkillValue((prev) => ({ ...prev, react: prev.react + 1 }));
      }, 5);
      console.log("cleanup");
      return () => clearInterval(id);
    }
  }, [skillValue.react]);
  useEffect(() => {
    if (skillValue.html == 89) {
      return;
    } else {
      const id = setInterval(() => {
        setSkillValue((prev) => ({ ...prev, html: prev.html + 1 }));
      }, 5);
      console.log("cleanup");
      return () => clearInterval(id);
    }
  }, [skillValue.html]);
  useEffect(() => {
    if (skillValue.css == 62) {
      return;
    } else {
      const id = setInterval(() => {
        setSkillValue((prev) => ({ ...prev, css: prev.css + 1 }));
      }, 10);
      console.log("cleanup");
      return () => clearInterval(id);
    }
  }, [skillValue.css]);
  useEffect(() => {
    if (skillValue.node == 77) {
      return;
    } else {
      const id = setInterval(() => {
        setSkillValue((prev) => ({ ...prev, node: prev.node + 1 }));
      }, 5);
      console.log("cleanup");
      return () => clearInterval(id);
    }
  }, [skillValue.node]);
  return (
    <div className="experience" id="experience">
      <div className="exp-edu-tabs">
        <h2 className="page-identifier">
          Education <i class="fas fa-book-reader"></i>
        </h2>
        <div className="edu">
          <div>
            <h3>
              <span className="edu-lvl">B.Tech</span> National Institute of
              Technology Meghalaya
            </h3>
            <p>Electronics and communication Engineering</p>
          </div>
          <div>
            <h3>
              <span className="edu-lvl">XII</span> Sasi Residential Junior
              College (Board of Intermediate Education)
            </h3>
            <p>MPC (Maths,Physics,Chemistry)</p>
          </div>
          <div>
            <h3>
              <span className="edu-lvl">X</span> Sasi Residential High
              School(Board of Secondary Education)
            </h3>
            <p>Worked on webapplications made using Reactjs and Nodejs</p>
          </div>
        </div>

        <h2 className="page-identifier">
          Experience <i class="fas fa-layer-group"></i>
        </h2>

        <div className="exp-tab">
          <div>
            <h3>Appstek Corp</h3>
            <p>Web Developer</p>
            <ul>
              <li>Developing Website using HTML,Css,Bootstrap.</li>
              <li>
                Developing react applications and designing reusable components.
              </li>
              <li>Search Engine Optimization.</li>
              <li>Nodejs Developement desiging sustinable backend.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tech-work">
        <h2 className="page-identifier">
          Tech I Know<i class="fas fa-layer-group"></i>
        </h2>

        <progress value={skillValue.react} max="100">
          <div className="progress-bar">
            <span>Progress: 80%</span>
          </div>
        </progress>

        <progress value={skillValue.node} max="100">
          <p>nodejs</p>
        </progress>
        <progress value={skillValue.css} max="100">
          <p>Reactjs</p>
        </progress>
        <progress value={skillValue.html} max="100">
          <p>Bootstrap</p>
        </progress>
        <progress value={skillValue.css} max="100">
          <p>Javascript</p>
        </progress>
      </div>
    </div>
  );
}

export default Experience;
// const [Name, setName] = useState("");
// const [Email, setEmail] = useState("");
// const [Pwd, setPwd] = useState("");

// const config = {
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//   },
// };

// const formHandler = (e) => {
//   e.preventDefault();
//   axios
//     .post(
//       "http://localhost:5050/blog/register",
//       { name: Name, email: Email, passcode: Pwd },
//       config
//     )
//     .then((res) => {
//       console.log(res.data);
//       console.log(Name, Email, Pwd);
//     })
//     .then(() => {
//       setName("");
//       setEmail("");
//       setPwd("");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// return (
//   <div className="Registration">
//     <form>
//       <label htmlFor="name">
//         Name
//         <input
//           type="text"
//           value={Name}
//           placeholder="Please Enter Your Name"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//       </label>
//       <label htmlFor="email">
//         email
//         <input
//           value={Email}
//           type="text"
//           placeholder="Please Enter Your Email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </label>
//       <label htmlFor="password">
//         Passcode
//         <input
//           value={Pwd}
//           type="password"
//           placeholder="Please Enter Your Password"
//           onChange={(e) => {
//             setPwd(e.target.value);
//           }}
//         />
//       </label>
//       <button onClick={formHandler}>Submit</button>
//     </form>
//   </div>
// );
