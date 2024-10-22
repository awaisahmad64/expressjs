import express from 'express';
import stud from './routes/student.js';
import tea from './routes/teacher.js';
const app = express();
const port = process.env.PORT || '3000';
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/student', stud);
app.use('/api/teacher', tea);
app.listen(port, () => {
  console.log(`Server is runing on port: http://localhost:${port}`);
});
