import React from 'react';

function TextInput({ tofrom, currency, setCurrency, amount, setAmount, currencies, readOnly }) {
  return (
    <div className='bg-white my-5 rounded-lg'>
      <div className='flex justify-between p-3 text-gray-400 tracking-wider'>
        <h1 className='capitalize'>{tofrom}</h1>
        <h2>Currency Type</h2>
      </div>
      <div className='flex justify-between p-3'>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className='px-1 w-28 sm:w-52 border-0 border-b-2 focus:outline-none focus:border-b-blue-500'
          placeholder='0'
          readOnly={readOnly}
        />
        <div>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-1 text-base focus:outline-none sm:text-sm rounded-md cursor-pointer bg-gray-200"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TextInput;
