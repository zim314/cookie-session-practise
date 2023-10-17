import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

//設置簽名密碼
app.use(cookieParser('orange'));


app.get('/', (req, res) => {
    res.send('歡迎來到首頁');
})

app.get('/setCookie', (req, res) => {
    res.cookie('yourCookie', 'strawberry', {signed: true});
    res.send('已設置cookie');
})

app.get('/seeCookie', (req, res) => {
    res.send(`目前設置的Cookie是: ${req.signedCookies.yourCookie}`);
})

app.listen(3535, () => console.log('正在聆聽伺服器 port: 3535'));