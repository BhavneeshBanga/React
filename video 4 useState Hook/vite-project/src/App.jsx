// import { useState } from "react";

// // useState  , count = 0 , setcount return karke dega
// // setcount === count ki value ko update kar sakte ho and App function ko re render ko dubara call kar sakte ho



// function App() {
//     // let count = 0;
//     // function increaseNumber() {
//     //     count++
//     //     const para = document.querySelector('p');
//     //     para.textContent = `Counter : ${count}`
//     //     // lekin hamne toh dom manupulation karni nahi thi
//     //     // so aap kucdh se dom manupulation karne ki koshish mat kijiyae
//     // }



//     //set count aapka function hai

//     let [count, setCount] = useState(0);

//     function increaseNumber() {
//         count++;
//         setCount(count);  //function hai jise useState ne return kiya hai
//     }

//     return (
//         <>
//             <p> Counter : {count} </p>
//             <button onClick={increaseNumber} >Increment</button>
//             {/* reference diya hai hamne call nahi kiya hai */}
//             {/* click karne par count ki value toh badh rahi hai lekin ui par show nahi ho rahi hai  */}
//         </>
//     );
// }

// export default App;
import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React useState",
      completed: false,
      priority: "High",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  function addTask() {

    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority: priority,
      createdAt: new Date().toLocaleString(),
    };

    setTasks([newTask, ...tasks]);

    setTask("");
    setPriority("Medium");
  }

  function deleteTask(id) {

    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(filteredTasks);
  }

  function toggleCompleted(id) {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <h1 style={{ marginBottom: "30px" , color: "green", border: "3px solid black" , borderRadius : "10px" }}>
        Smart Task Manager
      </h1>

      <div
        style={{
          backgroundColor: "pink",
          padding: "20px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        }}
      >

        <textarea
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
                                                overflow : "visible",

            width: "94.5%",
            height: "100px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "1px solid gray",
            resize: "none",
            justifyContent : "center",
            alignItems : "center"
          }}
        />

        <br />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            width: "100%",
            fontSize: "16px",
          }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <br />

        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>

      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >

        {tasks.map((task) => (

          <div
            key={task.id}
            style={{
              paddingLeft : "104px",
              width: "300px",
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0px 2px 10px rgb(51, 207, 98)",
            }}
          >

            <h2
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",

                color: task.completed
                  ? "gray"
                  : "black",
              }}
            >
              {task.text}
            </h2>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "gray",
              }}
            >
              {task.createdAt}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >

              <button
                onClick={() => toggleCompleted(task.id)}
                style={{

                  flex: 1,
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: task.completed
                    ? "#16a34a"
                    : "#1a10ab",

                  color: "white",
                  cursor: "pointer",
                }}
              >
                {task.completed
                  ? "Completed"
                  : "Mark Done"}
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#dc2626",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;