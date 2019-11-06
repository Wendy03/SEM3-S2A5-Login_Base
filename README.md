# Account Login

##### 此專案簡單帳號密碼檢測，測試成功顯示登入頁面，錯誤顯示錯誤訊息

## Installing

##### 環境

```
- node.js v-10.15.0
- nodemon
- Express
- Express-Handlebars
- body-parse

```

##### 1.開啟終端機到存放專案本機位置並執行:

`git clone https://github.com/Wendy03/SEM3-S2A5-Login_Base.git`

##### 2.初始

```
1.切換目錄到專案: cd SEM3-S2A5-Login_Base
2.安裝套件: npm install
```

##### 3.執行程式

`nodemon app.js`

## 主要功能

##### 1.使用者輸入帳密：email & password

##### 2.如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"

##### 3.如果 username + password 組合正確，使用者就能成功登入，並導向自己的 welcome page

## 測試帳密

| First Name | email               | email            |
| ---------- | ------------------- | ---------------- |
| Tony       | tony@stark.com      | iamironman       |
| Steve      | captain@hotmail.com | icandothisallday |
| Peter      | peter@parker.com    | enajyram         |
| Natasha    | natasha@gamil.com   | \*parol#@\$!     |
| Nick       | nick@shield.com     | password         |

######

![image](https://github.com/Wendy03/SEM3-S2A5-Login_Base/blob/master/public/img/S2A5.PNG)
