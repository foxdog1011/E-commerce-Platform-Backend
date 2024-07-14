const express = require('express'); //導入 express()模塊，用於構建web應用程序的node.js 框架，提供一些功能和API
const app = express();// 調用express 創建實例，並將其賦值給常數'app'， 這個 app 代表 web 應用
const port = 3000; // 
const bodyparser = requier('body-parse'); //導入body-parser模塊，用於解析HTTP請求的主體部分，並將其解析為json格式
const bcrypt = require('bcrypt'); //導入bcrypt模塊，用於對密碼進行加密和解密
const users = require('./moels/users'); //導入users模塊，用於操作用戶數據庫
const jwt = require('jsonwebtoken');


app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.listen(port, () =>{
    console.log('Server is running at http://localhost:${port}');
});

app.use(bodyparser.json()); //使用body-parser模塊，解析HTTP請求的主體部分，並將其解析為json格式

app.post('/api/register', async (req, res) =>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword};
    users.push(user);
    res.status(201).send('User registered');
}); // 註冊用戶

app.post('/api/login', async (req, res) =>{
    const {username, password} = req.body;
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userrname: user.username}, 'secret_key', {expiresIn: '1h'});
        res.json({token});
    } else{
        res.status(401).send('Invaild credentials');
    }
    }); // 登錄用戶
    