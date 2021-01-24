import { Pane } from 'evergreen-ui';
import { Heading } from 'evergreen-ui';

import Forms from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <Pane display='flex' flexDirection='column' padding={10} borderRadius={3}>
      <Heading size={900} textAlign='center' paddingBottom={10}>
        To Do List ✒️
      </Heading>

      <Forms />
      <ToDoList />
    </Pane>
  );
}

export default App;
