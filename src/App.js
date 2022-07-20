import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  let [userId, setUserId] = useState("1");
  let [data, setData] = useState([]);

  //fetching user data
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json_data) => {
        console.log(json_data);
        setData(json_data);
      })
      .catch((error) => {
        console.log("Error while fetching the posts -> ", error.message);
      });
  }, [userId]); // -> without providing any dependices in the array, this will works as componentDidMount
  // -> with the provided dependenies with in the array useEffect works as componetnDidUpdate

  // Example for ComponentWillUnmount
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  function onMouseMove(event) {
    console.log(event.clientX);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setUserId("2")}>Change user id</button>
      {data.map((user) => {
        return (
          <div>
            <p>{user.title}</p>
          </div>
        );
      })}
    </div>
  );
}
