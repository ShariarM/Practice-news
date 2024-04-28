import Leftsidenav from "../../Shared/Leftsidenav/Leftsidenav";
import Header from "../../Shared/Navber/Header/Header";
import Navber from "../../Shared/Navber/Navber";
import Rightsidenav from "../../Shared/Rightsidenav/Rightsidenav";
import Brakingnews from "./Brakingnews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brakingnews></Brakingnews>
            <Navber></Navber>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News coming soon</h2>
                </div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;