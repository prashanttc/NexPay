'use client';
import CountUp from "react-countup"

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div>
      <CountUp className="w-full"
      duration={2}
      prefix="₹"
      decimal=","
      decimals={2}
       end={amount} />
    </div>
  )
}

export default AnimatedCounter
