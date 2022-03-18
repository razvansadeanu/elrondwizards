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
  // prettier-ignore
  return (
    <div className="listing-wrapper">


      <div className="nfts-list-row">
        {data.map((nftData: any, index: any) => (

              <img alt="NFT CARD" src={nftData?.url} className="img-fluid" key={index} />

        ))}
      </div>
      <div className="col-12 text-center">
        <div>
          {size !== currentSize && (
              <button
                  className="btn-main"
                  onClick={() => setCurrentSize(currentSize + 20)}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
          )}
        </div>
      </div>


    </div>
  );
}

export default Explore;
