import React, { useState, useEffect } from "react";

// prettier-ignore
const RecentPosts = () => {

  const medium_url = "https://medium.com/feed/@ElrondWizards";

  const [data, setData] = React.useState<any[]>([]);
  const api_endpoint = "https://api.rss2json.com/v1/api.json?rss_url=";
  const url = api_endpoint + encodeURIComponent(medium_url);

  const doAjax = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return Promise.resolve(jsonData);
    } else {
      return Promise.reject("Url not found");
    }
  };

  useEffect(() => {
    doAjax().then((res) => {
      setData(res.items.slice(0, 4));
    });
  }, []);


  function sanitize(input: any) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  return (
    <div>
      <div className="recent-posts container" id="blog-link">
        <div className="row">

          <div className="col-12 text-center">
            <h2>Recent posts</h2>
          </div>


          {data.map((item, index) => (
              <div key={index} className="col-xl-3 col-sm-6" >
                <div className="recent-posts-card">
                  <img className="img-fluid w-100" src={item.thumbnail} alt="recent-posts-image"/>
                  <div className="legend-wrapper">
                    <div className="legend-date">
                      <img src="/calendar-icon.svg" alt="calendar" className="img-fluid"/>
                      <p>{item.pubDate}</p>
                    </div>
                  </div>
                  <h3>{sanitize(item.title)}</h3>
                  <p className="description-recent-posts">{sanitize(item.description.replace(/<a\b[^>]*>(.*?)<\/a>/i,"").replace( /<.*?>/g, "" ).slice(0, 120))}...</p>
                  <div className="button-read-more">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href={item.link} className="btn-main" target="_blank">
                      Read more
                      <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                    </a>
                  </div>
                </div>
              </div>
          ))}

          </div>
        </div>
      </div>

  );
};

export default RecentPosts;
