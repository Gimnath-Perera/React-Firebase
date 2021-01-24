import { Button, Pane, Heading, TrashIcon, TickIcon } from 'evergreen-ui';

import firebase from '../utils/firebase';

export default function Task({ item }) {
  const onDeleteTask = () => {
    const toDoRef = firebase.database().ref('Todo').child(item.id);
    toDoRef.remove();
  };

  const onCompleteTask = () => {
    const toDoRef = firebase.database().ref('Todo').child(item.id);
    toDoRef.update({
      status: !item.status
    });
  };

  return (
    <Pane
      display='flex'
      padding={16}
      background='tint2'
      borderRadius={3}
      margin={24}
    >
      <Pane flex={1} alignItems='center' display='flex'>
        <Heading className={`${item.status ? 'task-text' : ''}`} size={600}>
          {item.status ? '💥' : '💣'} {item.task}
        </Heading>
      </Pane>
      <Pane>
        <Button
          onClick={onDeleteTask}
          marginRight={16}
          iconBefore={TrashIcon}
          intent='danger'
          appearance='primary'
        >
          Delete
        </Button>
        <Button
          onClick={onCompleteTask}
          marginRight={16}
          intent='success'
          appearance='primary'
          iconBefore={TickIcon}
        >
          Complete
        </Button>
      </Pane>
    </Pane>
  );
}
