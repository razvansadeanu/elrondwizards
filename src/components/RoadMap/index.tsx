import React from "react";
// prettier-ignore
function RoadMap() {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

  return (
    <>
      <div className="roadmap container" id="roadmap-link">
        <h2>Roadmap</h2>
        <p>We build our future through the present. &quot;Continuous improvement and innovation&quot; is our motto, stay tuned for more.</p>

      </div>

        <div className="graph-mobile d-block d-md-none text-center">

                <img className="img-fluid" src="/graph-mobile.png" alt="Graph"/>


        </div>
        <div className="graph d-none d-md-block">
            <img src="/graph.png" alt="graph" className="img-fluid graph-img"/>
            <img src="/box_blue-1.png" alt="graph-box" className="img-fluid box-1 box-graph"/>
            <img src="/box-blue-2.png" alt="graph-box" className="img-fluid box-2 box-graph"/>
            <img src="/box_purpple-1.png" alt="graph-box" className="img-fluid box-3 box-graph"/>
            <img src="/box_green-1.png" alt="graph-box" className="img-fluid box-4 box-graph"/>
            <img src="/box_purpple-2.png" alt="graph-box" className="img-fluid box-5 box-graph"/>
            <img src="/box_green-2.png" alt="graph-box" className="img-fluid box-6 box-graph"/>
        </div>


        <div className="piechart-wrapper d-block d-lg-none pb-5">

            <div className="wrapper-graph">
                <img className="img-fluid w-100 " src="/funds-mobile.png" alt="Pie chart"/>
                <h4>Use of <br/> funds</h4>
            </div>
            <div className="wrapper-pie-funds">
                <div className="wrapper-pie-list">
                    <p className="pie-percent">30%</p>
                    <p className="pie-desc">Future projects</p>
                </div>

                <div className="wrapper-pie-list pie-color-25">
                    <p className="pie-percent">25%</p>
                    <p className="pie-desc">Investors and Team</p>
                </div>

                <div className="wrapper-pie-list pie-color-20">
                    <p className="pie-percent">20%</p>
                    <p className="pie-desc">Reforestation</p>
                </div>

                <div className="wrapper-pie-list pie-color-15">
                    <p className="pie-percent">15%</p>
                    <p className="pie-desc">Investigative Journalism</p>
                </div>

                <div className="wrapper-pie-list pie-color-10">
                    <p className="pie-percent">10%</p>
                    <p className="pie-desc">Children Fondation</p>
                </div>

            </div>
        </div>


        <div className="piechart-desktop d-none d-lg-block">

            <img className="img-fluid centering" src="/pie-center.png" alt="Pie chart"/>
            <img className="img-fluid centering pie-bg" src="/pie-background.png" alt="Pie chart"/>

            <img className="img-fluid pie-10 " src="/10.svg" alt="Pie chart"/>
            <img className="img-fluid pie-15" src="/15.svg" alt="Pie chart"/>
            <img className="img-fluid pie-20" src="/20.svg" alt="Pie chart"/>
            <img className="img-fluid pie-25" src="/25.svg" alt="Pie chart"/>
            <img className="img-fluid pie-30 " src="/30.svg" alt="Pie chart"/>
        </div>

    </>
  );
}

export default RoadMap;
