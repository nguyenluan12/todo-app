
export default function AddNewTask({ setIsPosting }: { setIsPosting: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
          
          <button className="btn btn-lg btn-primary text-xl" onClick={() => setIsPosting(true)}>
          <img src="/clipboard-list.png" alt="Add Task" className="w-8 mr-2" />
            Add new task now</button>
        </div>
      );
}