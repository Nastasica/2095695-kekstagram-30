import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';
// массив строк, содержащий различные комментарии,
// которые могут быть случайно выбраны и использованы при создании комментариев к фотографиям.
const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив строк, содержащий описания фотографий.
const descriptions = [
  'Утренний кофе в любимой кофейне. #кофе #утро #кофейня #вкусно #пробуждение',
  'Прогулка в парке под лучами солнца. #прогулка #парк #солнце #природа #весна',
  'Закат над океаном. #закат #океан #пейзаж #красота #путешествие',
  'Семейный ужин с самодельными бургерами. #ужин #бургеры #семья #вкусно #вечер',
  'Путешествие в горы на выходные. #горы #путешествие #приключения #природа',
  'Романтический ужин на крыше. #романтика #крыша #ужин #вечер #звезды',
  'Встреча заката на вершине горы. #закат #горы #путешествие #природа #красота',
  'Колоритный рынок в местной деревне. #рынок #местнаякухня #путешествие #культура',
  'Учебная сессия в полном разгаре. #учеба #студенты #сессия #библиотека #знания',
  'Забавные игры с детьми во дворе. #дети #игры #двор #веселье #семья',
  'Вдохновляющее занятие искусством. #творчество #искусство #художество #вдохновение',
];
// Массив строк с именами, которые могут быть использованы для создания случайных имен пользователей.
const names = [
  'Александр',
  'Дмитрий',
  'Анна',
  'Иван',
  'Юлия',
  'Сергей',
  'Светлана',
  'Владимир',
  'Павел',
  'Антон',
];

// Эта функция генерирует случайное сообщение, состоящее из одного или двух случайных комментариев из commentLines
const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');

// Функция, создающая объект комментария с уникальным идентификатором, случайным аватаром,
// сгенерированным сообщением и случайным именем пользователя
const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

// Функция, создающая объект фотографии с уникальным идентификатором,
// URL изображения, описанием, случайным количеством лайков и массивом комментариев
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, 6) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

// Функция, которая создает массив из 25 фотографий, используя функцию createPicture для каждой из них.
const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };
