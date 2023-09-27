import React from "react";
import './Information.css'

const Information = () => {
  return (
    <div className="flex items-center justify-center information-bg-color py-12">
      <div>
        <h1 className="text-3xl text-white">Informations</h1>
        <p className="text-slate-300 text-xl">Here is some information about this task.</p>
        <ul>
          <li className="text-slate-300">
            01. When you click service page on the menu bar then you will see
            multilevel dropdown menu.
          </li>
          <li className="text-slate-300">02. slider with auto-play and also next + previous button</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
