const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require('./server/routes/pirate.route')(app);
app.listen(8000, () => {
  console.log('listening on port 8000')
}) 