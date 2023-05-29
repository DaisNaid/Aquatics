import useGlobalState from 'hooks/useGlobalState';

const ServiceModal = ({ modalType }) => {
    const [showServiceModal] = useGlobalState('serviceModal');

    return (
        <>
        { showServiceModal
            ? <div className='bg-tealGreen rounded'>
                { modalType === 'maintenance'
                    ? <div className='bg-zinc-900 mr-[2px] rounded grid grid-flow-row px-3 py-2 gap-4 text-lg border-b-2 border-tealGreen rounded-b-md text-right'>
                        <span>Pond Maintenance</span>
                        <span>Garden Maintenance</span>
                    </div>
                    : <div className='bg-zinc-900 ml-[2px] rounded grid grid-flow-row px-3 py-2 gap-4 text-lg border-b-2 border-tealGreen rounded-b-md text-left'>
                        <span>Pond Building</span>
                        <span>Pond Repair</span>
                        <span>Water Feature Installation</span>
                        <span>Refurbishments and Upgrade</span>
                    </div>
                }
            </div>
            : null 
        }
        </>

    )
};

export default ServiceModal;
