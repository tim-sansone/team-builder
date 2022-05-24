import React from "react";


export default function Form(props){
    const { formData, updateData, newMember } = props;
   
    const onChange = evt => {
        const { name, value } = evt.target
        updateData(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        newMember();
    }

    return (
       
        <form className="form-card" onSubmit={onSubmit}>
            <h2>New Party Member</h2>
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
            <button>Create!</button>
        </form>
       
   ) 
}