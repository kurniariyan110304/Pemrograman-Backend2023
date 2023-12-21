// TODO 3: Import data students dari folder data/students.js
const students = require('../data/students');

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    const data = {
      "message": "Menampilkan semua students",
      "data": students
    };

    res.json(data);
  }

  store(req, res) {
    // Mendapatkan data dari body request
    const { name, age, grade } = req.body;

    // Membuat objek baru untuk siswa yang akan ditambahkan
    const newStudent = {
      id: students.length + 1,
      name,
      age,
      grade
    };

    // Menambahkan siswa baru ke dalam array students
    students.push(newStudent);

    res.send("Menambahkan data students");
  }

  update(req, res) {
    const { id } = req.params;
    // Mendapatkan data dari body request
    const { name, age, grade } = req.body;

    // Mencari siswa dengan id yang sesuai
    const student = students.find(student => student.id === parseInt(id));

    if (student) {
      // Mengupdate data siswa jika ditemukan
      student.name = name || student.name;
      student.age = age || student.age;
      student.grade = grade || student.grade;

      res.send(`Mengedit student id ${id}`);
    } else {
      res.status(404).send("Student not found");
    }
  }

  destroy(req, res) {
    const { id } = req.params;

    // Mencari indeks siswa dengan id yang sesuai
    const index = students.findIndex(student => student.id === parseInt(id));

    if (index !== -1) {
      // Menghapus siswa jika ditemukan
      students.splice(index, 1);
      res.send(`Menghapus student id ${id}`);
    } else {
      res.status(404).send("Student not found");
    }
  }
}

// Membuat object StudentController
const studentController = new StudentController();

// Export object StudentController
module.exports = studentController;
