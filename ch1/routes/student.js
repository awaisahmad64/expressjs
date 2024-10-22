import express from 'express';
const router = express.Router();
router.get('/list', (req, res) => {
  res.send('Student Show');
});
router.post('/create', (req, res) => {
    res.send('Student created');
  });
  router.delete('/delete', (req, res) => {
    res.send('Student deleted');
  });
  router.put('/update', (req, res) => {
    res.send('Student updated');
  });
  export default router;
