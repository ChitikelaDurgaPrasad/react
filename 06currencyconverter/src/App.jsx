import { useCallback, useMemo, useState } from 'react'
import {InputBox, useCurrencyInfo} from './components/index.js'

function App() {
  const[amount, setAmount] = useState(0)
  const [from, setFrom]=useState('usd')
  const [to, setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = useMemo(()=> Object.keys(currencyInfo),[currencyInfo])
  const handleFromChange = useCallback((currency) => {
    setFrom(currency)
  },[])
  const handleToChange = useCallback((currency)=>{
    setTo(currency)
  },[])
  const handleAmountChange = useCallback((amount) => setAmount(amount), []);
  const handleConvertedAmountChange = useCallback((convertedAmount) => setConvertedAmount(convertedAmount), []);
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
};
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:`url(https://images.pexels.com/photos/545064/pexels-photo-545064.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      <div className="p-4 bg-secondery bordr rounded-3 w-100" style={{maxWidth:"650px"}}>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className="w-100 border border-0 rounded-3 overflow-hidden position-relative">
            <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={handleFromChange}
            onAmountChange={handleAmountChange}
            selectedCurrency={from}
            />
            <button type='button' className="position-absolute border border-0 m-0 px-4 py-1 rounded-2 bg-secondary" style={{left:"42%",top:"40%"}}
            onClick={swap}
            >Swap</button>
            <InputBox
            label="To"
            amount={convertedAmount}
            amountDisabled
            currencyOptions={options}
            selectedCurrency={to}
            onCurrencyChange={handleToChange}
            onAmountChange={handleConvertedAmountChange}
            className="pb-5"
            />
          </div>
          <button 
          className='w-100 mt-3 border border-0 py-2 rounded-3'
          type='submit'
          >convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
    )
}

export default App
