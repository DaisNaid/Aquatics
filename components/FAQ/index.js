import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const FAQ = () => {
    return (
        <div className='mt-28'>
            <div className='text-center mb-14'>
                <span className="font-bold text-3xl">FAQ</span>
            </div>
            <div className='border border-tealGreen rounded bg-gradient-to-r from-zinc-900 via-zinc-900 to-opaque grid grid-flow-row gap-2 py-1'>
                <Disclosure>
                    {({ open }) => (
                    <>
                        <Disclosure.Button className='py-2 flex mx-3'>
                            <span>How frequent should I clean my garden?</span>
                            <ChevronUpIcon className={`${ open ? '' : 'rotate-180 transform' } h-6 w-6 text-tealGreen absolute right-3`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className='text-zinc-300 mx-3'>
                            A few times a month
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                {/* <Disclosure>
                    {({ open }) => (
                    <>
                        <Disclosure.Button className='py-2 flex mx-3'>
                            <span className=''>What should I do if my pond water looks green ehbeyeyeyu?</span>
                            <ChevronUpIcon className={`${ open ? '' : 'rotate-180 transform' } h-6 w-6 text-tealGreen absolute right-3`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className='text-zinc-300 mx-3'>
                            Filter the dirt and clean it
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure> */}
            </div>
        </div>
    )
}

export default FAQ;
