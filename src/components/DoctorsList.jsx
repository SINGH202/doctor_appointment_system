import axios from "axios";
import { useEffect, useState } from "react";
import "./css/doctors.css";

import { useNavigate } from "react-router";

export const DoctorsList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const api = "https://doctor-appointment-backend202.herokuapp.com/doc";
  const getData = () => {
    axios({
      method: "get",
      url: api,
    })
      .then((res) => setData(res.data))
      .catch(() => {
        console.log("Something wrong at backend");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const bookAppointment = (id) => {
    navigate(`/doc/${id}`);
  };

  // consnsole.log("slots", id);
  // };t showSlots = (id) => {
  //   co

  return (
    <div className="products-list">
      {data.map((item) => {
        return (<SingleProduct id={item._id} 
          name= {item.name}
          cost = {item.cost}
          speciality = {item.speciality}
          navigate={navigate}/>)
      })}
    </div>
  );
};
function SingleProduct({ id, name, speciality, cost, navigate }) {
  const handleNav = () => {
    navigate(`/docs/${id}`);
  };
  return (
    <div key={id}>
      <h3>Name: Dr. {name}</h3>
      <h4>Specialization: {speciality}</h4>
      <h5>Charges per meet: {cost}</h5>
      <button onClick={() => handleNav(id)}>
        Book appointment
      </button>
      <button >Check availablity</button>
    </div>
  );
}
