import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export const SingleProductList = () => {
  const {id} = useParams()

  const [data, setData] = useState([])  
  useEffect(() => {
    axios.get(`https://doctor-appointment-backend202.herokuapp.com/doc/${id}`)
    .then(({ data }) => setData(data));
  },[])
  console.log(data)
    // make a request to get the details
  return (
    <div key={data.id} className="products-list">
      <div style={{backgroundColor:"transparent"}}></div>
      <div >
      <h3>Name: Dr. {data.name}</h3>
      <h4>Specialization: {data.speciality}</h4>
      <h5>Charges per meet: {data.cost}</h5>
     
    </div>
        
    </div>
  );
};
