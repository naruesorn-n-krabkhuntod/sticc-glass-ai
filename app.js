
const PORT = 3000;
const express = require('express');
const { SerialPort } = require('serialport');
const path = require('path');
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
const app = express();


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res)=>{
        res.render('index');
})
app.get('/orange', (req,res)=>{
  res.render('detect/lime');
})

app.get('/send', (req, res) => {
  const message = req.query.message
  if (!message) return res.status(400).json({ error: 'Message is required' });

  port.write(`${message}\n`, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to send message' });
    res.json({ success: true, message: `Message "${message}" sent` });
  });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
