import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('hellow world!'));

app.listen(4000, () => console.log('server works on port 4000'));
