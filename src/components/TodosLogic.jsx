import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
const TodosLogic = () =>{
    const todos = [
        {
            id: 1,
            title:'Set up development environment',
            completed: true,
        },
        {
            id: 2,
            title:'development website and add content',
            completed: false,
        },
        {
            id: 3,
            title:'deploy to live serverrrr',
            completed: false,
        },
    ];

    return (
        <div>
            <InputTodo/>
            <ul>
                {todos.map((todo) => (
                    <li>{todo.title}</li>
                ))
                }
            </ul>
        </div>
    );
};
export default TodosLogic;