# 我的事項清單

![Index page about Restaurant List](./public/image/home.png)

## 介紹

可以新增、編輯、刪除、完成自己的待辦事項。

### 功能

- 查看所有待辦事項
![Index page about Restaurant List](./public/image/home.png)
- 瀏覽待辦事項的詳細資訊
![Index page about Restaurant List](./public/image/detail.png)
- 新增待辦事項
![Index page about Restaurant List](./public/image/create.png)
- 編輯待辦事項
![Index page about Restaurant List](./public/image/edit.png)
- 刪除待辦事項

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install // 安裝套件
   ```

4. 設定 MongoDB 環境變數

   ```
   set MONGODB_URI="你的MongoDB連線字串" // for Windows cmd
   export MONGODB_URI="你的MongoDB連線字串" // for bash (MacOS bash terminal and Git bash for Windows)
   ```

5. 寫入種子資料

   ```bash
   npm run seed
   ```

6. 開啟程式

   ```bash
   npm run start
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Restaurant List is now listening on http://localhost:3000
   ```

   請至 http://localhost:3000 開啟網站

8. 若欲中斷伺服器連線，請按

   ```bash
   ctrl + c
   ```


## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 4.0.2
- MongoDB
- mongoose 5.13.15
- method-override 3.0.0
