import './Device.css';

function Device(props) {
  console.log(props.device)
  const changeName = (e) =>{
    console.log("whhhoooooooowwwies you want o change ethe name huh?");
    
  }

  return (
    <div className='Device'>
        <div>
            <div className='devbox1'>
                <p>{props.device.name}</p>
                <button onClick={changeName}>Change name</button>
            </div>
            <div className='devbox2'>
                <p>ID: {props.device._id}</p>
                <p>Info</p>
                <p>power: {props.device.power}</p>
                <p>power daily: {props.device.powerDaily}</p>
            </div>
        </div>
    </div>
  );
}

export default Device;
