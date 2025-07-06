

function Msgbox({userName,color})
{
    let styles={backgroundColor: color};
    return(
<h1 style={styles}>Hello {userName}</h1>
    );
}
export default Msgbox;