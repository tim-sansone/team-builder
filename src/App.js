import './App.css';
import React, { useState } from "react";
import TeamMember from "./Components/TeamMember"
import Form from "./Components/Form"



const initialValues = {
  name: "",
  class: "",
  alignment: "",
  weapon: ""
}



function App() {
  const [partyMembers, setPartyMembers] = useState([]);
  const [formData, setFormData] = useState(initialValues);

  const updateData = (name, value) => {
    setFormData({...formData, [name]: value});
  }

  const newMember = () => {
    setPartyMembers([...partyMembers, formData]);
    setFormData(initialValues);
  }
  
  
  return (
    <>
    <Form formData={formData} updateData={updateData} newMember={newMember}/>
    <div className="container">
    {
      partyMembers.map(each => <TeamMember member={each} key={each.name}/>)
    }
    </div>
    </>
  )
}

export default App;
