import React, { useState } from 'react';
import "./App.css";

function Form(props) {
    console.log("app props", props)
    const [member, setMember] = useState( 
            {name: '', email: '', role: ''}
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.handleSubmit(member);
    }
            
    const onValueChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    }
    //console.log("Form MemberList", member);

    return (
        <div className="member">
            <form>
                <label>
                    Name: <input name="name" type="text" placeholder="Full Name" onChange={onValueChange}/>
                </label>
                <br />
                <label>
                    Email: <input name="email" type="email" placeholder="Email" onChange={onValueChange}/>
                </label>
                <br />
                <label>
                    Role: 
                    <select name="role" id="member" onChange={onValueChange}>
                        <option>Choose Role</option>
                        <option value="frontend-engineer">Front-End Engineer</option>
                        <option value="Designer">Designer</option>
                        <option value="backend-engineer">Back-End Engineer</option>
                    </select>
                </label>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;