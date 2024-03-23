import React from 'react';
import StudentItem from './StudentItem';
import './StudentList.css';

const StudentList = ({ students, onDelete, onUpdate }) => {
  return (
    <div className="student-list">
      <h2><center>Student List</center></h2>
      <ul>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
