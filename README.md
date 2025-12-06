# Bài Tập Web - Week 12
## Hệ thống Quản lý Sinh viên (Student Management System)

Ứng dụng web full-stack quản lý danh sách sinh viên với các chức năng CRUD, tìm kiếm và sắp xếp.

## 🎯 Tính năng

### Bài 1: Hiển thị danh sách sinh viên
- ✅ Kết nối backend với MongoDB
- ✅ Tạo API GET `/api/students` để lấy danh sách
- ✅ Hiển thị danh sách sinh viên dưới dạng bảng

### Bài 2: Thêm sinh viên mới
- ✅ Tạo form nhập thông tin (tên, tuổi, lớp, email)
- ✅ API POST `/api/students` để thêm sinh viên
- ✅ Cập nhật danh sách sau khi thêm thành công

### Bài 3: Chỉnh sửa thông tin sinh viên
- ✅ Nút "Sửa" trên mỗi hàng trong bảng
- ✅ Trang chỉnh sửa với form điền sẵn thông tin
- ✅ API PUT `/api/students/:id` để cập nhật
- ✅ Tự động refresh danh sách sau khi sửa

### Bài 4: Xóa sinh viên
- ✅ Nút "Xóa" với xác nhận trước khi xóa
- ✅ API DELETE `/api/students/:id`
- ✅ Cập nhật danh sách sau khi xóa thành công

### Bài 5: Tìm kiếm sinh viên
- ✅ Ô tìm kiếm theo tên
- ✅ Lọc danh sách real-time (client-side)
- ✅ Không phân biệt hoa thường

### Bài 6: Sắp xếp danh sách
- ✅ Nút toggle sắp xếp theo tên (A→Z / Z→A)
- ✅ Kết hợp với tìm kiếm
- ✅ Sắp xếp không thay đổi dữ liệu gốc

## 🛠 Công nghệ sử dụng

### Backend
- **Node.js** với Express.js
- **MongoDB** với Mongoose ODM
- **Docker** để chạy MongoDB
- **CORS** để xử lý cross-origin requests

### Frontend
- **React 19** với Hooks
- **React Router DOM** cho routing
- **Axios** để gọi API
- **CSS** tùy chỉnh cho giao diện

## 📁 Cấu trúc thư mục

```
baitap-web-week12/
├── backend/
│   ├── index.js                 # Entry point của server
│   ├── models/
│   │   └── Student.js           # Schema MongoDB cho sinh viên
│   ├── routes/
│   │   └── studentRoutes.js     # Định nghĩa API routes
│   ├── docker-compose.yml       # Cấu hình MongoDB container
│   └── package.json
│
└── student-management/
    ├── src/
    │   ├── App.js               # Component chính với routing
    │   ├── App.css              # CSS cho App
    │   ├── component/
    │   │   ├── AddStudentForm.js      # Form thêm sinh viên
    │   │   ├── AddStudentForm.css
    │   │   ├── EditStudent.js         # Trang chỉnh sửa sinh viên
    │   │   ├── EditStudent.css
    │   │   ├── StudentTable.js        # Bảng danh sách sinh viên
    │   │   └── StudentTable.css
    │   └── index.js
    └── package.json
```

## 🚀 Cài đặt và Chạy ứng dụng

### Yêu cầu
- Node.js (v14 trở lên)
- Docker Desktop (để chạy MongoDB)
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone https://github.com/btttrangcfm09/baitap-web-week12.git
cd baitap-web-week12
```

### Bước 2: Cài đặt Backend
```bash
cd backend
npm install
```

### Bước 3: Khởi động MongoDB với Docker
```bash
docker-compose up -d
```

### Bước 4: Chạy Backend Server
```bash
node index.js
```
Server sẽ chạy tại `http://localhost:5000`

### Bước 5: Cài đặt Frontend
```bash
cd ../student-management
npm install
```

### Bước 6: Chạy React App
```bash
npm start
```
Ứng dụng sẽ mở tại `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/students` | Lấy danh sách tất cả sinh viên |
| GET | `/api/students/:id` | Lấy thông tin một sinh viên |
| POST | `/api/students` | Thêm sinh viên mới |
| PUT | `/api/students/:id` | Cập nhật thông tin sinh viên |
| DELETE | `/api/students/:id` | Xóa sinh viên |

### Ví dụ Request Body (POST/PUT)
```json
{
  "name": "Nguyễn Văn A",
  "age": 20,
  "class": "CNTT K15",
  "email": "nguyenvana@example.com"
}
```

## 🎨 Giao diện

### Trang chủ - Danh sách sinh viên
- Bảng hiển thị đầy đủ thông tin
- Ô tìm kiếm và nút sắp xếp
- Nút "Sửa" và "Xóa" trên mỗi hàng

### Trang thêm sinh viên
- Form nhập liệu với validation
- Tự động quay về trang chủ sau khi thêm

### Trang chỉnh sửa
- Form điền sẵn thông tin hiện tại
- Nút "Cập nhật" và "Hủy"
- Tự động refresh danh sách sau khi cập nhật

## 🔍 Hướng dẫn sử dụng

1. **Xem danh sách**: Truy cập trang chủ để xem tất cả sinh viên
2. **Thêm sinh viên**: Click "Thêm sinh viên" → Điền form → Submit
3. **Tìm kiếm**: Gõ tên vào ô tìm kiếm để lọc danh sách
4. **Sắp xếp**: Click nút "Sắp xếp theo tên" để đổi thứ tự
5. **Sửa thông tin**: Click "Sửa" → Chỉnh sửa → "Cập nhật"
6. **Xóa sinh viên**: Click "Xóa" → Xác nhận

## 🐛 Xử lý lỗi

- Nếu MongoDB chưa chạy: `docker-compose up -d`
- Nếu port 5000 đã được sử dụng: Thay đổi PORT trong `backend/index.js`
- Nếu lỗi CORS: Kiểm tra cấu hình CORS trong backend
- Nếu không kết nối được API: Kiểm tra URL trong các file component (phải là `http://localhost:5000`)

## 📝 Ghi chú

- Dữ liệu được lưu trong MongoDB container, sẽ mất khi xóa container
- Tìm kiếm và sắp xếp được xử lý trên client-side (phù hợp với dữ liệu nhỏ)
- Các route được quản lý bởi React Router DOM

## 👨‍💻 Tác giả

**btttrangcfm09**
- GitHub: [@btttrangcfm09](https://github.com/btttrangcfm09)

## 📄 License

Dự án này được tạo cho mục đích học tập.
