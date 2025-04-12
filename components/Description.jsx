import { FaMusic, FaKey, FaClipboardList, FaPlusCircle, FaShareAlt } from "react-icons/fa";

export default function Description() {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-6">
      <div className="flex flex-col gap-6 max-w-2xl text-base md:text-xl font-light">
        <p className="font-semibold text-xl md:text-2xl text-center">
          WorshipBuddy is a free app with over a thousand Christian songs included
        </p>
        <div className="flex items-center gap-4">
          <FaKey className="text-blue-400 text-2xl md:text-3xl hover:text-blue-300 transition-colors" />
          <p>Easily transpose any song to any key effortlessly</p>
        </div>
        <div className="flex items-center gap-4">
          <FaClipboardList className="text-blue-400 text-2xl md:text-3xl hover:text-blue-300 transition-colors" />
          <p>Create and organize sets</p>
        </div>
        <div className="flex items-center gap-4">
          <FaMusic className="text-blue-400 text-2xl md:text-3xl hover:text-blue-300 transition-colors" />
          <p>Access the music library to learn songs</p>
        </div>
        <div className="flex items-center gap-4">
          <FaPlusCircle className="text-blue-400 text-2xl md:text-3xl hover:text-blue-300 transition-colors" />
          <p>Add your own songs</p>
        </div>
        <div className="flex items-center gap-4">
          <FaShareAlt className="text-blue-400 text-2xl md:text-3xl hover:text-blue-300 transition-colors" />
          <p>Share your sets with others</p>
        </div>
      </div>
      <div className="h-0.5 w-full md:w-96 bg-neutral-600 my-5 mt-28" />
    </div>
  );
}