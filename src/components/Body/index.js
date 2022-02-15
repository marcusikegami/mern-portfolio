import React from "react";
import Portfolio from "../Portfolio";
import About from "../About";

function Body(props) {
    const { currentCategory } = props;
    if (currentCategory.name === "About Me") {
        return <About />
    } else {
    return (
        <Portfolio></Portfolio>
        );
    }
}
export default Body;