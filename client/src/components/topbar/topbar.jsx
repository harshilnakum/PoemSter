import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
import { HashLink } from 'react-router-hash-link';



export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const altImg = "1657108746385wallpaperflare.com_wallpaper.jpg";

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
    
  }

  return <div className="top">
    <div className="topLeft">
      <h2>Poemster</h2>

    </div>
    <div className="topCenter">
      <ul className="topList">
        
        <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
        <li className="topListItem"><HashLink className="link" smooth to="/#homee">POEMS</HashLink></li>
        <li className="topListItem"><a target="_blank" className="link" href="https://dapper-cupcake-35c85d.netlify.app/">CONTACT</a></li>
        <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
        <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        
      </ul>
    </div>
    <div className="topRight">

      {user ? (<Link to="/settings"><img className="topImg" src={user.profilePic ? PF +user.profilePic : PF +altImg} alt="" /></Link>) : 
      (<ul className="topList">
        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
      
        <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
      </ul>
      )
      }
      
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  </div>;
}
