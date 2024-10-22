import express from 'express';
import studentList from './routes/student.js';
const app = express();
const port = process.env.PORT || '3000';
app.get('/', (req, res) => {
  res.send('Hello World');
});
// load student routes
// method path and route
app.use('/v1', studentList);
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
