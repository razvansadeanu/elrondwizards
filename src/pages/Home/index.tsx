import * as React from "react";
import Video from "components/Video";
import About from "components/About";
import RoadMap from "components/RoadMap";
import Footer from "components/Footer";
import OurCollection from "components/OurCollection";
import FirstSlider from "../../components/FirstSlider";
import SecondSlider from "../../components/SecondSlider";
import RecentPosts from "../../components/RecentPosts";
// prettier-ignore
const Home = () => {

    const [activeTab, setActiveTab] = React.useState({
        tab1: true,
        tab2: false,
    });

    const handleTabSwitch = (e: any) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        if (value.includes("Elrond Wizards"))
            setActiveTab({
                tab1: true,
                tab2: false,

            });
        // if (value.includes("Collection 2 - Coming Soon"))
        //     setActiveTab({
        //         tab1: false,
        //         tab2: true,
        //
        //     });
    };



    return (
    <div className="home-page">
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-top.png)" }}>
            <Video />


            <div className="swiper-section container text-center" id="swiper-collection">
                <div id="tsum-tabs">


                    <div
                        className={`nav-nft nft-tab ${activeTab.tab1 ? "tab-active" : ""}`}
                        onClick={handleTabSwitch}
                    >
                        <span>Elrond Wizards</span>
                    </div>
                    <div
                        className={`nav-explore nft-tab ${activeTab.tab2 ? "tab-active" : ""}`}
                        onClick={handleTabSwitch}
                    >
                        <span>Collection 2 - Coming Soon</span>
                    </div>
                </div>


                    {(() => {
                        if (activeTab.tab1) return <FirstSlider />;
                        // if (activeTab.tab2) return <SecondSlider />;
                    })()}
            </div>
            <OurCollection />

        </div>
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-bottom.png)" }}>

            <About />
            <RoadMap />
            <RecentPosts />
            <Footer />
        </div>
    </div>
  );
};
export default Home;
