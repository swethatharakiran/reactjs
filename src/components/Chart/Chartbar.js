import React from 'react';
import './Chartbar.css';

const Chartbar=props=>{
    let bar_fill_height='0%';
    if(props.maxvalue>0){
        bar_fill_height=Math.round((props.value/props.maxvalue)*100) + '%';
    }
    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' 
            style={{height:bar_fill_height}}>

            </div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        
    </div>
}

export default Chartbar;
