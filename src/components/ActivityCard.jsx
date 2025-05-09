import ellipsis from '/images/icon-ellipsis.svg'

export default function ActivityCard ({ title, current, previous, timeFrames }) {
    const timeLabel = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    };

    const configMap = {
        Work: { icon: 'work', color: 'work' },
        Play: { icon: 'play', color: 'play' },
        Study: { icon: 'study', color: 'study' },
        Exercise: { icon: 'exercise', color: 'exercise' },
        Social: { icon: 'social', color: 'social' },
        'Self Care': { icon: 'self-care', color: 'selfcare' }
    };

    // const bgColorMap = {
    //     work: 'bg-work',
    //     play: 'bg-play',
    //     study: 'bg-study',
    //     exercise: 'bg-exercise',
    //     social: 'bg-social',
    //     selfcare: 'bg-selfcare',
    // };

    const { icon, color } = configMap[title];

    return (
        <div className='rounded-2xl w-[320.19px] min-w-[320px] mt-7 laptop:w-[220px] laptop:min-w-fit laptop:mt-0'>
            {/* Icon & Background Color */}
            <div
                className={`bg-${color} h-14 rounded-t-2xl`}
                style={{
                    backgroundImage: `url(/images/icon-${icon}.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '91% 25%',
                }}    
            />
            {/* Content box */}
            <div className='bg-navy900 rounded-2xl px-7 py-7 -mt-4 hover:bg-[#30377f] cursor-pointer transition-colors duration-200'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-rubikMedium text-white text-[18px]'>{title}</h3>
                    <img src={ellipsis} />
                </div>
                <div className='flex items-center justify-between mt-1 laptop:flex-col laptop:items-start laptop:mt-6'>
                    <p className='text-slate-200 font-rubikLight text-4xl'>{current}hrs</p>
                    <p className='text-navy200 text-sm'>{timeLabel[timeFrames]} - {previous}hrs</p>
                </div>
            </div>
        </div>
    );
};