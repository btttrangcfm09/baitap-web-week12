// Bài 3: Bước 2: Tạo giao diện và chức năng chỉnh sửa thông tin sinh viên
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditStudent.css';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    class: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => {
        setForm({
          name: res.data.name || '',
          age: res.data.age || '',
          class: res.data.class || res.data.className || '',
          email: res.data.email || ''
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Lỗi khi lấy thông tin sinh viên:', err);
        alert('Không thể tải thông tin sinh viên!');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdating(true);
    axios.put(`http://localhost:5000/api/students/${id}`, {
      name: form.name,
      age: Number(form.age),
      class: form.class,
      email: form.email
    })
      .then(res => {
        console.log('Đã cập nhật:', res.data);
        alert('Cập nhật sinh viên thành công!');
        navigate('/');
      })
      .catch(err => {
        console.error('Lỗi khi cập nhật:', err);
        alert('Cập nhật sinh viên thất bại!');
      })
      .finally(() => setUpdating(false));
  };

  if (loading) {
    return <p>Đang tải thông tin sinh viên...</p>;
  }

  return (
    <form className="edit-student-form" onSubmit={handleUpdate}>
      <h2>Chỉnh sửa thông tin sinh viên</h2>
      <div className="form-group">
        <label htmlFor="name">Tên:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="age">Tuổi:</label>
        <input type="number" id="age" name="age" value={form.age} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="class">Lớp:</label>
        <input type="text" id="class" name="class" value={form.class} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-btn" disabled={updating}>
        {updating ? 'Đang cập nhật...' : 'Cập nhật'}
      </button>
      <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
        Hủy
      </button>
    </form>
  );
}

export default EditStudent;
