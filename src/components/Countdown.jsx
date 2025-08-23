import { useState, useEffect } from 'react'

export default function Countdown() {
    const [time, setTime] = useState(3.0)

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prev) => Math.max(0, +(prev-0.01).toFixed(2)))
            }, 10)

            return () => clearInterval(timer)
        }
    }, [])

    return (
        <div className="flex justify-center items-center text-[#00BCD4] font-bold">
            {time > 0 ? time.toFixed(2) : setTime(3.0)}
        </div>
    )
}