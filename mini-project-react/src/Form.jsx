import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { Description } from '@mui/icons-material';
function Form()
{
let[city,setCity]=useState("");



    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="4d2d2401ac24c33b4863d47c90c73ac2";
    let getdata=async(city)=>{
let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let ans=await response.json();
let result={
    temp:ans.main.temp,
    max:ans.main.temp_max,
    min:ans.main.temp_min,
    FeelLike: ans.main.feels_like,
    description:ans.weather[0].description
}
console.log(ans); 
    }
        let  handlechange=(evt)=>{
setCity(evt.target.value);
    }

    let handleSubmit=(evt)=>{
        evt.preventDefault();
   
        getdata(city);
        setCity("");
            }
    return(
        <div className="searchbox" style={{ textAlign: "center" }}>

            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" onChange={handlechange} value={city} />
            <br></br>
            <br>
            </br>
           <Button variant='contained' type='submit'>SUBMIT</Button>
            </form>
        </div>
    );
}
export default Form;