# Запуск автотестов на сервере с Ubuntu (16.04)

1. Скачиваем проект с гита: `git clone https://github.com/Krygerik/nightwatch-learn.git`
2. Очищаем окружение: `sudo ./cm selenoid cleanup`
3. Создаем папку для конфига selenoid (Грязный хак. Иначе не работает T_T):
 `sudo mkdir /root/.aerokube/selenoid/`. Иначе старт упадет с ошибкой из-за отсутствия папки.
4. Запускаем контейнер с selenoid, который синхронизирует список браузеров с имеющимися контейнерами и докачает отсутствующие: `sudo ./cm selenoid start --browsers-json browsers.json`
5. Запуск тестов: `nodejs run.js -c nightwatch.selenoid.json`. (nodejs - особенности ubuntu при запуске node приложений)
6. После выполнения тестов выключаем selenoid контейнер: `sudo ./cm selenoid stop`

## Минусы
1. Присутствует хак с созданием папки для конфига. Может где-то есть правильный путь для синхронизации с browser.json
2. Ubuntu. Из-за нее некорректно работает `npm install` т.к. существуют библиотеки, которые при скачивании используют конструкцию `node ./install.js`. в Ubuntu вместо команды `node` надо использовать `nodejs`.
3. Нет возможности через ./cm удалить контейнеры, которые отсутствуют в browsers.json.

## Ссылки на инструменты
1. ./cm - https://aerokube.com/cm/latest/
2. selenoid - https://aerokube.com/selenoid/latest/