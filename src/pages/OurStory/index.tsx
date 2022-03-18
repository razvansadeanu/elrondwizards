import * as React from "react";
import Footer from "../../components/Footer";
import About from "../../components/About";
import FirstSlider from "../../components/FirstSlider";
import SecondSlider from "../../components/SecondSlider";

// prettier-ignore
const OurStory = () => {

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
    // prettier-ignore
    return (
        <div className="our-story-page">
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/lines.png)" }}>

                <div className="wrapper-story container">
                    <h1>Our Story</h1>

                    <p>Once upon a time in a magical forest, the legend says that in this mystical place 3 High Wizards ruled the land and created 3333 magical keys, keys that have the power to change the future and were hidden away so that only a few chosen souls would be able to get them when the time was right.</p>

                    <p>However, after many moons passed, people slowly became greedy, wanting more for themselves, forgetting about Mother Nature. Villages became Cities; friends became enemies; brothers became strangers. During this decaying process, the marks left on nature seemed permanent, but then a powerful force awakened from its deep sleep; they decided that something needed to be done to save the world and redeem the innocence of human souls. They went out of the forest looking for the special ones, spreading the word around all corners of the world.</p>

                    <p>Wizards opened the magical chest; the keys were set free to find their future holders; once they did, a bridge would be made between the past, present, and future; it was the way...the only way to save humankind. The question that you could hear everybody whispering through the shadows was:  Are you among the chosen ones?</p>

                    <p>...So are you?</p>
                </div>


                <div className="swiper-section container text-center">
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

                <div className="text-center links-story">
                    <div>
                        <a href="/dashboard" className="btn-main">
                            Mint here
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://isengard.market/collection/EWIZZ-1e8ddb" className="btn-main-inverted">
                            Mint on Isengard
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-bottom.png)" }}>
                <About />
                <Footer />
            </div>
        </div>
    );
};
export default OurStory;
