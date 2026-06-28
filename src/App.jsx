import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""; // will pass password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // data from which we will make our passsword from
    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*()+=-<>?}{:'<.,>/?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters]);

  useEffect(() => {
    passwordGenerator();
}, [passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
      <p>Learning Hooks, useEffects, useRef, and useCallbacks</p>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8   text-orange-500 bg-gray-800">
       
        <div className="flex shadow rounded-lg overflow-hidden border-none mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characters}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;







 
// callback & dependecies array