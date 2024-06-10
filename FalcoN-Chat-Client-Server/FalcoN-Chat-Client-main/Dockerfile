# Визначаємо базовий образ для етапу збірки
FROM node:latest

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json (якщо він існує)
COPY ./package*.json ./

# Встановлюємо залежності проекту

RUN npm install


# Копіюємо вихідні файли проекту в контейнер
COPY ./. .

# Вказуємо порт, який буде слухати додаток
EXPOSE 3000

# Збираємо додаток для продакшну
RUN npm run build

# Запускаємо npm
CMD npm run start