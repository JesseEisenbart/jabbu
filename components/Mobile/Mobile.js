import { useEffect } from "react/cjs/react.production.min";
import useWindowSize from "../../hooks/useWindowSize"
import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import Portfolio from "../Portfolio";

const Mobile = () => {
    const windowSize = useWindowSize();

    return (
        <>
            {windowSize.width < 769 ? <><About /><Portfolio /><Contact /></> : <></>}
        </>
    )
}

export default Mobile