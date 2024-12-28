import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { logo, WhatsappIcon } from '../../assets'

const Whatsapp = () => {
    const [show, setShow] = React.useState(false)

    const showvarient = {
        initial: {
            opacity: 0,
            width: 0,
        },
        animate: {
            width: "16rem",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }
    const messageVarient = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }


    const handleClick = () => {
        window.open('https://wa.me?919910741417?text=Hello', '_blank');
    };
    return (
        <AnimatePresence>
            <div onClick={() => setShow(!show)} className='fixed bottom-10 left-5 z-50 cursor-pointer'>
                {
                    !show && (
                        <span className='absolute -top-4 -right-4    z-10 bg-red-500 text-white rounded-full flex justify-center items-center p-3 w-4 h-4 text-xs'>1</span>
                    )
                }
                <img src={WhatsappIcon} alt="" className='w-16 h-16 drop-shadow-2xl  ' />

                <motion.div
                    variants={showvarient}
                    initial="initial"
                    animate={show ? "animate" : "initial"}
                    className="absolute flex flex-col justify-between top-0 right-0 translate-x-[100%] -translate-y-[100%] w-60  shadow-2xl aspect-[3/4] rounded-xl overflow-hidden bg-[url('https://w0.peakpx.com/wallpaper/557/521/HD-wallpaper-whatsapp-v-background-doodle-pattern-patterns-whatsapp.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex gap-2 px-2 py-1 items-center bg-gray-700 ">
                        <div className="relative before:top-0 before:right-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green-400">
                            <img src={logo} alt="msty enterprises" className='w-10 h-10 p-1 bg-black border-white border-2 rounded-full' />
                        </div>
                        <div className="py-2">
                            <p className='text-white font-bold text-sm '>Msty Enterprises</p>
                            <p className='text-xs font-semibold text-neutral-400'>Online</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                        <motion.div
                            variants={messageVarient}
                            initial="initial"
                            animate={show ? "animate" : "initial"}
                            className="bg-white text-sm w-fit px-2 py-1 rounded-md shadow-lg">
                            Hello 🙏, How may I help you?
                        </motion.div>
                        <button onClick={handleClick} className='bg-green-600 text-white px-6 py-2 rounded-3xl block mx-auto items-end'> Connect</button>
                    </div>
                </motion.div>

            </div>
        </AnimatePresence >
    )
}

export default Whatsapp
