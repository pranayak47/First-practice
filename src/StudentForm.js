import React, { useState } from 'react';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object with the form values
    const newStudent = {
      name: name,
      age: age,
      grade: grade,
      address: address,
    };

    // Add the new student to the students array
    setStudents([...students, newStudent]);

    // Clear the form fields
    setName('');
    setAge('');
    setGrade('');
    setAddress('');
  };

  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Grade:
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {students.length > 0 && (
        <div>
          <h2>Student Information</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>{student.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
