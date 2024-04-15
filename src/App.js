
import { useState } from 'react';

function App() {
  const [work, setWork] = useState('')
  console.log(work)
  return (
    <div className="flex gap-8 h-screen items-center border border-red-500 justify-center">
      <input className="outline-none border border-blue-500 px-4 py-2" value={work} onChange={e => setWork(e.target.value)}></input>
      <button type="button" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white">Add</button>
    </div>
  );
}

export default App;
