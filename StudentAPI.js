const express = require('express');
const app = express();
const port = 3000;

// Sample student data
const students = [
  {
    "id": "1",
    "name": "Susheel",
    "age": 20,
    "marks": 90,
    "Subject": "React",
    "email": "psusheel33@gmail.com"
  },
  {
    "id": "2",
    "name": "Rahul",
    "age": 21,
    "marks": 85,
    "Subject": "Angular",
    "email": "rahul64@gmail.com"
  },
  {
    "id": "3",
    "name": "Rohan",
    "age": 22,
    "marks": 95,
    "Subject": "Vue",
    "email": "rohan232@gmail.com"
  },
  {
    "id": "4",
    "name": "Simran",
    "age": 23,
    "marks": 80,
    "Subject": "Math",
    "email": "simran242@gmail.com"
  },
  {
    "id": "5",
    "name": "Priya",
    "age": 24,
    "marks": 92,
    "Subject": "Node",
    "email": "priya4343@gmail.com"
  },
  {
    "id": "6",
    "name": "Simmi Sharma",
    "age": 20,
    "marks": 90,
    "Subject": "React",
    "email": "simmi4@gmail.com"
  },
  {
    "id": "7",
    "name": "Avnish",
    "age": 26,
    "marks": 98,
    "Subject": "SQL",
    "email": "avnish9083@gmail.com"
  },
  {
    "id": "8",
    "name": "Avnish Mishra",
    "age": 26,
    "marks": 98,
    "Subject": "MySQL",
    "email": "psusheel33@gmail.com"
  },
  {
    "id": "9",
    "name": "Bhupesh",
    "age": 26,
    "marks": 98,
    "Subject": "PostSQL",
    "email": "bhupesh33@gmail.com"
  },
  {
    "id": "10",
    "name": "Amit",
    "age": 26,
    "marks": 98,
    "Subject": "JavaScript",
    "email": "amit113@gmail.com"
  }
];

// Routes for API

// Get all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Get a specific student by ID
app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// Add a new student
app.post('/api/students', express.json(), (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Update an existing student
app.put('/api/students/:id', express.json(), (req, res) => {
  const studentIndex = students.findIndex(s => s.id === req.params.id);
  if (studentIndex !== -1) {
    students[studentIndex] = { ...students[studentIndex], ...req.body };
    res.json(students[studentIndex]);
  } else {
    res.status(404).send('Student not found');
  }
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === req.params.id);
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
