import React from 'react'
import './LatestWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const LatestWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-tittle">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" className='mywork-title-img' />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} />  })}
            
        </div>
     <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
     </div>
    </div>
  )
}

export default LatestWork
