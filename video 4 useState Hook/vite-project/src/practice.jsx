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
// import { useState } from "react";

// function App() {

//   const [task, setTask] = useState("");
//   const [priority, setPriority] = useState("Medium");

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Learn React useState",
//       completed: false,
//       priority: "High",
//       createdAt: new Date().toLocaleString(),
//     },
//   ]);

//   function addTask() {

//     if (task.trim() === "") return;

//     const newTask = {
//       id: Date.now(),
//       text: task,
//       completed: false,
//       priority: priority,
//       createdAt: new Date().toLocaleString(),
//     };

//     setTasks([newTask, ...tasks]);

//     setTask("");
//     setPriority("Medium");
//   }

//   function deleteTask(id) {

//     const filteredTasks = tasks.filter((task) => {
//       return task.id !== id;
//     });

//     setTasks(filteredTasks);
//   }

//   function toggleCompleted(id) {

//     const updatedTasks = tasks.map((task) => {

//       if (task.id === id) {
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       }

//       return task;
//     });

//     setTasks(updatedTasks);
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#f3f4f6",
//         padding: "40px",
//         fontFamily: "Arial",
//       }}
//     >

//       <h1 style={{ marginBottom: "30px" , color: "green", border: "3px solid black" , borderRadius : "10px" }}>
//         Smart Task Manager
//       </h1>

//       <div
//         style={{
//           backgroundColor: "pink",
//           padding: "20px",
//           borderRadius: "15px",
//           width: "400px",
//           boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
//         }}
//       >

//         <textarea
//           placeholder="Enter your task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           style={{
//                                                 overflow : "visible",

//             width: "94.5%",
//             height: "100px",
//             padding: "10px",
//             fontSize: "16px",
//             borderRadius: "10px",
//             border: "1px solid gray",
//             resize: "none",
//             justifyContent : "center",
//             alignItems : "center"
//           }}
//         />

//         <br />

//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "10px",
//             width: "100%",
//             fontSize: "16px",
//           }}
//         >
//           <option>High</option>
//           <option>Medium</option>
//           <option>Low</option>
//         </select>

//         <br />

//         <button
//           onClick={addTask}
//           style={{
//             width: "100%",
//             padding: "12px",
//             border: "none",
//             borderRadius: "10px",
//             backgroundColor: "black",
//             color: "white",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Add Task
//         </button>

//       </div>

//       <div
//         style={{
//           marginTop: "40px",
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >

//         {tasks.map((task) => (

//           <div
//             key={task.id}
//             style={{
//               paddingLeft : "104px",
//               width: "300px",
//               backgroundColor: "white",
//               borderRadius: "15px",
//               padding: "30px",
//               boxShadow: "0px 2px 10px rgb(51, 207, 98)",
//             }}
//           >

//             <h2
//               style={{
//                 textDecoration: task.completed
//                   ? "line-through"
//                   : "none",

//                 color: task.completed
//                   ? "gray"
//                   : "black",
//               }}
//             >
//               {task.text}
//             </h2>

//             <p>
//               <strong>Priority:</strong> {task.priority}
//             </p>

//             <p
//               style={{
//                 fontSize: "14px",
//                 color: "gray",
//               }}
//             >
//               {task.createdAt}
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "10px",
//                 marginTop: "20px",
//               }}
//             >

//               <button
//                 onClick={() => toggleCompleted(task.id)}
//                 style={{

//                   flex: 1,
//                   padding: "10px",
//                   border: "none",
//                   borderRadius: "10px",
//                   backgroundColor: task.completed
//                     ? "#16a34a"
//                     : "#1a10ab",

//                   color: "white",
//                   cursor: "pointer",
//                 }}
//               >
//                 {task.completed
//                   ? "Completed"
//                   : "Mark Done"}
//               </button>

//               <button
//                 onClick={() => deleteTask(task.id)}
//                 style={{
//                   flex: 1,
//                   padding: "10px",
//                   border: "none",
//                   borderRadius: "10px",
//                   backgroundColor: "#dc2626",
//                   color: "white",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>

//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";

