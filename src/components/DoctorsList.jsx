import axios from "axios";
import { useEffect, useState } from "react";
import "./css/doctors.css";

import { useNavigate } from "react-router";
import { SingleDoc } from "./SingleDoc";

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

  return (
    <div className="products-list">
      {data.map((item) => {
        return (
        <div>
        
          <SingleDoc name={item.name} id={item._id} speciality={item.speciality} navigate={navigate}/>
          </div>)

      })}
    </div>
  );
};

