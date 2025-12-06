import React from 'react';
import { Link } from 'react-router-dom';
import './StudentTable.css';

function StudentTable({ students }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Lớp</th>
          <th>Thao tác </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, idx) => (
          <tr key={student._id || idx}>
            <td>{idx + 1}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.className || student.class}</td>
            <td>
              <Link to={`/edit/${student._id}`} className="edit-link">Sửa</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
