import { useState } from "react";
import ActivityCard from "./components/ActivityCard";
import data from './data/data.json';
import Jeremy from '/images/image-jeremy.png';

function App() {
  const [ timeFrame, setTimeFrame ] = useState('weekly');

  return (
    <div>
      <div className="bg-navy950 flex flex-col items-center pt-20 pb-10 tablet:pb-20 laptop:flex-row laptop:justify-evenly laptop:items-center lg:h-screen lg:justify-center lg:gap-x-7">
        <div className="laptop:max-w-60 laptop:min-w-fit laptop:w-56">
          {/* profile */}
          <div className="bg-purple600 flex px-7 py-7 rounded-2xl items-center gap-x-4 z-10 relative laptop:flex laptop:flex-col laptop:content-start laptop:flex-wrap laptop:pt-8 laptop:space-y-8 laptop:pb-16">
            <div className="laptop:w-full">
              <img className="w-16 border-white border-solid border-2 rounded-full laptop:w-19" src={Jeremy} alt="jeremy"/>
            </div>
            <div className="w-full">
              <p className="text-navy200 font-rubikRegular leading-5 laptop:text-base">Report for</p>
              <h3 className="text-white font-rubikLight text-[26px] w-auto laptop:text-3xl laptop:w-28">Jeremy Robson</h3>
            </div>
          </div>
          {/* buttons */}
          <div className="bg-navy900 rounded-b-2xl flex justify-between pb-6 pt-[38px] -mt-4 pl-8 pr-6 laptop:flex-col laptop:space-y-3">
            <button className={`font-rubikLight transition-colors duration-200 text-[18px] laptop:w-fit hover:text-white ${timeFrame === 'daily' ? 'text-white' : 'text-navy200'}`} onClick={() => setTimeFrame('daily')}>Daily</button>
            <button className={`font-rubikLight transition-colors duration-200 text-[18px] laptop:w-fit hover:text-white ${timeFrame === 'weekly' ? 'text-white' : 'text-navy200'}`} onClick={() => setTimeFrame('weekly')}>Weekly</button>
            <button className={`font-rubikLight transition-colors duration-200 text-[18px] laptop:w-fit hover:text-white ${timeFrame === 'monthly' ? 'text-white' : 'text-navy200'}`} onClick={() => setTimeFrame('monthly')}>Monthly</button>
          </div>
        </div>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-x-7 tablet:mt-5 laptop:grid-cols-3 laptop:mt-0 laptop:gap-y-[25px] laptop:gap-x-6">
          {data.map((item) => (
            <ActivityCard
              key={item.title}
              title={item.title}
              current={item.timeframes[timeFrame].current}
              previous={item.timeframes[timeFrame].previous}
              timeFrames={timeFrame}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App