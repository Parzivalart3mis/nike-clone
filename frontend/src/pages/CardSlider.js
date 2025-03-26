import React, { useState, useEffect } from "react";
import airForce1 from "../assets/AirForce1.png";
import airJordan1 from "../assets/AirJordan1.png";
import airMax from "../assets/AirMax.png";
import blazer from "../assets/Blazer.png";
import cortez from "../assets/Cortez.png";
import dunk from "../assets/Dunk.png";
import vomero from "../assets/Vomero.png";
import "../styles/CardSlider.css";

const CardSlider = () => {
    // Original cards array
    const cards = [
        { name: "AirForce1", image: airForce1 },
        { name: "AirJordan1", image: airJordan1 },
        { name: "AirMax", image: airMax },
        { name: "Blazer", image: blazer },
        { name: "Cortez", image: cortez },
        { name: "Dunk", image: dunk },
        { name: "Vomero", image: vomero },
    ];

    // We want card1 (cards[0]) centered. With 7 cards shown, the center index is 3.
    // So we rotate the array so that the element at index 3 is cards[0].
    // One way: compute the initial order by taking the 3 cards preceding card1 (modulo the length)
    // and the remaining cards afterward.
    const getInitialOrder = () => {
        const n = cards.length;
        let order = [];
        for (let i = -3; i < 4; i++) {
            // Using modulo arithmetic to wrap indices properly
            const index = ((0 + i) % n + n) % n;
            order.push(cards[index]);
        }
        return order;
    };

    // Order of the cards currently rendered
    const [order, setOrder] = useState(getInitialOrder());
    // Translate value for the sliding effect
    const [translate, setTranslate] = useState(0);
    // Control for whether the CSS transition is enabled
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const cardWidth = 220; // card width (image width 200px + 2*10px margin)

    // When right arrow is clicked: animate slide left.
    const handleNext = () => {
        setTranslate(-cardWidth);
    };

    // When left arrow is clicked: animate slide right.
    const handlePrev = () => {
        setTranslate(cardWidth);
    };

    // When the slide transition ends, rotate the order array accordingly and reset translation.
    const handleTransitionEnd = () => {
        if (translate === -cardWidth) {
            // Next: rotate array left by one element.
            setOrder((prevOrder) => {
                const newOrder = [...prevOrder.slice(1), prevOrder[0]];
                return newOrder;
            });
        } else if (translate === cardWidth) {
            // Prev: rotate array right by one element.
            setOrder((prevOrder) => {
                const newOrder = [prevOrder[prevOrder.length - 1], ...prevOrder.slice(0, prevOrder.length - 1)];
                return newOrder;
            });
        }
        // Reset the slide translation without a transition.
        setTransitionEnabled(false);
        setTranslate(0);
    };

    // Re-enable the transition on the next render cycle.
    useEffect(() => {
        if (!transitionEnabled) {
            setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
        }
    }, [transitionEnabled]);

    return (
        <div className="card-slider">
            <button className="slider-arrow left-arrow" onClick={handlePrev}>
                &#8592;
            </button>
            <div className="cards-container-wrapper">
                <div
                    className="cards-container"
                    style={{
                        transform: `translateX(${translate}px)`,
                        // Updated transition for a smoother effect:
                        transition: transitionEnabled ? "transform 0.6s ease-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {order.map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.image} alt={card.name} className="card-image" />
                            <p className="card-name">{card.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="slider-arrow right-arrow" onClick={handleNext}>
                &#8594;
            </button>
        </div>
    );
};

export default CardSlider;
