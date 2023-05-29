import IconLoader from 'icons';
import { getStyle } from 'utils/localizer';

const Services = () => {
    return (
        <div className='mt-28'>
            <div className='text-center mb-14'>
                <span className="font-bold text-3xl">Our Services</span>
            </div>
            <div className={getStyle(['base'])}>
                <div className={getStyle(['serviceContainer']) + ' border-l-0'}>
                    <span className={getStyle(['serviceText'])}>Construction</span>
                    <div className={getStyle(['serviceIcon']) + ' bg-gradient-to-r from-zinc-900 via-zinc-900 to-opaque'}>
                        <IconLoader xlinkHref= { 'chevron-down' } className='h-7 w-5' />
                    </div>
                </div>
                <div className={getStyle(['serviceContainer']) + ' border-r-0'}>
                    <span className={getStyle(['serviceText'])}>Maintenance</span>
                    <div className={getStyle(['serviceIcon']) + ' bg-gradient-to-l from-zinc-900 via-zinc-900 to-opaque'}>
                        <IconLoader xlinkHref= { 'chevron-down' } className='h-7 w-5' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
