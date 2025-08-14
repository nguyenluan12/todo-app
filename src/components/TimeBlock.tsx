'use client';
import "cally";
import AnalogClock from "./AnalogClock";
// import Calendar from "./Calendar";
import AddNewTask from "./AddNewTask";

export default function TimeBlock({ setIsPosting }: { setIsPosting: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="w-full h-screen max-w-120 flex flex-col items-center justify-center gap-8">
            <AnalogClock />
            {/* <Calendar /> */}
            <AddNewTask setIsPosting={setIsPosting} />
        </div>
    );
}