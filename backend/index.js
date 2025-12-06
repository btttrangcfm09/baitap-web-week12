// Bài 1: Bước 2: Cài đặt dự án Backend (Express)
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = 5000;

// Middleware cho phép frontend truy cập API
app.use(cors());

// Middleware để parse JSON request
app.use(express.json()); // Hoặc: app.use(bodyParser.json());

// Ví dụ route đơn giản
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Sử dụng các route cho Student
app.use('/api/students', studentRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Bài 1: Bước 4 - Kết nối đến MongoDB với Mongoose
// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/student_db') 
.then(() => console.log("Đã kết nối MongoDB thành công")) 
.catch(err => console.error("Lỗi kết nối MongoDB:", err)); 
