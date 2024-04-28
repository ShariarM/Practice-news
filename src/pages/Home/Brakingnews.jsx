import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Brakingnews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true}>
                <Link to="/">  Dhakay kutta mora gorom.</Link>
                <Link to="/">  Gorom codn e maush kait</Link>
                <Link to="/">  pada akhon england e korche land</Link>
                <Link to="/">  ar kono news nai</Link>
            </Marquee>
        </div>
    );
};

export default Brakingnews;