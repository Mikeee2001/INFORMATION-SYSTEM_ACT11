import React, { useState } from 'react';

const StudentItem = ({ student, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(student.name);
  const [updatedCourse, setUpdatedCourse] = useState(student.course);
  const [updatedAge, setUpdatedAge] = useState(student.age);

  const handleDelete = () => {
    onDelete(student.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(student.id, { name: updatedName, course: updatedCourse, age: updatedAge });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedName(student.name);
    setUpdatedCourse(student.course);
    setUpdatedAge(student.age);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
          <input type="text" value={updatedCourse} onChange={(e) => setUpdatedCourse(e.target.value)} />
          <input type="number" value={updatedAge} onChange={(e) => setUpdatedAge(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          {student.name} - {student.course} - {student.age}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default StudentItem;
