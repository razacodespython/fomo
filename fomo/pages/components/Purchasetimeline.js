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

export default PurchaseTimeline;
