Создать таблицу со списком криптовалют (пример криптовалюты - Bitcoin). Каждая строка должна содержать следующую информацию: порядковый номер, иконка валюты, название валюты.

Получение списка криптовалют: https://www.****cryptocompare.****com/api/data/coinlist/
Всего в списке ~1500 разных видов криптовалют. Нет необходимости выводить их все. Можно взять первые 10-20 и отобразить результаты по ним (чтобы не рендерить бесконечную таблицу)

Для решения задачи необходимо использовать React / Redux.

Advanced (не обязательно)
К информации о валюте необходимо добавить ее стоимость в USD.
Пример получения стоимости Bitcoin https://min-api.****cryptocompare.***com/data/price?fsym=BTC&tsyms=USD