import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span><span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="/images/Placeholder_Person.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Safak" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="safak@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
