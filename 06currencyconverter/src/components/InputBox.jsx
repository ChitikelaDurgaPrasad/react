import React, { useId } from 'react'

// const InputBox = ({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     selectedCurrency="usd",
//     currencyOptions=[],
//     amountDisabled=false,
//     currencyDisabled=false,
//     className="",
// }) => {
//     const amountId = useId()
//   return (
//     <div className={`p-4 row m-0 bg-white border border-0 ${className}`}>
//         <div className="col-6 d-flex flex-column">
//             <label htmlFor={amountId}>
//                 {label}
//             </label>
//             <input 
//             value={amount}
//             placeholder='Amount'
//             disabled={amountDisabled}
//             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//             type="number" 
//             name="" 
//             id={amountId} />
//         </div>
//         <div className="col-6 d-flex flex-column">
//             <label>
//                 Currency Type
//             </label>
//             <select
//             style={{height:"30px"}}
//             value={selectedCurrency}
//             onChange={(e) =>{
//                 onCurrencyChange && onCurrencyChange(e.target.value)
//             }}
//             disabled={currencyDisabled}
//             >
//                 {currencyOptions.map((currency) =>(
//                     <option key={currency} value={currency}>{currency}</option>
//                 ))}
//             </select>
//         </div>
//     </div>
//   )
// }

// export default InputBox

// new changes

const InputBox = React.memo(({ label, amount, currencyOptions, selectedCurrency="usd", onCurrencyChange, onAmountChange, amountDisabled=false, currencyDisabled=false,  className=""  }) => {
    const amountId = useId()
  return (
    <div className={`p-4 row m-0 bg-white border border-0 ${className}`}>
        <div className="col-6 d-flex flex-column">
            <label htmlFor={amountId}>
                {label}
            </label>
            <input 
            value={amount}
            placeholder='Amount'
            disabled={amountDisabled}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            type="number" 
            name="" 
            id={amountId} />
        </div>
        <div className="col-6 d-flex flex-column">
            <label>
                Currency Type
            </label>
            <select
            style={{height:"30px"}}
            value={selectedCurrency}
            onChange={(e) =>{
                onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) =>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  );
});

export default InputBox;
