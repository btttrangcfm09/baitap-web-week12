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

// Bài 3: Bước 1: Tạo API cập nhật học sinh(HTTP PUT)
router.put('/:id', async (req, res) => {
    try {
        // Find student by ID and update with new data
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Tạo API GET một học sinh theo ID (dùng trong EditStudent)
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default router;
