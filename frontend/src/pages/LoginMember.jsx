// /* eslint-disable no-undef */
// /* eslint-disable no-alert */
// import { useState, useContext } from "react";
// import axios from "axios";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUserId } = useContext(UserIdContext);
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (email && password) {
//       axios
//         .post(
//           `${import.meta.env.VITE_BACKEND_URL}/users/login`,
//           {
//             email,
//             password,
//           },
//           {
//             withCredentials: true,
//           }
//         )
//         .then((res) => setUserId(res.data.id))
//         .then(() => {
//           swal("Successfully logged in").then(() => navigate("/ProjectList"));
//         })
//         .catch((err) => {
//           swal(err.response.data.error);
//         });
//     } else {
//       swal("Please specify both email and password");
//     }
//   };

//   return (
//     <>
//       <div className="bannerMember">
//         <h1>ACCES MEMBRE</h1>
//       </div>
//       <h3 className="titreEspaceMembre">CONNEXION A L'ESPACE MEMBRE</h3>
//       <form className="formulaireMembre" onSubmit={handleSubmit}>
//         <label className="champFormulaireMembre" htmlFor="email">
//           Email:
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label className="champFormulaireMembre" htmlFor="password">
//           Password:
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <input className="boutonSubmitMembre" type="submit" value="CONNEXION" />
//       </form>
//     </>
//   );
// }

// export default Login;
