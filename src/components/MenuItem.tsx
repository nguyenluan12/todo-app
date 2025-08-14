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
export default function MenuItem({ topic, setId }: TodoMenuProps) {
    const topics = topic ?? []
  return (
    <div className=" h-full w-full py-20 px-4   flex flex-col items-center justify-center space-y-4">
        <div className="w-full mr-10  rounded-lg px-6 flex flex-col items-center space-y-2">
        {topics.map((item: any, index: number) => (
                    <button key={index}  className="flex flex-col items-left h-auto py-4 bg-purple-100 btn rounded-lg text-xl text-black w-full cursor-pointer hover:scale-110 hover:bg-purple-400 hover:text-white transition delay-20 duration-300 ease-in-out"
                    onClick={() => setId(item.id)}
                    >

                        <h2 className=" flex items-left  w-full">{item.name}</h2>
                        <span className="w-full flex items-left font-light font-style: italic text-xs ">{item.name} remain 3 tasks</span>

                    </button>
                    
                
            ))} 
        </div>
    </div>
  );
}