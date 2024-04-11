import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const [searchText, setsearchText] = useState("");
    return (
        <div className="Header min-h-5 p-3" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
            {/* Top Header */}
            <div className="Top-Header flex justify-between items-center">
                <div>
                    <img className="w-10" src={"https://delhi.gov.in/sites/default/files/emblem-dark.png"} alt="Logo" />
                </div>
                <div className="flex flex-1 mx-10 justify-center items-center">
                    <input type="text" className="border-4 rounded-full p-2 mr-2 flex-1 mx-2" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>
                    <button onClick={() => {
                        // to be implemented
                    }} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300">Search</button>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <button className="login bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-0.5 px-4 rounded-lg transition-colors duration-300" onClick={() => {
                            setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                        }}>{btnNameReact}</button>
                    </li>
                </ul>
            </div>
            <hr className="border-gray-200 my-4" />
            {/* Bottom Header */}
            <div className="Bottom-Header">
                <ul className="flex my-4 space-x-6 mx-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/feed">Feed</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/notices">Notice Board</Link>
                    </li>
                    <li>
                        <Link to="/complaint">Complaint</Link>
                    </li>
                    <li>
                        <Link to="/stats">Stats</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
