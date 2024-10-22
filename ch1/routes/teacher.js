import express from 'express';
const router = express.Router();
router.get('/list', (req, res) => {
  res.send('Teacher Show');
});
router.post('/create', (req, res) => {
    res.send('Teacher created');
  });
  router.delete('/delete', (req, res) => {
    res.send('Teacher deleted');
  });
  router.put('/update', (req, res) => {
    res.send('Teacher updated');
  });
  export default router;
