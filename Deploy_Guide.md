1. Удалить лишние папки .git из бакенда и фронтенда
2. Залить код в репозиторий на git
3. Удалить лишние пакеты из бакенда (babel, react и т.д.)
4. Сделать билд фронтенда у себя на локалхосте `cd frontend && npm run build`
5. Проверить работоспособность production билда (зайти на localhost:4000)
6. Прописать роут '*', который будет на все необработанные url отдавать index.html (вставляется после всех остальных роутов)

```
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
```

7. database.json должен выглядеть таким образом

```
{
  "development": {
    "use_env_variable": "DATABASE_URL"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized" : false
      }
    }
  }
}
```

8. Нужно использовать process.env.PORT
9. Создать файл `package.json` (npm init -y) в корне и записать в него скрипты

```
"postinstall": "cd backend && npm i && npx sequelize db:migrate && cd ../frontend && npm i && npm run build",
"start": "cd backend && npm start",
```
