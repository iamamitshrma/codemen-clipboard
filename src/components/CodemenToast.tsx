import * as React from "react";
import { useState, useEffect } from "react";

function CodemenToast({ className }: { className: string }) {

    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("Follow thecodemen!");
    const [timeout, setTimeOut] = useState(3000);

    function menToast({msg, tmout}: {msg: string, tmout: number}) {
        setMessage(msg)
        setTimeOut(tmout)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, timeout);
    }, [menToast])

    return (
        isVisible && <div onClick={() => setIsVisible(false)} className={`fixed bottom-0 right-0 m-5 bg-slate-500 px-4 py-2 rounded-md cursor-pointer ${className}`}>{message}</div>
    )
}
export default CodemenToast