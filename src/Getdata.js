import React from "react"; 
function Getdata() {
    const [myData, setData] = React.useState([])
    React.useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(response => {
                console.table(response);
                setData(response);
            });
    });
    return(
        <>
        <div className="cal">
                    <h1>API USING REACT JS</h1>
                </div>
                <center>
            <table border={1} width={100}>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>price</th>
                    <th>category</th>
                    <th>Image</th>
                    <th>Rate</th>
                </tr>
                {myData.map((V, i) => {
                    return (<tr>
                        <td>{i + 1} </td>
                        <td>{V.title} </td>
                        <td>{V.price} </td>
                        <td>{V.category} </td>
                        <td><img width={100} src={V.image} /></td>
                        <td>{V.rating.rate} </td>
                        <td>{V.Description} </td>
                    </tr>
                    )
                })}
            </table>
            </center>
        </>
    );
}
export default Getdata;
