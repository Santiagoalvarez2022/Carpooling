import React from 'react'
import Loader from './LoaderWheel/LoaderWheel';


export default function ModalSuccess({ text, response }) {

    console.log(text, response, "modalaaa");
    
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-[#296fcc9f] flex items-center justify-center z-20">
        <div className="bg-blue-200 w-[90vw] sm:w-[30vw] h-[40vh] p-4 rounded-md flex flex-col items-center justify-center text-white">

            {response === 'pending' && <>
             <Loader />
            <p className='text-lg text-bgBlueDark p-4 font-semibold ' >{text}</p>
            </>
            }


           { response === 'success' && <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="48" stroke='green' strokeWidth="4" fill="none" />
                    <path d="M35 50 l10 10 l20 -20" stroke='green' strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='text-lg text-bgBlueDark p-4 font-semibold ' >{text}</p>
 
                </>}

             {response === 'rejecited' &&  <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="48" stroke="green" strokeWidth="4" fill="none" />
                    <path d="M30 30 l40 40" stroke="green" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30 70 l40 -40" stroke="green" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='text-lg text-bgBlueDark p-4 font-semibold'>{text}</p>

                </> 
                } 


        </div>
      </div>
    );
  }