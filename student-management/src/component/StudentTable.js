import React from 'react';
import { Link } from 'react-router-dom';
import './StudentTable.css';
import axios from 'axios';

function StudentTable({ students, onDelete }) {
  // Bài 4: Tích hợp nút "Xóa" trên giao diện
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
      axios.delete(`http://localhost:5000/api/students/${id}`)
        .then(() => {
          alert('Xóa sinh viên thành công!');
          if (onDelete) onDelete();
        })
        .catch(() => {
          alert('Xóa sinh viên thất bại!');
        });
    }
  };

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
        {/* Bài 6: Hiển thị danh sách đã được lọc và sắp xếp từ parent component */}
        {students.map((student, idx) => (
          <tr key={student._id || idx}>
            <td>{idx + 1}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.className || student.class}</td>
            <td>
              <Link to={`/edit/${student._id}`} className="edit-link">Sửa</Link>
              <button onClick={() => handleDelete(student._id)} className="delete-btn">Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
