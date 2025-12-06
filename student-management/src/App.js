

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddStudentForm from './component/AddStudentForm';


function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [adding, setAdding] = useState(false);


  const fetchStudents = () => {
    setLoading(true);
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Không thể kết nối đến server');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Bài 2: Bước 3: Gửi yêu cầu thêm học sinh từ Frontend
  const handleAddStudent = (student) => {
    setAdding(true);
    axios.post('http://localhost:5000/api/students', student)
      .then(() => {
        setShowAddForm(false);
        fetchStudents();
      })
      .catch(() => {
        alert('Thêm sinh viên thất bại!');
      })
      .finally(() => setAdding(false));
  };

  return (
    <div className="App">
      <h1>Danh sách học sinh</h1>
      <button onClick={() => setShowAddForm(true)} style={{marginBottom: 20, padding: '8px 16px', fontSize: 16}}>Thêm sinh viên</button>
      {showAddForm && (
        <AddStudentForm onAddStudent={handleAddStudent} />
      )}
      {adding && <p>Đang thêm sinh viên...</p>}
      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <table className="student-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Lớp</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={student._id || idx}>
                <td>{idx + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.className || student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
