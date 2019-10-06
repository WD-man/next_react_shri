# React

Скачайте и установите зависимости

При разработке использовлась

Node.js версии **12.6.0**

Для работы обязательно наличие запущенного сервера  
 [Сылка на репозиторий сервера](https://github.com/WD-man/git_server).  
 Для корректной работы тестов, не следует переназначать путь до корневой директории

---

Production версия приложения запускается командой:

`npm run start`

Сервер должен запуститься на порту **8076**

[Ссылка](http://localhost:8077)

`/` - страница со списком всех существующих репозиториев

`/directories` - роут для страниц содеримого папок. Попытка  
 запуска без параметров приведет к ошибке, Поэтому лучше переходить  
 по ссылкам.

`/files` - роут для страниц содержимого файлов. Попытка вызова без параметров  
 также приведет к ошибке

Нет роутов к файлам по прямому пути потому что, по моему мнению эти,  
 файлы не должны индексироваться и поэтому не требуют прямых ссылок.

## Тесты

Настройка окружения Hermione:

Для запуска тестов должен быть chrome webdriver.

`npm i selenium-standalone --global`

`selenium-standalone install`

`npm i hermione`

В отдельной вкладке терминала:

`selenium-standalone start`

Запуск gui hermione

`npm run hermione`
