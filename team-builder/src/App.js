import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import MembersList from './MembersList';

function App() {
  const [memberList, setMemberList] = useState(
    [
    {name: '', email: '', role: ''}
  ]);

  const handleSubmit = (member) => {
    setMemberList([...memberList, member])
  };
  console.log("App MemberList", memberList);

  const newMember = memberList.map(member => {
    return (
    <div>
      <h1>{member.name}</h1>
      <h2>{member.email}</h2>
      <h3>{member.role}</h3>
    </div>
    )
  })

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      {newMember}
    </div>
  );
}

export default App;
