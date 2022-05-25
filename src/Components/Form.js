import React, { useState, useEffect } from "react";
import * as yup from "yup";

const initialValues = {
    name: "",
    class: "",
    alignment: "",
    weapon: "",
    email: ""
  }

  const schema = yup.object().shape({
      name: yup.string().required("You must name your character"),
      class: yup.string().oneOf(["Fighter", "Mage", "Ranger", "Healer", "Theif", "Jester"], "Please select a class"),
      alignment: yup.string().oneOf(["Lawful Good","Lawful Neutral","Lawful Evil","Neutral Good","Neutral Neutral","Neutral Evil","Chaotic Good","Chaotic Neutral","Chaotic Evil" ], "Please select an alignment"),
      weapon: yup.string(),
      email: yup.string().required("You must enter an email").email("Must be a valid email")
  })


export default function Form(props){
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);
    const [disabled, setDisabled] = useState(false);
    
    
    const { memberToEdit, setMemberToEdit, partyMembers, setPartyMembers} = props;
   
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ""}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    
    
    const onChange = evt => {
        const { name, value } = evt.target
        setFormErrors(name, value);
        setFormData({...formData, [name]: value});
    }

    const onSubmit = evt => {
        evt.preventDefault();
        if(Number.isFinite(memberToEdit)){
           const newParty = partyMembers.map((each, index) => {
                if(index === memberToEdit){
                    return formData;
                } else {
                    return each;
                }
            })
            setPartyMembers(newParty);
            setFormData(initialValues);
            setMemberToEdit();
            return;
            
        }
        setPartyMembers([...partyMembers, formData]);
        setFormData(initialValues);
        return;
    }

    useEffect(() => {
        Number.isFinite(memberToEdit) && setFormData(partyMembers[memberToEdit])
    }, [memberToEdit])

    useEffect(() => {
        schema.isValid(formData).then(res => setDisabled(!res))
    }, [formData])

    return (
        <form className="form-card" onSubmit={onSubmit}>
            <div style={{ color: "red" }}>
                <div>{errors.name}</div><div>{errors.class}</div><div>{errors.alignment}</div><div>{errors.weapon}</div><div>{errors.email}</div>
            </div>
            { Number.isFinite(memberToEdit) ? <h2>Editing {partyMembers[memberToEdit].name}</h2> : <h2>New Party Member</h2> }
            <label>Name 
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                    />
            </label>
            <label>Class
                    <select name="class" value={formData.class} onChange={onChange} >
                        <option value="">-- Select A Role --</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Mage">Mage</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Healer">Healer</option>
                        <option value="Theif">Theif</option>
                        <option value="Jester">Jester</option>
                    </select>
            </label>
            <label>Alignment
                <select name="alignment" value={formData.alignment} onChange={onChange}>
                    <option value="">-- Select Alignment --</option>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="Neutral Neutral">Neutral Neutral</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
                </select>
            </label>
            <label>Weapon of Choice 
                <input
                type="text"
                name="weapon"
                value={formData.weapon}
                onChange={onChange}
                    />
            </label>
            <label>Email
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                />
            </label>
            <button disabled={disabled}>{Number.isFinite(memberToEdit) ? "Edit" : "Create!"}</button>
        </form>
   ) 
}