import axios from "axios";
import React from "react";

function Explore() {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [currentSize, setCurrentSize] = React.useState(20);
  const size = 3333;

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://api.elrond.com/nfts?from=0&size=${currentSize}&creator=erd1qqqqqqqqqqqqqpgqnnh9wnda0frj0cj2r9wfgstxqhn9pgq9lwfqsfen4y`,
      ).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    };
    fetchData();
  }, [currentSize]);
  return (
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="card shadow-sm rounded border-0">
          <div className="card-body p-1">
            <div className="rounded border-0">
              <div className="explore_row">
                {data.map((nftData: any, index: any) => (
                  <img src={nftData.url} className="nft_img" key={index} />
                ))}
                <div>
                  {size !== currentSize && (
                    <button
                      className="btn-load-more"
                      onClick={() => setCurrentSize(currentSize + 20)}
                    >
                      {loading ? "Loading..." : "Load More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
