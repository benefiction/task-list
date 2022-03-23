import './App.css';
import { TasksProvider } from './contexts/TasksContext';

function App() {
    return (
        <TasksProvider>
            <div className='App'>
            </div>
        </TasksProvider>
    );
}

export default App;
