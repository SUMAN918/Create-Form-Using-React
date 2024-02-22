import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  
  // function changerFirstHandler(event){
  //   setFirstName(event.target.value);
  // }
  // function changerLastHandler(event){
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", comments:"", isVisible:true, mode:"", favCar:""}
  );

  console.log(formData);

  function changerHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Print Form Data");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
            onChange={changerHandler}
            name="firstName"
            value={formData.firstName}
          />
          <br/>
          <br/>
        <input
          type="text"
          placeholder="last name"
            onChange={changerHandler}
            name="lastName"
            value={formData.lastName}
          />
          <br/>
          <br/>
        <input
          type="email"
          placeholder="enter your email here..."
            onChange={changerHandler}
            name="email"
            value={formData.email}
          />
          <br/>
          <br/>
          <textarea placeholder="enter your comments here ..." onChange={changerHandler} name="comments" value={formData.comments} />
          <br/>
          <br/>
          <input type="checkbox" onChange={changerHandler} name="isVisible" id="isVisible" checked= {formData.isVisible} />
          <label htmlFor="isVisible">Am I visible ?</label>
          <br/>
          <br/>
          <fieldset>
            <legend>Mode:</legend>
            <input type="radio" onChange={changerHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode === "Online-Mode"} />
          <label htmlFor="Online-Mode">Online Mode</label>
          <br/>
          <input type="radio" onChange={changerHandler} name="mode" value="Offline-Mode" id="Offline-Mode" checked={formData.mode === "Offline-Mode"} />
          <label htmlFor="Offline-Mode">Offline Mode</label>
          </fieldset>
          <br/>
          <br/>
          <label htmlFor="favCar">Favourite Car</label>
          <select
            onChange={changerHandler}
            name="favCar" id="favCar" value={formData.favCar}
            >
            <option value="BMW">BMW</option>
            <option value="Tesla">Tesla</option>
            <option value="Tata">Tata</option>
            </select>
            <br/>
            <br/>
            {/* <input type="submit" value="submit" /> */}
            <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
