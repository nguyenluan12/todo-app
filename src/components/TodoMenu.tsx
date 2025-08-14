import MenuItem from "./MenuItem";
 
type topicType = {
    id: number;
    name: string;
    color: string;
    createdAt: string;
  }[]
interface TodoMenuProps {
    topic: topicType;
    setId: React.Dispatch<React.SetStateAction<number>>;
}
export default function TodoMenu({ topic, setId }: TodoMenuProps){
    return (
        <div className="grid grid-rows-[70px_1fr] min-w-1/5 min-h-screen border-red rounded-lg shadow-md">
            <div className="flex items-left  ">
                <h1 className="pt-20 ml-6 flex items-center font-mono text-2xl font-bold rounded-full bg-white text-purple-800 text-5xl font-bold  text-center">Todo App</h1>
            </div>
                
                <MenuItem topic={topic} setId={setId} />
              </div>
    );
}