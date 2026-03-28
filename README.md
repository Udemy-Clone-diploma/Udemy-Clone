# Udemy Clone

# 1.Backend:
## Требования

Перед запуском убедитесь, что у вас установлены:

* Python 3.11+
* pip
* git

## Проверка версий

```bash
python3 --version
pip3 --version
git --version
```

## 1. Клонирование репозитория

```bash
git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ>
cd ./backend
```

## 2. Создание и активация виртуального окружения

### Создать виртуальное окружение

```bash
python3 -m venv venv
```

### Активировать виртуальное окружение

```bash
./venv/Scripts/activate
```

После активации в терминале должно появиться:

```bash
(venv)
```

## 3. Установка зависимостей

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

## 4. Создание `.env` из `.env.example`

Скопируйте шаблон окружения:

```bash
cp .env.example .env
```

После этого откройте `.env` и заполните своими значениями.

Например:

```bash
nano .env
```

или откройте файл в VS Code.

## 5. Пример `.env`
```env
DEBUG=True
SECRET_KEY=your-secret-key - взять из файла backend/config/settings.py - в начале где-то будет строка с кодом, скопировать его и без кавычек и пробелов перед и после равно вставить в .env  
ALLOWED_HOSTS=127.0.0.1,localhost - пока не прописываем
```

## 6. Применение миграций

```bash
python manage.py migrate
```

## 7. Создание суперпользователя (опционально)

```bash
python manage.py createsuperuser
```

## 8. Запуск проекта

```bash
python manage.py runserver
```

Сервер будет доступен по адресу:

```text
http://127.0.0.1:8000/
```

## 9. Деактивация окружения

```bash
deactivate
```

## Быстрый старт

```bash
git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ>
cd UDEMY-CLONE/Backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

## Важно

* `.env` не должен попадать в git
* в репозитории хранится только `.env.example`
* каждый разработчик создаёт свой `.env`

## Используемые технологии

* Django
* Django REST Framework
* python-decouple


## Файл .gitignore
```
#Python

**pycache**/
*.py[cod]
*.pyo
*.pyd

#Virtual environment

venv/

#Environment variables

.env

#Django

db.sqlite3
*.log
media/
staticfiles/

#IDE

.vscode/
.idea/

#OS files

.DS_Store
Thumbs.db

#Pytest / coverage

.pytest_cache/
.coverage
htmlcov/

#mypy

.mypy_cache/

#Build

dist/
build/
*.egg-info/

#Docker

*.pid
```

2. Frontend
Требования

Перед запуском убедитесь, что установлены:
```bash
Node.js 20+
npm
```
Проверка версий
```bash
node -v
npm -v
```

Создание frontend проекта

Из корня проекта выполните:
```bash
npx create-next-app@latest frontend
При создании выбрать:
Yes, use recommended defaults
```

Это автоматически подключит:
```cmd
TypeScript
ESLint
Tailwind CSS
App Router
```
После создания перейти в frontend
```cmd
cd frontend
```
Запуск frontend
```cmd
npm run dev
```
Frontend будет доступен по адресу:

http://localhost:3000
 
### Важно

##### node_modules не коммитится в git.

### После pull каждый разработчик должен выполнить:
```bash
cd frontend
npm install
```
 
