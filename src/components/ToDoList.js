import React, { useEffect, useState } from 'react';
import { Pane } from 'evergreen-ui';
import firebase from '../utils/firebase';
import Task from './Task';

export default function ToDoList() {
  const [taskList, setTaskList] = useState();

  useEffect(() => {
    const toDoRef = firebase.database().ref('Todo');

    toDoRef.on('value', (item) => {
      const itemList = item.val();
      const todoList = [];

      for (let id in itemList) {
        todoList.push({ id, ...itemList[id] });
      }

      setTaskList(todoList);
    });
  }, []);

  return (
    <Pane>
      {taskList ? (
        taskList.map((task, index) => <Task item={task} key={index} />)
      ) : (
        <Pane
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
        >
          <lottie-player
            src='https://assets5.lottiefiles.com/packages/lf20_23wxziun.json'
            background='transparent'
            speed='1'
            style={{ width: 300, height: 300 }}
            loop
            autoplay
          ></lottie-player>
        </Pane>
      )}
    </Pane>
  );
}
