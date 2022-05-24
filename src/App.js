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
  const [memberToEdit, setMemberToEdit] = useState();
  
  return (
    <>
    <Form
      initialValues={initialValues}
      formData={formData}
      setFormData={setFormData}
      partyMembers={partyMembers}
      setPartyMembers={setPartyMembers}
      memberToEdit={memberToEdit}
      setMemberToEdit={setMemberToEdit}
    />
    <div className="container">
    {
      partyMembers.map((each, index) => 
        <TeamMember
          member={each}
          id={index}
          key={index}
          setMemberToEdit={setMemberToEdit}
        />
      )
    }
    </div>
    </>
  )
}

export default App;
