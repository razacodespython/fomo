const ActivePotInfo = ({ data }) => {
  console.log(data)
  return (
    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full bg-white max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-8 text-gray-900 max-md:max-w-full">
          Active pot
        </h2>
        <div className="flex gap-5 justify-between pr-8 text-7xl font-bold tracking-tighter text-gray-900 max-md:flex-wrap max-md:pr-5 max-md:text-4xl">
          <div className="max-md:max-w-full max-md:text-4xl">{data.deez}</div>
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

export default ActivePotInfo;

