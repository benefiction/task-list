import './App.css';
import { TaskFormContainer } from './components/TaskForm';
import { TaskListContainer } from './components/TaskList/TaskListContainer';
import { TasksProvider } from './contexts/TasksContext';

function App() {
    return (
        <TasksProvider>
            <div className='App'>
                <TaskListContainer />
                <TaskFormContainer />
            </div>
        </TasksProvider>
    );
}

export default App;
