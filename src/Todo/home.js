import React, { useEffect, useState } from "react";
import "./home.css";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

function Home() {
  const [todo, setTodo] = useState([]);
  const [inpvalue, setinp] = useState("");
  const [completedTodo, setCompletedTodo] = useState([]);
  const [edittext, setEditText] = useState("");
  const [editId, setEdit] = useState(-1);

  useEffect(()=>{
    console.log('useEffect');
  })

  const submitHandler = () => {
    if (inpvalue !== "") {
      const obj = {
        title: inpvalue,
        id: Math.floor(Math.random() * 10000),
      };

      setTodo((prevT) => [...prevT, obj]);
      setinp("");
    }
  };

  const completehandler = (arr) => {
    console.log("arr ", arr);
    let newCompleted = [...completedTodo];
    newCompleted.push(arr);
    setCompletedTodo(newCompleted);
    deletehandler(arr.id);
  };

  const edithandler = (id, value) => {
    setEdit(value.id);
    setEditText(value.title);
  };

  const updateTodo = (oldTodo) => {
    let newTodo = edittext;
    console.log("edit text is", oldTodo, newTodo);
    let todoArray = [...todo];
    const updatedTodo = todoArray.map((todo) => {
      if (todo.title === oldTodo.title) {
        todo.title = newTodo;
      }
      return todo;
    });
    setTodo(updatedTodo);
    setEdit(-1);
  };

  const deletehandler = (id) => {
    console.log("id ,", id);
    const newarr = [...todo];
    const updatedTodo = newarr.filter((value, index) => {
      return value.id !== id;
    });
    setTodo(updatedTodo);
  };

  return (
    
    <>
    {console.log("return")}
      <div className="container">
        <div className="innerContainer">
          <div className="header">
            <input
              type="text"
              placeholder="Type todo"
              className="inputElement"
              value={inpvalue}
              onChange={(e) => {
                setinp(e.target.value);
              }}
            ></input>
            <button className="addbtn" type="submit" onClick={submitHandler}>
              Add Todo
            </button>
          </div>

          {todo.length > 0 ? (
            <p style={{ fontSize: "23px" }}>THINGS TO DO</p>
          ) : null}
          {todo.map((value, idx) => {
            return (
              <>
                <div className="todolist" key={idx}>
                  <div className="todo" >
                    <p>{value.title}</p>
                    {editId === value.id ? (
                      <>
                        <input
                          type="text"
                          className="inputElement"
                          value={edittext}
                          onChange={(e) => {
                            setEditText(e.target.value);
                          }}
                        ></input>
                        <button onClick={() => updateTodo(value)}>
                          Update Todo
                        </button>
                      </>
                    ) : null}
                  </div>
                  <div className="iconDiv"  key={idx}>
                    <MdOutlineDone
                      style={{ color: "green" }}
                      className="icons"
                      onClick={() => completehandler(value)}
                    />
                    <AiOutlineEdit
                      className="icons"
                      onClick={(e) => {
                        edithandler(idx, value);
                      }}
                    />
                    <AiFillDelete
                      style={{ color: "red" }}
                      className="icons"
                      onClick={() => {
                        deletehandler(value.id);
                      }}
                    />
                  </div>
                </div>
              </>
            );
          })}
          {completedTodo.length > 0 ? (
            <p style={{ fontSize: "23px" }}>Completed Todos</p>
          ) : null}
          {completedTodo.map((value, idx) => {
            return (
              <>
                <div className="todolist" key={idx}>
                  <div className="todo" >
                    <p style={{ textDecoration: "line-through" }}>
                      {value.title}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
