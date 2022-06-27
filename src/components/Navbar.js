import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row w-[100vw] bg-green-900 h-[fit-content] p-[20px] shadow-2xl justify-between'  >
            <label className='font-serif text-white font-light text-3xl ' >Transaction</label>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;