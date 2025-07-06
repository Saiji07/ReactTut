import './Product.css'
import Price from './Price.jsx';
function Product( {title,idx}){
    let oldPrieces=["50000", "10000","1000","50"];
    let newPrieces=["40000", "9000","999","45"];
    let descriptions=["Gaming Laptop With Good display", 
        "Best Quality Phone | 8Gb Ram",
        "Mouse with quick response",
        "Smooth pen"
    ]
    return(
        <div className='Product'>
<h3>{title}</h3>
<p>{descriptions[idx]}</p>
<Price oldPrice={oldPrieces[idx]} newPrice={newPrieces[idx]}/>
        </div>
    );
}
export default Product;