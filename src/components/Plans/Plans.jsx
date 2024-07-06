import React from 'react';
import './Plans.css';
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className="blur blur-p1"></div>
      <div className="blur blur-p2"></div>
        <div className='programs-header'>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY IS</span>
        <span className='stroke-text'>NOW WITH US</span>
        </div>
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}> 
                   {plan.icon}
                   <span>{plan.name}</span>
                   <span className='plan-price'>$ {plan.price}</span> 
 
                   <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                                </div>
                        ))}
                   </div>
                   <div>
                        <span>See More Benefits -&gt; </span>
                   </div>
                   <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Plans
