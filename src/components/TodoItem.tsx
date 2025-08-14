type Props = {
    id: number;
    title: string;
    done: boolean;
    onToggle: () => void;
    onDelete: () => void;
  };
  
  export default function TodoItem({id, title, done, onToggle, onDelete }: Props) {
    return (
      <li className="flex items-center justify-between bg-gray-50 border px-4 py-2 rounded">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={done} onChange={onToggle} />
          <span className={done ? "line-through text-gray-500" : ""}>{title}</span>
        </label>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Xóa
        </button>
      </li>
    );
  }
  