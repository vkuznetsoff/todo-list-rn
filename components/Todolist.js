import { useCallback, useState } from "react";
import { ACTIVE, ALL, COMPLITED } from "./utils/statuses";
// import Todo from "../Todo/Todo";
// import uniqid from "uniqid";

import arrow from "../assets/img/arrow.svg";

import { Image, TextInput, View } from "react-native";

import { styles } from "./styles";

const initState = [
  {
    id: "1",
    text: "Дизайн проекта",
    status: COMPLITED,
  },

  {
    id: "2",
    text: "Верстка",
    status: ACTIVE,
  },

  {
    id: "3",
    text: "Написание кода",
    status: ACTIVE,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(() => initState);

  const [group, setGroup] = useState(ALL); //active | complited | all

  const activeCount = todos.filter((todo) => todo.status === ACTIVE).length;
  const complitedCount = todos.filter(
    (todo) => todo.status === COMPLITED
  ).length;

  //Изменения статуса задания
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === COMPLITED ? ACTIVE : COMPLITED,
          };
        }
        return todo;
      })
    );
  };

  const updateTodoMemoized = useCallback((id) => updateTodo(id), [todos]);

  //Обработчики выбора группы для отображения списка задач
  //(Все, активные, завершенные)
  const displayAll = () => {
    setGroup(ALL);
  };

  const displayActive = () => {
    setGroup(ACTIVE);
  };

  const displayComplited = () => {
    setGroup(COMPLITED);
  };

  //Функция удаления завершенных заданий
  const clearComplited = () => {
    setTodos(todos.filter((todo) => todo.status !== COMPLITED));
  };

  //Фильтрация списка дел в зависимости от выбранной группы
  const filteredTodos = (list) =>
    group !== "all" ? list.filter((todo) => todo.status === group) : list;

  //Стейт для textarea
  const [text, setText] = useState("");

  //Добавление нового задания в стейт
  const addTodo = (text) => {
    setTodos([...todos, { id: uniqid(), text: text.trim(), status: ACTIVE }]);
    setText("");
  };

  //Добавление нового задание по нажатию изображения (стрелки-вниз)
  const inputImg = () => {
    if (text.trim()) {
      addTodo(text);
    }
  };

  //Добавление нового задание по нажатию Enter
  const inputTextarea = (e) => {
    if (e.key === "Enter" && text.trim()) {
      addTodo(text);
    }
  };

  return (
    <View style={styles.todolist}>
      <View style={styles.header}>Todo List</View>
      <View>
        <Image
          // className="content_textarea__img"
          source={arrow}
          onClick={inputImg}
        />
        <TextInput
          placeholder="What needs to be done?"
          value={text}
          onChange={setText}

          // onKeyDown={(e) => inputTextarea(e)}
        />
      </View>

      {/* <View className="todolist__content">
//         {filteredTodos(todos).map((todo) => (
//           <Todo key={todo.id} todo={todo} updateTodo={updateTodoMemoized} />
//         ))}

//         {complitedCount === 0 && group === COMPLITED ? (
//           <View className="content__comment">Нет завершенных заданий</View>
//         ) : undefined}
//         {activeCount === 0 && group === ACTIVE ? (
//           <View className="content__comment">Нет активных заданий</View>
//         ) : undefined}
//         {todos.length === 0 && group === ALL ? (
//           <View className="content__comment">Нет заданий</View>
//         ) : undefined}
//       </View>

//       {todos ? (
//         <View className="todolist__bottom">
//           <View className="bottom__leftitems">
//             <View> Активных:</View>
//             <View className="bottom__leftitems_count">&nbsp;{activeCount}</View>
//           </View>

//           <View className="bottom__groups">
//             <View
//               className="groups__item"
//               style={group === ALL ? styles.active : undefined}
//               onClick={displayAll}
//             >
//               Все
//             </View>
//             <View
//               className="groups__item"
//               style={group === ACTIVE ? styles.active : undefined}
//               onClick={displayActive}
//             >
//               Активные
//             </View>
//             <View
//               className="groups__item"
//               style={group === COMPLITED ? styles.active : undefined}
//               onClick={displayComplited}
//             >
//               Завершенные
//             </View>
//           </View>

//           <View className="bottom__clear" onClick={clearComplited}>
//             <View className="bottom__clear__text">Удалить завершенные</View>
//           </View>
//         </View>
//       ) : undefined} */}
    </View>
  );
};

export default TodoList;
