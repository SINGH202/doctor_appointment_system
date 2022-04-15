import { useNavigate } from "react-router"

export const SingleDoc = ({ id, name, speciality, cost }) =>{
    const navi = useNavigate();
    const handleNav = () =>{
        navi(`/docs/${id}`)
    }
    return(
        <div>
            <h3>Name: Dr. {name}</h3>
      <h4>Specialization: {speciality}</h4>
      <h5>Charges per meet: {cost}</h5>
      <button onClick={() => handleNav(id)}>
        Book appointment
      </button>
      <button >Check availablity</button>
        </div>
    )
}