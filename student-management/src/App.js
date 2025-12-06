
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Không thể kết nối đến server');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Danh sách học sinh</h1>
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
                <td>{student.className}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
