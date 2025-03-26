import React from "react";
import ladyImage from "../assets/lady.png"; // Adjust path based on your folder structure
import lukaImage from "../assets/Luka4.png";
import subtletyImage from "../assets/Subtlety_Woman.png";
import dylanImage from "../assets/Dylan_Man.png";
import runningImage from "../assets/Running_Man.png";
import blackBgManImage from "../assets/black_bg_Man.png";
import "../styles/Home.css";
import CardSlider from "./CardSlider"; // Import the new slider component

const Home = () => {
    return (
        <div className="home-container">
            {/* Image Section */}
            <div className="image-section">
                <img src={ladyImage} alt="Mallory Swanson holding a soccer ball" className="home-image" />
            </div>

            {/* Text Section */}
            <div className="text-section">
                <h2 className="player-name">Mallory Swanson</h2>
                <h1 className="headline">EYES ON THE PRIZE</h1>
                <p className="quote">Mallory Swanson always gets her goals.</p>
            </div>

            {/* Side-by-side Images Section */}
            <div className="side-by-side-images">
                {/* Luka4 Image */}
                <div className="image-card">
                    <img src={lukaImage} alt="Luka 4 Shoes" className="side-image" />
                    <div className="image-text">
                        <button className="cta-button">Get Notified</button>
                    </div>
                </div>

                {/* Subtlety Woman Image */}
                <div className="image-card">
                    <img src={subtletyImage} alt="Subtlety Woman Style" className="side-image" />
                    <div className="image-text">
                        <button className="cta-button">Shop</button>
                    </div>
                </div>
            </div>

            {/* Below Images Section */}
            <div className="below-images">
                {/* Dylan Man Image */}
                <div className="image-card">
                    <img src={dylanImage} alt="Dylan Man" className="side-image" />
                    <div className="image-text">
                        <button className="cta-button">Explore</button>
                    </div>
                </div>

                {/* Running Man Image */}
                <div className="image-card">
                    <img src={runningImage} alt="Running Man" className="side-image" />
                    <div className="image-text">
                        <button className="cta-button">Join the Run</button>
                    </div>
                </div>
            </div>

            {/* NIKE 24.7 COLLECTION Section */}
            <div className="text-section nike-collection-section">
                <h1 className="headline">NIKE 24.7 COLLECTION</h1>
                <p className="quote">Polished looks with a luxurious feel.</p>
                {/*<button className="cta-button nike-shop-button">Shop</button>*/}
            </div>

            {/* Black Background Man Image Section */}
            <div className="black-bg-man-section">
                <img
                    src={blackBgManImage}
                    alt="Nike 24.7 Collection featuring a model in stylish attire"
                    className="black-bg-man-image"
                />
            </div>
            <h1>Shop The Classics</h1>
            {/* New Card Slider Section */}
            <CardSlider />
        </div>
    );
};

export default Home;
