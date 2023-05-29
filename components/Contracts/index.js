import IconLoader from 'icons';
// import { getStyle } from 'utils/localizer';

const Contracts = () => {
    return (
        <div className='mt-28'>
            <div className='text-center mb-14'>
                <span className="font-bold text-3xl">Contracts</span>
            </div>
            <div>
                <div className='grid grid-flow-row text-center border border-tealGreen rounded border-l-0 border-b-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-opaque'>
                    <span className='font-semibold text-lg text-tealGreen my-8'>7 day/week</span>
                </div>
                <div className='grid grid-flow-row text-center border border-tealGreen rounded border-r-0 border-b-0 bg-gradient-to-l from-zinc-900 via-zinc-900 to-opaque'>
                    <span className='font-semibold text-lg text-tealGreen my-8'>Monthly Visit</span>
                </div>
                <div className='grid grid-flow-row text-center border border-tealGreen rounded border-l-0  bg-gradient-to-r from-zinc-900 via-zinc-900 to-opaque'>
                    <span className='font-semibold text-lg text-tealGreen my-8'>Year Round</span>
                </div>
            </div>
        </div>
    )
};

export default Contracts;
