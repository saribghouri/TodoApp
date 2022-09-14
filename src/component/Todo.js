import React, { useState } from "react";
import logo from "./image/logo.webp";
const Todo = () => {
  const [InputVal, setInputVal] = useState("");
  const [eachItems, setEachItems] = useState([]);
  const handleClick = () => {
    const mypreItem = [...eachItems, InputVal];
    setEachItems(mypreItem);
    setInputVal("");
  };
  const removeAll = () => {
    setInputVal("");
    setEachItems([]);
  };

  const remove_item = (id) => {
    const remove_items = eachItems.filter((curele, ind) => {
      return ind !== id;
    });
    setEachItems(remove_items);
  };
  return (
    <div>
      <div className="main-div">
        <img src={logo} alt="logo" />
      </div>

      <div className="text_div">
        <h1>Todo App</h1>
      </div>
      <div className="input_field">
        <input
          class="inp"
          type="text"
          placeholder="AddItems"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          autoComplete="off"
          value={InputVal}
        />
        <div className="btnContainer">
          <button className="btn_style" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>

      {eachItems.map((curele, ind) => {
        return (
          <>
            <div className="showItems">
              <div className="eachItems">
                <div className="shownItems"></div>
                <h5>
                  <i
                    className="fas fa-trash main"
                    onClick={() => {
                      remove_item(ind);
                    }}
                  ></i>
                  {curele}
                </h5>
              </div>
            </div>
          </>
        );
      })}
      <div className="main_btn">
        <button className="btn_styl" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default Todo;
