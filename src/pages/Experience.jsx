import { useState, useEffect } from "react";
import "./experience.modules.css";
function Experience() {
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


        <div>
          <i class="fab fa-html5"></i>
          <p>Html 5</p>
        </div>
        <div>
          <i class="fab fa-node"></i>
          <p>nodejs</p>
        </div>
        <div>
          <i class="fab fa-react"></i>
          <p>Reactjs</p>
        </div>
        <div>
          <i class="fab fa-bootstrap"></i>
          <p>Bootstrap</p>
        </div>
        <div>
          <i class="fab fa-react"></i>
          <p>Javascript</p>
        </div>
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
