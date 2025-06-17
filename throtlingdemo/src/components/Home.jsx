import { useCallback, useRef, useState, useMemo } from "react";
const Home = () => {
    console.log("Home rendered");
    const [value, setValue] = useState("value");
    const inputRef = useRef(0);

    // Memoize func to prevent it from changing on re-renders
    const func = () => {
        inputRef.current += 1;
        console.log(value);
        setValue(`changed ${inputRef.current}`);
    }; // ✅ inputRef and setValue are stable

    const throttle = useCallback((callback, delay) => {
        console.log("hlo"); // Now this logs only once
        let lastcall = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastcall >= delay) {
                callback(...args);
                lastcall = now;
            }
        };
    }, []);

    // Memoize the throttled function to avoid recreating it
    const handelChange = useMemo(() => throttle(func, 2000), []);

    return (
        <div>
            <div>{value}</div>
            <button onClick={handelChange}>onclick</button>
            <div>USECALLBACK RELATED</div>
        </div>
    );
};
export default Home;