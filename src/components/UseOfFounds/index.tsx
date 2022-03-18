import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
// prettier-ignore
const UseOfFounds = () => {
  const [selected, setSelected] = React.useState<number | undefined>();
  const lineWidth = 70;

  const handleChange = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setSelected(index === selected ? undefined : index);
  };
  return (
    <div>
      <div className="funds container">
        <div className="row">

          <div className="col-12 text-center">
            <h2>Recent posts</h2>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="funds-card">
              <img className="img-fluid w-100" src="/funds-1.png" alt="funds-image"/>
              <div className="legend-wrapper">
                <div className="legend-date">
                  <img src="/calendar-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>24 Oct.2021</p>
                </div>
                <div className="legend-comments">
                  <img src="/message-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>136 COMMENTS</p>
                </div>
              </div>
              <h3>Article title</h3>
              <p className="description-funds">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lacus, blandit aenean tempus nisi laoreet id congue. Ultricies hendrerit dignissim id suscipit dui mauris, volutpat. Tristique posuere elit conse...</p>
              <div className="text-right">
                <a href="#" className="btn-main">
                  Read more
                  <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
              </div>
              </div>
            </div>
          <div className="col-xl-3 col-sm-6">
            <div className="funds-card">
              <img className="img-fluid w-100" src="/funds-2.png" alt="funds-image"/>
              <div className="legend-wrapper">
                <div className="legend-date">
                  <img src="/calendar-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>24 Oct.2021</p>
                </div>
                <div className="legend-comments">
                  <img src="/message-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>136 COMMENTS</p>
                </div>
              </div>
              <h3>Article title</h3>
              <p className="description-funds">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lacus, blandit aenean tempus nisi laoreet id congue. Ultricies hendrerit dignissim id suscipit dui mauris, volutpat. Tristique posuere elit conse...</p>
              <div className="text-right">
                <a href="#" className="btn-main">
                  Read more
                  <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="funds-card">
              <img className="img-fluid w-100" src="/funds-3.png" alt="funds-image"/>
              <div className="legend-wrapper">
                <div className="legend-date">
                  <img src="/calendar-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>24 Oct.2021</p>
                </div>
                <div className="legend-comments">
                  <img src="/message-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>136 COMMENTS</p>
                </div>
              </div>
              <h3>Article title</h3>
              <p className="description-funds">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lacus, blandit aenean tempus nisi laoreet id congue. Ultricies hendrerit dignissim id suscipit dui mauris, volutpat. Tristique posuere elit conse...</p>
              <div className="text-right">
                <a href="#" className="btn-main">
                  Read more
                  <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="funds-card">
              <img className="img-fluid w-100" src="/funds-4.png" alt="funds-image"/>
              <div className="legend-wrapper">
                <div className="legend-date">
                  <img src="/calendar-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>24 Oct.2021</p>
                </div>
                <div className="legend-comments">
                  <img src="/message-icon.svg" alt="calendar" className="img-fluid"/>
                  <p>136 COMMENTS</p>
                </div>
              </div>
              <h3>Article title</h3>
              <p className="description-funds">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada lacus, blandit aenean tempus nisi laoreet id congue. Ultricies hendrerit dignissim id suscipit dui mauris, volutpat. Tristique posuere elit conse...</p>
              <div className="text-right">
                <a href="#" className="btn-main">
                  Read more
                  <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>



          </div>
        </div>
      </div>

  );
};

export default UseOfFounds;
