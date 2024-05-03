import * as React from "react";

// Component that displays active pot information
const ActivePotInfo = () => {
  return (
    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full bg-white max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-8 text-gray-900 max-md:max-w-full">
          Active pot
        </h2>
        <div className="flex gap-5 justify-between pr-8 text-7xl font-bold tracking-tighter text-gray-900 max-md:flex-wrap max-md:pr-5 max-md:text-4xl">
          <div className="max-md:max-w-full max-md:text-4xl">3420 ETH</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f785db31f0db96a4b94761d5dfaea43ba05ab0156f04c48859890ed1e8e2b60?apiKey=30dce9aa5b094dc98ca07a318d005dda&"
            alt="Ethereum logo"
            className="shrink-0 my-auto w-20 aspect-square fill-gray-800"
          />
        </div>
        <div className="mt-4 text-3xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
          <span>Round over in </span>04:55:32
        </div>
        <p className="mt-4 text-xl leading-8 text-slate-700 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Aliquet nisl amet sed erat.
          Nec nisi nisi in praesent aliquam donec tellus.
        </p>
        <div className="flex gap-4 self-start mt-6">
          <div className="flex flex-col">
            <label htmlFor="keyQuantity" className="text-sm font-medium leading-5 text-slate-700">
              Number of keys you'd like to purchase.
            </label>
            <div className="flex flex-col justify-center px-3.5 py-2.5 mt-1.5 w-full text-base leading-6 text-gray-500 whitespace-nowrap bg-gray-50 rounded-lg border border-gray-300 border-solid shadow-sm">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/150aaad99aad50233aa5a342ed6484ed99bb1931f1fd62442dcf4d2453c00935?apiKey=30dce9aa5b094dc98ca07a318d005dda&"
                  alt="Key icon"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <div className="flex-1 text-ellipsis">1</div>
              </div>
            </div>
          </div>
          <div className="self-end mt-9 text-base font-semibold leading-6 text-slate-700">
            0.2 ETH
          </div>
        </div>
        <div className="flex gap-4 self-start mt-6">
          <button className="flex gap-1.5 justify-between px-4 py-2.5 text-base font-semibold leading-6 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aeb5d4efe63b4cd61fe5576b8c9391c149a48f36c00bcfd027d4642c1e8f726?apiKey=30dce9aa5b094dc98ca07a318d005dda&"
              alt="Wallet icon"
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <span>Connect your wallet</span>
          </button>
          <div className="my-auto text-sm leading-5 text-gray-900">
            Round over in <span className="font-bold">04:55:32</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component explaining how to play
const HowToPlay = () => {
  return (
    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
      <section className="flex flex-col items-start p-4 w-full text-black bg-gray-50 rounded-2xl max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-xl leading-8 max-md:max-w-full">How to play</h2>
        <p className="mt-4 text-base leading-6 max-md:max-w-full">
          Buy a key.
          <br />
          Keys get more expensive as the timer goes on.
          <br />
          10% of your purchase price is distributed to all current key holders.
          <br />
          90% of your purchase price is added to the Active Pot.
          <br />
          Buying a key resets the timer. The last person to buy a key when the
          timer runs out wins the Active Pot.
        </p>
      </section>
    </div>
  );
};

// Component displaying last round winner
const LastRoundWinner = () => {
  return (
    <div className="flex gap-3 justify-between max-md:flex-wrap max-md:max-w-full">
      <div>Last round winner:</div>
      <div className="font-bold">deeznuts with 69 ETH</div>
    </div>
  );
};

// Component displaying biggest winner
const BiggestWinner = () => {
  return (
    <div className="flex gap-3 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
      <div>Biggest winner:</div>
      <div className="font-bold">joeboden with 69,420 ETH</div>
    </div>
  );
};

// Component for displaying user-specific information
const MyInfo = () => {
  return (
    <div className="flex flex-col flex-1 max-md:max-w-full">
      <div className="flex gap-1 justify-between self-start p-1.5 text-base font-semibold leading-6 bg-gray-50 rounded-xl border border-gray-200 border-solid">
        <div className="justify-center px-3 py-2 bg-white rounded-md shadow text-slate-700">
          My Info
        </div>
        <div className="my-auto text-gray-500">My Team</div>
      </div>
      <section className="flex flex-col p-4 mt-2 text-gray-900 bg-gray-50 rounded-2xl max-md:max-w-full">
        <h2 className="text-xl leading-8 max-md:max-w-full">My Info</h2>
        <div className="flex flex-col py-3 mt-2 backdrop-blur-[5px] bg-gray-50 bg-opacity-80 max-md:max-w-full">
          <div className="flex gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto text-base leading-6">Your keys</div>
            <div className="text-lg font-semibold leading-7">12 keys</div>
          </div>
          <div className="mt-1 text-xs leading-5 text-right text-slate-700 max-md:max-w-full">
            There's a total of 3020480 keys.
          </div>
          <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto text-base leading-6">
              Your earnings for this round
            </div>
            <div className="text-lg font-semibold leading-7">0.24 ETH</div>
          </div>
          <div className="mt-1 text-xs leading-5 text-right text-slate-700 max-md:max-w-full">
            ~705.6 USDC
          </div>
          <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto text-base leading-6">Your total earnings</div>
            <div className="text-lg font-semibold leading-7">4.20 ETH</div>
          </div>
          <div className="mt-1 text-xs leading-5 text-right text-slate-700 max-md:max-w-full">
            ~12,359.17 USDC
          </div>
        </div>
      </section>
    </div>
  );
};

// Component to show a purchase timeline
const PurchaseTimeline = () => {
  const timelineData = [
    { name: "deeznuts", keys: 12, time: "12:00:01 UTC" },
    { name: "donkeynuts", keys: 1, time: "11:59:59 UTC" },
    { name: "jesuschrist", keys: 69, time: "11:58:32 UTC" },
    { name: "zombie", keys: 2, time: "11:57:25 UTC" },
    { name: "joeboden", keys: 2, time: "11:56:16 UTC" },
    { name: "donudtrompu", keys: 3, time: "11:55:01 UTC" },
    { name: "trudeauego", keys: 3, time: "11:54:59 UTC" },
  ];

  return (
    <div className="flex flex-col flex-1 self-start mt-5 max-md:max-w-full">
      <div className="flex gap-1 justify-between self-start p-1.5 text-base font-semibold leading-6 bg-gray-50 rounded-xl border border-gray-200 border-solid">
        <div className="justify-center px-3 py-2 whitespace-nowrap bg-white rounded-md shadow text-slate-700">
          Timeline
        </div>
        <div className="my-auto text-gray-500">Past Winners</div>
      </div>
      <section className="flex flex-col justify-center px-4 pt-4 mt-2 text-sm leading-5 text-black bg-gray-50 rounded-2xl max-md:max-w-full">
        <h2 className="text-xl leading-8 max-md:max-w-full">Purchase Timeline</h2>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 justify-between mt-4 max-md:flex-wrap max-md:max-w-full"
          >
            <div>
              {item.name} bought {item.keys} {item.keys === 1 ? "key" : "keys"}
            </div>
            <div>{item.time}</div>
          </div>
        ))}
      
      </section>
    </div>
  );
};

function MyComponent() {
  return (
    <div className="flex flex-col py-10 bg-white">
      <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ActivePotInfo />
            <HowToPlay />
          </div>
        </div>
        <div className="flex flex-col self-end p-2 max-w-full text-lg leading-7 text-gray-900 w-[540px]">
          <LastRoundWinner />
          <BiggestWinner />
        </div>
      </div>
      <div className="flex gap-5 self-center w-full max-w-[1360px] max-md:flex-wrap max-md:max-w-full">
        <MyInfo />
        <PurchaseTimeline />
      </div>
    </div>
  );
}

export default MyComponent;
