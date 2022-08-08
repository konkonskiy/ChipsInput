# Компонент chips-input для React

> [Деплой на gh-page](https://konkonskiy.github.io/chips-input)

## Описание работы

Компонент представляет собой текстовое поле, текст в котором разделен на чипсы. Можно создавать новые чипсы, удалять и
редактировать существующие.

Компонент реализован управляемым. В качестве входных параметров принимает следующие пропсы:

```sh
value <string> - строка, которую необходимо отобразить;
onChange <function>
```
Для демонтрации используется значение:

```sh
  const [value, setValue] = useState<string>('test,test2');
```

### Основные функцции

- При вводе знак , (запятая). В этом случае, введенный текст будет
собран в чипс, а курсор ввода текста окажется на следующей за ним
позиции. Символ запятой не отображается.

- В процессе набора текста, при печати знак ” (кавычка). Запятые,
обернутые в кавычки, не создают новый чипс и отображаются как текст.

- При вводе символа , (запятая) в качестве первого символа, ничего не
происходит и ввод игнорируется.

- Если в поле осталась незакрытая кавычка, то будет вывод ошибки "Закройте кавычки с двух сторон"

- Пользователь, я может нажать на текст внутри чипса и перейти к его
редактированию. Курсор, при этом, переходит в место нажатия, как при
клике на инпут.

- При вводе , (запятая) при редактировании чипса - запятая будет отображена как текст 
до момента выхода из режима редактирования. В случае, если при выходе из режима редактирования в тексте есть
запятая, чипс разбивается на отдельные чипсы, как если бы запятые были напечатаны сразу.

- Реализация удаления чипса нажатием на “крестик”.

- Чипс удаляется, если в нем не остается текста для отображения.

- Реализовано выделение нескольких чипсов мышкой. Для
этого, необходимо нажимать ЛКМ и перемещать мышь. Выделенные чипсы
подсвечиваются. Можно удалить выделенные чипсы. Для этого я нажимаю клавишу
delete, когда чипсы выделены.

- Можно удалить последний созданный чипс. Для этого, нажать
клавишу backspace (delete). При этом курсор должен находиться справа
от чипса.

### TODO 

- Реализовать перенос чипсов при переполнении

- Убрать подергивания в режиме реактирования чипса

- Ввести ограничения на кол-во чипсов и их размер


## Команды

```sh
$ npm run start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


```sh
$ npm run build 
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


```sh
$ npm run deploy 
```

Bulid the app in gh-page branch for production to the `build` folder.\
Push branch changes in git repository.\
Update gh-page

## Используемые библиотеки
 - [Create React App](https://github.com/facebook/create-react-app)
 - [react-gh-pages](https://github.com/gitname/react-gh-pages)