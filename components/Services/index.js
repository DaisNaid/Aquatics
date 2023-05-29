import IconLoader from 'icons';
// import { getStyle } from 'utils/localizer';

const Services = () => {
    return (
        <div className='mt-28'>
            <div className='text-center mb-14'>
                <span className="font-bold text-3xl">Our Services</span>
            </div>
            <div className='grid grid-flow-col gap-28'>
                <div className='grid grid-flow-row text-center border border-tealGreen rounded border-l-0 bg-darkGrey'>
                    <span className='font-semibold text-lg text-tealGreen my-8'>Construction</span>
                    <div className='w-full flex justify-center rounded-b bg-gradient-to-r from-zinc-900 via-zinc-900 to-opaque'>
                        <IconLoader xlinkHref= { 'chevron-down' } className='h-7 w-5' />
                    </div>
                </div>
                <div className='grid grid-flow-row text-center border border-tealGreen rounded border-r-0 bg-darkGrey'>
                    <span className='font-semibold text-lg text-tealGreen my-8'>Maintenance</span>
                    <div className='w-full flex justify-center rounded-b bg-gradient-to-l from-zinc-900 via-zinc-900 to-opaque'>
                        <IconLoader xlinkHref= { 'chevron-down' } className='h-7 w-5' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
