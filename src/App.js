import React, { useState } from 'react';
import StudentForm from './Components/StudentForm';
import studentsData from './Components/StudentData';
import StudentList from './Components/StudentList';



const App = () => {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map(student => (student.id === id ? { ...student, ...updatedStudent } : student)));
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm onSubmit={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} onUpdate={updateStudent} />
    </div>
  );
};

export default App;
