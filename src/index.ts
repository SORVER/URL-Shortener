// routes/index.js
// const express = require('express');
// const router = express.Router();

// // Example route
// router.get('/', (req, res) => {
//   res.json({ message: 'API is working!' });
// });


// module.exports = router;
// convert to TypeScript
import express from 'express';
import router from './routes';

import { config } from 'dotenv';
config();
const app = express();
app.use(express.json());
app.use('/api', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;