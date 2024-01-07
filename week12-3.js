//1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
let alphabet="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
//2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`.
let min=0;
let max=32;
let index1=Math.floor(Math.random() * (max - min + 1)) + min;
let index2=Math.floor(Math.random() * (max - min + 1)) + min;
let index3=Math.floor(Math.random() * (max - min + 1)) + min;
let index4=Math.floor(Math.random() * (max - min + 1)) + min;

//3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
let str=alphabet[index1]+alphabet[index2]+alphabet[index3]+alphabet[index4];
console.log(str);
//4. Выведи полученное случайное слово на экран, чтобы проверить результат.
alert(str);

