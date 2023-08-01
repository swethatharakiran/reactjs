import Chartbar from './Chartbar';
import './Chart.css'

const Chart=(props)=>{
    const datapointvalues=props.dataPoints.map((datapoint)=>datapoint.value);
    const totalmaximum=Math.max(...datapointvalues); //recieves 12 arguments (12 months)
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=>{
                return (<Chartbar
                key={dataPoint.label}
                value={dataPoint.value}
                maxvalue={totalmaximum}
                label={dataPoint.label}
                />);
            })}
        </div>
    );
}

export default Chart;