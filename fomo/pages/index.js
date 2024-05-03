import * as React from "react";
import HowToPlay from "./components/HowToPlay";
import LastRoundWinner from "./components/LastRoudWinner";
import BiggestWinner from "./components/BiggestWinner";
import ActivePotInfo from "./components/ActivePotInfo";
import MyInfo from "./components/MyInfo";
import PurchaseTimeline from "./components/Purchasetimeline";


function MyComponent() {

  // const [data, setData] = React.useState(null)

  const fakeData = {deez: "nuts"}



  return (
    <div className="flex flex-col py-10 bg-white">
      <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ActivePotInfo data={fakeData} />
            <HowToPlay />
          </div>
        </div>
        <div className="flex flex-col self-end p-2 max-w-full text-lg leading-7 text-gray-900 w-[540px]">
          <LastRoundWinner data={fakeData} />
          <BiggestWinner />
        </div>
      </div>
      <div className="flex gap-5 self-center w-full max-w-[1360px] max-md:flex-wrap max-md:max-w-full">
        <MyInfo />
        <PurchaseTimeline data={fakeData} />
      </div>
    </div>
  );
}

export default MyComponent;
