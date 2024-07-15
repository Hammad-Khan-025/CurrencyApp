import React, { useState } from 'react';
import TextInput from './TextInput';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

function CurrencyConvertor() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const { rates, currencies } = useCurrencyInfo(from);

  const handleConvert = () => {
    if (rates && rates[to]) {
      const rate = rates[to];
      const roundedConvertedAmount = Math.round((amount * rate) * 1000) / 1000; // Round to 3 decimal places
      setConvertedAmount(roundedConvertedAmount);
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    const tempAmount = amount;
    setAmount(convertedAmount || 0);
    setConvertedAmount(tempAmount);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-custombg bg-cover tracking-wider py-10'>
      <img src="../images/Currency.png" className='w-64 sm:w-80 mb-10' alt="logo" />
      <div className='bg-white w-full sm:w-[600px] rounded-xl bg-opacity-30 border-2 px-5 sm:px-10 py-5 relative'>
        <TextInput 
          tofrom="from" 
          currency={from} 
          setCurrency={setFrom} 
          amount={amount} 
          setAmount={setAmount} 
          currencies={currencies} 
          readOnly={false}
        />
        <TextInput 
          tofrom="to" 
          currency={to} 
          setCurrency={setTo} 
          amount={convertedAmount || 0} 
          setAmount={setConvertedAmount} 
          currencies={currencies} 
          readOnly={true}
        />

        <button
          onClick={handleConvert}
          className='bg-blue-600 hover:bg-blue-500 active:bg-blue-900 text-white w-full p-3 rounded-lg font-semibold mb-5 transition-all'
        >
          Convert {from} to {to}
        </button>

        <div className='flex justify-center'>
          <button
            onClick={handleSwap}
            className='bg-blue-600 hover:bg-blue-500 active:bg-blue-900 text-white px-3 py-1 font-medium rounded absolute top-[140px] transition-all'
          >
            Swap
          </button>
        </div>

        {convertedAmount !== null && (
          <div className='text-center mt-5'>
            <p>{amount} {from} is approximately {convertedAmount} {to}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConvertor;
