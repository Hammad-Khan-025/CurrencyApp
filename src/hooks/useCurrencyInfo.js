import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/68b2a91689f76b4e4372b30d/latest/${baseCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setRates(res.conversion_rates);
        setCurrencies(Object.keys(res.conversion_rates));
      })
      .catch((err) => console.error(err));
  }, [baseCurrency]);

  return { rates, currencies };
}

export default useCurrencyInfo;
