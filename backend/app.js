require('dotenv').config();

const express = require('express');
const path = require('path');
const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const taskApiRouter = require('./routes/api/tasks.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use('/api/tasks', taskApiRouter); // роутер списка задач (все url начинаются с /tasks)

//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
//});

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
