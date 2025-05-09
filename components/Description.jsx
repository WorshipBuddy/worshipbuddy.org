import { FaMusic, FaKey, FaClipboardList, FaPlusCircle, FaShareAlt } from "react-icons/fa";

export default function Description() {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-6">
      <div className="flex flex-col gap-8 max-w-2xl text-base md:text-xl">
        <p className="font-medium text-2xl md:text-3xl text-center gradient-text">
          WorshipBuddy is a free app with over a thousand Christian songs included
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="section-card group rounded-2xl hover:shadow-xl hover:shadow-primary-navy/10 transition-all duration-300">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Effortless Transposition</h3>
            <p className="text-gray-900">Easily transpose any song to any key with a single tap</p>
          </div>
          <div className="section-card group rounded-2xl hover:shadow-xl hover:shadow-primary-navy/10 transition-all duration-300">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Set Management</h3>
            <p className="text-gray-900">Create and organize your worship sets efficiently</p>
          </div>
          <div className="section-card group rounded-2xl hover:shadow-xl hover:shadow-primary-navy/10 transition-all duration-300">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Extensive Library</h3>
            <p className="text-gray-900">Access a vast collection of worship songs and lyrics</p>
          </div>
          <div className="section-card group rounded-2xl hover:shadow-xl hover:shadow-primary-navy/10 transition-all duration-300">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Custom Songs</h3>
            <p className="text-gray-900">Add and manage your own songs and arrangements</p>
          </div>
        </div>
      </div>
      <div className="h-px w-full md:w-96 bg-gray-800 my-16 rounded-full" />
    </div>
  );
}