import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send('起動成功')
})

app.listen(3535, () => {
    console.log('正在聆聽伺服器 port: 3535');
})