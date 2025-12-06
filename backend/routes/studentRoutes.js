// Bài 1: Bước 6: Tạo API GET danh sách học sinh 
import express from 'express';
import Student from '../models/Student.js'; // Nếu Student.js dùng export default

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Bài 2: Bước 1: Tạo API thêm học sinh (HTPP POST)
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) { 
        res.status(400).json({ error: err.message });
        console.log(err);
    }
});
export default router;
