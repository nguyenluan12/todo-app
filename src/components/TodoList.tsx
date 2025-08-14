import TodoItem from "./TodoItem";

type todo = {
  id: number;
  title: string;
  done: boolean;
}
export default function TodoList({setTodos, todos, title, setTitle, value, setValue, done, setDone, id, setId}: {
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
    todos: todo[];
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    done: boolean;
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
}) {
    function onToggle(){
        setDone(!done);
      }
      function onDelete(title: string, id: number) {
        console.log(title, id);
        setTodos(todos.filter(todo => todo.id !== id));
        setDone(false);
      }
      function addTodo(){
        setTodos([...todos, { title, done, id }]);
                    setValue("");
                    setDone(false);
                    setId(id + 1);
                    console.log(todos);
                    setTitle("");
      }
    return (
        <div className="w-full h-full min-h-screen p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-left">
                <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
            </div>
        
            <form className="flex mb-4">
          <input
            type="text"
            placeholder="Thêm việc cần làm..."
            className="flex-1 border border-gray-300 p-2 rounded-l"
            value={value}
            onChange ={(e) => {
              setTitle(e.target.value)
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn btn-primary text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (title.trim()) {
                addTodo();
              }
            }}
          >
            Thêm
          </button>
        </form>
        
          <ul className="space-y-2">
          {todos.map((item, index) => (
            <TodoItem
              id={item.id}
              key={index}
              done={item.done}
              onToggle={onToggle}
              onDelete={() => onDelete(item.title, item.id)}
              title={item.title}
            />
          ))}
         
        </ul>
        </div>
    )
}