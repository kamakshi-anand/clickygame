// import React from "react";
// //import { Link } from "react-router-dom";
// import "./style.css";

// // function NavTabs() {
// //   return (
// //     <div>
// //       <h1>Clicky Game</h1>
// //       <p>Click on the image to begin</p>
// //       <p>Score:</p>
// //     </div>

// //   );
// // }
// function NavTabs() {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <span className="navbar-text">
//         <div className="header">
//         <h2>Clicky Game</h2></div>
//         <div className="scores"><h2>
//         Score: 0 Highscore: 0</h2></div>
//   </span>
//     </nav>

//   );
// }

// export default NavTabs;

import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;





