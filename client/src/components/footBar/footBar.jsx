import { Link } from "react-router-dom";
import "./footBar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function FootBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="foot">
      <div className="footLeft">
        
          <i class="fa-brands fa-facebook footIcon"></i>
          <i class="fa-brands fa-instagram footIcon"></i>
          <i class="fa-brands fa-pinterest footIcon"></i>
          <i class="fa-brands fa-twitter footIcon"></i>
        
      </div>
      <div className="footCenter">
        <h4>A Harshil Nakum Production</h4>
      </div>
      
    </div>
  );
}
