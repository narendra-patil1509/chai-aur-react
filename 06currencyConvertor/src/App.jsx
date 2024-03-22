import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }} 
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
