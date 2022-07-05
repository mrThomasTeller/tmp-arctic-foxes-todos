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

10. Зайти на heroku, создать приложение
11. Подключить postgres к heroku (Resource -> postgress add-on)
12. Идём в Deploy, коннектим github-репозиторий, разрешаем автоматические билды (Enable Automatic Deploys), делаем билд вручную (Deploy Brunch)
13. Установить heroku-cli (https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
14. Пройти аутентификацию heroku-cli (`heroku auth:2fa` во командной строке)
15. Засеять БД (<app-name> - имя вашего приложения на heroku). Используй такой синтаксис если тебе понадобиться запускать команды в командной строке на сервере heroku.

```
heroku run "cd backend && npx sequelize db:seed:all" -a <app-name>
```

16. Готово! Теперь каждый раз после пуша в выбранную ветку деплой будет происходить автоматически.
