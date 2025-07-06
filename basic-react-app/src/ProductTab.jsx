import Product  from "./Product";

function ProductTab()
{
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyCenter:"center"
    }
    return(

        <div style={styles} >
        <Product title='LapTop' idx={0}/>
        <Product title='Mobile' idx={1}/>
 <Product title='Mouse' idx={2}/>
        <Product title='Pen' idx={3}/>
        </div>
    );
}
export default ProductTab;