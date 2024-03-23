import React, { useState } from 'react';
import './StudentForm.css'; 

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, course, age });
    setName('');
    setCourse('');
    setAge('');
  };
const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course || !age) {
      alert('Please fill in all fields before adding a student.');
      return;
    }
  };
  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Fullname" />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course:</label>
        <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter course" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
      </div>
      <button type="submit" className="btn-submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
