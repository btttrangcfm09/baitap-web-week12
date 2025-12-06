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

export default router;
