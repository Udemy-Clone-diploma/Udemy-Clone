# Backend — Udemy Clone

Backend проекта на **Django + Django REST Framework**
Конфигурация переменных окружения через **python-decouple**.

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
cd UDEMY-CLONE/Backend
```

## 2. Создание и активация виртуального окружения

### Создать виртуальное окружение

```bash
python3 -m venv venv
```

### Активировать виртуальное окружение

```bash
source venv/bin/activate
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
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=127.0.0.1,localhost
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

# Python

**pycache**/
*.py[cod]
*.pyo
*.pyd

# Virtual environment

venv/
.env/

# Environment variables

.env

# Django

db.sqlite3
*.log
media/
staticfiles/

# Migrations cache

**/**pycache**/

# IDE

.vscode/
.idea/

# OS files

.DS_Store
Thumbs.db

# Pytest / coverage

.pytest_cache/
.coverage
htmlcov/

# mypy

.mypy_cache/

# Build

dist/
build/
*.egg-info/

# Docker

*.pid
