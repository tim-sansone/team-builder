import React from "react";

export default function TeamMember({ member, id, setMemberToEdit }){
    
    
    return (
        <div className="team-member-card">
            <h2><strong>Name:</strong> {member.name}</h2>
            <p><strong>Class:</strong> {member.class}</p>
            <p><strong>Alignment:</strong> {member.alignment}</p>
            <p><strong>Weapon of Choice:</strong> {member.weapon}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <button onClick={() => setMemberToEdit(id)}>Edit</button>
        </div>
    )
}