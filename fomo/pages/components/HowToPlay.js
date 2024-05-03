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

export default HowToPlay;