// Inject Google Font + keyframes once
const injectStyles = () => {
  if (document.getElementById("nlm-styles")) return;
  const tag = document.createElement("style");
  tag.id = "nlm-styles";
  tag.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Google+Sans+Display:wght@700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .nlm-anything {
      background: linear-gradient(90deg, #34a853, #4285f4, #9aa0f5, #a142f4, #34a853);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 10s ease infinite;
    }
    .nlm-cta:hover { background: #2d2d2d !important; }
    .nlm-getapp:hover { text-decoration: underline; }
    .nlm-navlink:hover { opacity: 0.7; }
  `;
  document.head.appendChild(tag);
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  injectStyles();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Google Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        height: "64px", display: "flex", alignItems: "center",
        padding: "0 32px",
        background: scrolled ? "rgba(255,255,255,0.95)" : "#fff",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <NotebookIcon />
          <span style={{ fontSize: "18px", fontWeight: "500", color: "#202124", letterSpacing: "0" }}>
            NotebookLM
          </span>
        </div>

        {/* Right side */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "28px" }}>
          {/* Overview – with underline */}
          <a href="#" className="nlm-navlink" style={{
            fontSize: "15px", color: "#202124", textDecoration: "none",
            fontWeight: "500", borderBottom: "2px solid #202124", paddingBottom: "2px",
          }}>Overview</a>

          <a href="#" className="nlm-navlink" style={{
            fontSize: "15px", color: "#202124", textDecoration: "none", fontWeight: "400",
          }}>Plans</a>

          {/* Discord */}
          <a href="#" aria-label="Discord" style={{ color: "#202124", lineHeight: 0 }}>
            <svg width="22" height="22" viewBox="0 0 127.14 96.36" fill="currentColor">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
          </a>

          {/* Reddit */}
          <a href="#" aria-label="Reddit" style={{ color: "#202124", lineHeight: 0 }}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm6.144 10.208a1.54 1.54 0 0 1 .647 1.267c0 1.795-2.09 3.252-4.668 3.252-2.577 0-4.668-1.457-4.668-3.252a1.54 1.54 0 0 1 .647-1.267 1.063 1.063 0 0 1-.065-.365c0-.594.482-1.076 1.076-1.076.28 0 .536.108.726.284a5.287 5.287 0 0 1 2.552-.673l.534-2.51a.18.18 0 0 1 .214-.138l1.766.371a.744.744 0 1 1-.062.376l-1.573-.33-.474 2.23a5.287 5.287 0 0 1 2.527.673c.19-.176.446-.284.726-.284.594 0 1.076.482 1.076 1.076a1.07 1.07 0 0 1-.065.365zM7.854 11a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0zm3.836 1.982c-.44.44-1.148.654-2.164.654h-.052c-1.016 0-1.724-.214-2.164-.654a.218.218 0 1 0-.308.308c.524.524 1.34.778 2.472.778h.052c1.132 0 1.948-.254 2.472-.778a.218.218 0 0 0-.308-.308zm-.19-1.232a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0z"/>
            </svg>
          </a>

          {/* X / Twitter */}
          <a href="#" aria-label="X" style={{ color: "#202124", lineHeight: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <a href="#" className="nlm-getapp" style={{
            fontSize: "15px", color: "#202124", textDecoration: "none", fontWeight: "400",
          }}>Get the App</a>
        </div>
      </header>

      {/* ── HERO ── */}
      <main style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center",
        minHeight: "100vh", paddingTop: "64px",
        padding: "120px 24px 80px",
      }}>
        {/* Big heading */}
        <h2 style={{
          fontSize: "clamp(64px, 8.5vw, 108px)",
          fontWeight: "700",
          letterSpacing: "-1.5px",
          lineHeight: 1.08,
          color: "#202124",
          animation: "fadeUp 0.6s ease both",
          fontFamily: "'Google Sans Display', 'Google Sans', sans-serif",
          marginBottom: "32px",
        }}>
          Understand{" "}
          <span className="nlm-anything">Anything</span>
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: "19px",
          color: "#5f6368",
          lineHeight: 1.7,
          maxWidth: "560px",
          animation: "fadeUp 0.6s 0.12s ease both",
          marginBottom: "40px",
          fontWeight: "400",
        }}>
          Your research and thinking partner, grounded in the information you
          trust, built with the latest Gemini models.
        </p>

        {/* CTA Button */}
        <button className="nlm-cta" style={{
          background: "#202124",
          color: "#fff",
          border: "none",
          borderRadius: "100px",
          padding: "18px 44px",
          fontSize: "17px",
          fontWeight: "500",
          cursor: "pointer",
          letterSpacing: "0.1px",
          animation: "fadeUp 0.6s 0.24s ease both",
          fontFamily: "'Google Sans', sans-serif",
          transition: "background 0.2s",
        }}>
          Try NotebookLM
        </button>

        {/* Section heading below */}
        <h2 style={{
          marginTop: "120px",
          fontSize: "clamp(18px, 3.5vw, 30px)",
          fontWeight: "50",
          color: "#202124",
          letterSpacing: "-0.5px",
          fontFamily: "'Google Sans Display', 'Google Sans', sans-serif",
        }}>
          Your AI-Powered Research Partner
        </h2>
      </main>
    </div>
  );
}

function NotebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
      {/* Outer circle arcs */}
      <path d="M18 5 A13 13 0 0 1 18 31" stroke="#202124" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M18 5 A13 13 0 0 0 18 31" stroke="#202124" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Inner arch */}
      <path d="M12 18 Q18 11 24 18" stroke="#202124" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}