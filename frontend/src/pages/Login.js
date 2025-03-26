import React, { useState } from "react";
import "../styles/Login.css"; // Add styles for the sign-in page
import nikeLogo from "../assets/nike-logo.png";

const SignIn = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContinueClick = () => {
        // TODO: Add logic for email submission or authentication
        console.log("Email submitted:", email);
    };

    return (
        <div className="sign-in-container">
            {/* Logo Section */}
            <div className="logo-section">
                <img
                    src={nikeLogo}
                    alt="Nike Logo"
                    className="nike-logo"
                />
            </div>

            {/* Sign-In Form */}
            <div className="form-section">
                <h1 className="form-title">Enter your email to join us or sign in.</h1>
                <p className="country-info">United States <span className="change-link">Change</span></p>

                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email*"
                    className="email-input"
                />

                {/* Terms and Privacy Info */}
                <p className="terms-info">
                    By continuing, I agree to Nike's <a href="/privacy-policy" className="link">Privacy
                    Policy</a> and <a href="/terms-of-use" className="link">Terms of Use</a>.
                </p>

                <button onClick={handleContinueClick} className="continue-button">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignIn;
