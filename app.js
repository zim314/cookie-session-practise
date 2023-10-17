import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

//設置cookie簽名密碼
app.use(cookieParser('orange'));

//設置session格式
app.use(session({
    secret: "apple",
    resave: false,
    saveUninitialized: false, 
    cookie: {secure: false}, 
}))

app.get('/', (req, res) => {
    res.send('歡迎來到首頁');
})

app.get('/setCookie', (req, res) => {
    res.cookie('yourCookie', 'strawberry', {signed: true});
    res.send('已設置cookie');
})

app.get('/seeCookie', (req, res) => {
    res.send(`目前設置的cookie是: ${req.signedCookies.yourCookie}`);
})

app.get('/setSession', (req, res) => {
    req.session.testData = '我是測試內容';
    res.send('已在伺服器設置session, 並在瀏覽器設置session id');
})

app.get('/seeSession', (req, res) => {
    console.log(req.session)
    res.send('已在後端顯示session資料')
})

app.listen(3535, () => console.log('正在聆聽伺服器 port: 3535'));
