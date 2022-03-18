import * as React from "react";
import Footer from "../../components/Footer";
import FirstSlider from "../../components/FirstSlider";
import About from "../../components/About";

// prettier-ignore
const CookiePolicy = () => {
    // prettier-ignore
    return (
        <div className="our-story-page wrap-gdpr">
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/lines.png)" }}>

                <div className="wrapper-story container">

                    <h1>Cookie policy for Elrond Wizards</h1>

                    <p>This is the Cookie Policy for elrondwizards.com, accessible from elrondwizards.com</p>

                    <h2>What Are Cookies</h2>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the site&apos;s functionality.</p>



                    <h2>How We Use Cookies</h2>
                        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>



                    <h2>Disabling Cookies</h2>
                            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>


                    <h2>Third Party Cookies</h2>
                                <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                    <p>•	This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.</p>



                    <h2>More Information</h2>
                    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. However if you are still looking for more information then you can contact us through one of our preferred contact methods: Email: team@elrondwizards.com</p>

                </div>

                <Footer />
            </div>
        </div>
    );
};
export default CookiePolicy;
