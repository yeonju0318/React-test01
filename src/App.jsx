import { useState } from "react";
import "./App.css";

function App() {
  const [lists, setLists] = useState([
    { id: 1, title: "react를 배워봅시다." },
    { id: 2, title: "useState를 배워봅시다." },
    { id: 3, title: "자바스크립트를 배워봅시다." },
  ]);

  const [title, setTitle] = useState("");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  function onClickHandler() {
    const newList = {
      id: lists.length + 1,
      title: title,
    };
    setLists([...lists, newList]);
    setTitle("");
  }

  return (
    <>
      <div className="Top">
        <input value={title} type="text" onChange={onTitleChangeHandler} />
        <button onClick={onClickHandler}>추가하기</button>
      </div>

      <h1 className="Top">Todo list</h1>

      <div className="list-wrapper">
        {lists.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
