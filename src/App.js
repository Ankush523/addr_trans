import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useSigner } from 'wagmi';
import Navbar from './components/Navbar';
function App() {

  const[addr,setAddr]=useState('');
  const[amt,setAmt]=useState('');

  const signer = useSigner();

  const sendtx=async()=>{

    const tx = {
      to: addr.toString(),
      value: ethers.utils.parseEther(amt)
    }

    await signer.data.sendTransaction(tx);

  }

  return (
    <div className='App'>
    <Navbar/>
    <div  className='flex flex-col w-[100vw] h-[100vh] items-center mt-9  '>
      <div className='flex flex-row w-[30vw] justify-around'>
      <label className='font-mono font-bold text-[20px]'>Address : </label>
           <input className='w-[300px] rounded-xl hover:shadow-xl' onChange={e=>setAddr(e.target.value)} placeholder='Enter Address' />
      </div>
      <br/>
      <div className='flex flex-row w-[30vw] justify-around'>
           <label className='font-mono font-bold text-[20px]'>Amount : </label>
           <input className='w-[300px] rounded-xl hover:shadow-xl'onChange={e=>setAmt(e.target.value)}  placeholder='Enter Amount' />
      </div>
      <div>
           <br/>
           <br/>
           <button className='font-mono bg-slate-100 text-[20px] w-[fit-content] rounded-md hover:shadow-xl'  onClick={sendtx} >Confirm Transfer</button>
      </div>
    </div>
    </div>
  );
}

export default App;
