import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import nikeLogo from "../assets/nike-logo.png";
import { Link } from "react-router-dom";
import { SiJordan } from "react-icons/si";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleContinueClick = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/users/check-user", { email, password });
            if (response.data.exists) {
                // Redirect to the dashboard or home page for existing users
                navigate("/dashboard");
            } else {
                // Redirect to the sign-up page for new users
                navigate("/join-us");
            }
        } catch (error) {
            console.error("Error checking user:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="sign-in-container">
            {/* Logo Section */}
            <div className="logo-section">
                <div className="logo-container">
                    <img src={nikeLogo} alt="Nike Logo" className="nike-logo"/>
                    <Link to="/jordan" className="icon-link">
                        <SiJordan className="navbar-icon"/>
                    </Link>
                </div>
            </div>

            {/* Sign-In Form */}
            <div className="form-section">
                <h1 className="form-title">Enter your email and password to join us or sign in.</h1>
                <p className="country-info">United States <span className="change-link">Change</span></p>

                {/* Email Input */}
                <div className="input-group">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email*"
                        className="email-input"
                    />
                </div>

                {/* Password Input (placed below the email field) */}
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password*"
                        className="password-input"
                    />
                </div>

                {/* Terms and Privacy Info */}
                <p className="terms-info">
                    By continuing, I agree to Nike's <a href="/privacy-policy" className="link">Privacy Policy</a> and <a href="/terms-of-use" className="link">Terms of Use</a>.
                </p>

                <button onClick={handleContinueClick} className="continue-button">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignIn;
