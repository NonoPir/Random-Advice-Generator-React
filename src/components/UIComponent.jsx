import React, { useEffect, useState } from "react";

const UIComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      setData(result.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    fetchData();
  };
  console.log(data);

  return (
    <div className="adviceBG rounded-2xl pb-10 flex flex-col items-center justify-around shadow-2xl">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="h-1/2 leading-10 w-3/4 flex-col text-center flex justify-around items-center">
            <div>
              <p className="text-sm tracking-widest ">{`ADVICE ${data?.id}`}</p>
            </div>
            <p className="">{data?.advice}</p>
          </div>
          <div className="">
            <img
              src="/public/images/pattern-divider-desktop.svg"
              alt="divider"
            />
          </div>
          <div
            onClick={handleClick}
            className="w-14 cursor-pointer absolute h-14 dice-bg rounded-full flex justify-center items-center"
          >
            <img
              className="w-5 h-5"
              src="/public/images/icon-dice.svg"
              alt="dice icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UIComponent;
