import { useState } from "react";

const MyInfo = () => {

  const [deez, setDeez] = useState(false)
  const [myInfoClass, setMyInfoClass] = useState("active")
  const [teamClass, setTeamClass] = useState("inactive")


  const toggleClasses = {
    active: "justify-center px-3 py-2 bg-white rounded-md shadow text-slate-700",
    inactive: "my-auto text-gray-500"
  }

  const handleActiveMenu = (e) => {
    console.log(e.target.innerText)
    if (e.target.innerText == "My Team"){
      setTeamClass("active")
      setMyInfoClass("inactive")
    } else if (e.target.innerText === "My Info"){
      setTeamClass("inactive")
      setMyInfoClass("active")
    }
  }

  console.log({
    myInfoClass,
    teamClass
  })
  return (
    <div className="flex flex-col flex-1 max-md:max-w-full">
      <div className="flex gap-1 justify-between self-start p-1.5 text-base font-semibold leading-6 bg-gray-50 rounded-xl border border-gray-200 border-solid">
        <div onClick={(e) => {handleActiveMenu(e)}} className={toggleClasses[myInfoClass]}>
          My Info
        </div>
        <div onClick={(e) => {handleActiveMenu(e)}} className={toggleClasses[teamClass]}>My Team</div>
      </div>
      <section className="flex flex-col p-4 mt-2 text-gray-900 bg-gray-50 rounded-2xl max-md:max-w-full">
      {
        deez ? (<p>nuts</p>) : (<p>yo mama</p>)
      }
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

export default MyInfo;
