import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AddStudentForm from './component/AddStudentForm';
import StudentTable from './component/StudentTable';
import EditStudent from './component/EditStudent';

function HomePage({ students, loading, error, fetchStudents }) {
  const location = useLocation();

  useEffect(() => {
    fetchStudents();
  }, [location.key]);

  return (
    <div>
      <h1>Danh sách học sinh</h1>
      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <StudentTable students={students} onDelete={fetchStudents} />}
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        fetchStudents();
      })
      .catch(() => {
        alert('Thêm sinh viên thất bại!');
      })
      .finally(() => setAdding(false));
  };

  return (
    <Router>
      <div className="App">
        <nav style={{marginBottom: 24}}>
          <Link to="/" style={{marginRight: 16}}>Danh sách học sinh</Link>
          <Link to="/add">Thêm sinh viên</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <HomePage 
              students={students} 
              loading={loading} 
              error={error} 
              fetchStudents={fetchStudents}
            />
          } />
          <Route path="/add" element={
            <div>
              <h1>Thêm sinh viên</h1>
              <AddStudentForm onAddStudent={handleAddStudent} />
              {adding && <p>Đang thêm sinh viên...</p>}
            </div>
          } />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
