import '../font/fonts.css'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const [time, setTime] = useState(3) // time in seconds
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 3)) // loop back to 3
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setAnimate(true)
    const timeout = setTimeout(() => setAnimate(false), 500)
    return () => clearTimeout(timeout)
  }, [time])

  // Format as MM:SS
  const minutes = String(Math.floor(time / 60)).padStart(2, "0")
  const seconds = String(time % 60).padStart(2, "0")

  return (
    <div className="flex justify-center items-center h-[150px] w-[310px] rounded-full bg-[#00BCD4]">
      <div
        className={`flex justify-center items-center text-white font-bold text-8xl transition-transform duration-500 ${
          animate ? 'scale-125' : 'scale-100'
        }`}
        style={{ fontFamily: "'DS-Digital', monospace" }}
      >
        {minutes}:{seconds}
      </div>
    </div>
  )
}
