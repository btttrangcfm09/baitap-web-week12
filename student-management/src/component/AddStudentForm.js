// Bài 2: Bước 2: Tạo giao diện Form thêm học sinh
import React, { useState } from 'react';
import './AddStudentForm.css';

function AddStudentForm({ onAddStudent }) {
	const [form, setForm] = useState({
		name: '',
		age: '',
		class: '',
		email: ''
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onAddStudent) onAddStudent(form);
		setForm({ name: '', age: '', class: '', email: '' });
	};

	return (
		<form className="add-student-form" onSubmit={handleSubmit}>
			<h2>Thêm sinh viên mới</h2>
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
			<button type="submit" className="submit-btn">Thêm sinh viên</button>
		</form>
	);
}

export default AddStudentForm;
