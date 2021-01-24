import { TextInput, Button, Pane } from 'evergreen-ui';
import { useState } from 'react';
import firebase from '../utils/firebase';
export default function Form() {
  const [task, setTask] = useState('');

  const validateTask = () => {
    if (task.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = () => {
    if (validateTask()) {
      const toDoRef = firebase.database().ref('Todo');

      const toDo = {
        task,
        status: false
      };

      toDoRef.push(toDo);
      setTask('');
    } else {
      console.log('Please enter something');
    }
  };

  return (
    <Pane display='flex' padding={10} background='tint2' borderRadius={3}>
      <TextInput
        width='100%'
        height={48}
        value={task}
        name='text-input-name'
        placeholder='Enter yout task..'
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        height={48}
        appearance='primary'
        marginLeft={16}
        onClick={onSubmit}
        disabled={!validateTask()}
      >
        Submit
      </Button>
    </Pane>
  );
}
