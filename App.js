import React from "react";
import Quiz from "./quiz/quiz";
import quiz from "./quiz/questions"
function App(){
    return(
        <div>
            <p></p>
            <Quiz/>
            
        </div>
    )
}
export default App
//  import * as math from "mathjs";
//  import {HiMiniCodeBracket} from "react-icons/hi2";
//  import {RxCross2} from "react-icons/rx";
//  import {MdModeNight} from "react-icons/md";
//  import {BiSolidSun} from "react-icons/bi";
// function App(){
//     const [input,setInput] = useState("");
//     const [history,setHistory] = useState([]);
//     const [selectedHistory, setselectedHistory] = useState(null);
//     const [theme, setTheme] = useState(getInitialTheme);
//     const [historyModel, setHistoryModel] = useState(false);
//     useEffect(()=>{
//         localStorage.setItem("theme",theme);
//     },[theme]);
//     function getInitialTheme(){
//         const savedTheme = localStorage.getItem("theme");
//         return savedTheme ? savedTheme: "light";
//     }
//     const handleThemeToggle = () =>{
//         setTheme((prevTheme) =>(prevTheme === "light" ? "dark" :"light"));
//     }
//     const handleButtonClick = (value) => {
//         setselectedHistory(null);
//         setInput(input + value);
//     }
//     const handleClear = () => {
//         setselectedHistory(null);
//         setInput("");
//     }
//     const handleCalculate = () => {
//         try{
//             const result = math.evaluate(input);
//             setHistory([...history, {input,result}]);
//             setInput(result.toString());
//             setselectedHistory(null);
//         }
//         catch (error){
//             setInput("Error");
//         }
//     }
//     const handleBackspace = () =>{
//         setselectedHistory(null);
//         setInput(input.slice(0,-1));
//     }
//     const handleHistoryItemClick = (item) =>{
//         setInput(item.input);
//         setselectedHistory(item);
//     }
//     return(
//         <div className="container">
//             <div className={`calculator ${theme}`}>
//                 <div className="heading">
//                     <p>CALCULATOR</p>
//                     <div className="thm-btn">
//                         <button className="theme-toggle" onclick={handleThemeToggle}>
//                             {theme === "light"? (<MdModeNight className="night-btn"/>):(<BiSolidSun className="light-btn"/>)}
//                         </button>
//                     </div>
//                     </div>
//             <div className="display">{input}</div>
//             <div className="buttons">
//                 <button onClick={handleClear} className="clear">AC</button>
//                 <button onClick={handleBackspace} className="backspace">^</button>
//                 <button onClick={()=>handleButtonClick("%")}>%</button>
//                 <button className="opt-btn" onClick={()=>handleButtonClick("+")}>+</button>
//                 <button onClick={()=>handleButtonClick("1")}>1</button>
//                 <button onClick={()=>handleButtonClick("2")}>2</button>
//                 <button onClick={()=>handleButtonClick("3")}>3</button>
//                 <button className="opt-btn" onClick={()=>handleButtonClick("-")}>-</button>
//                 <button onClick={()=>handleButtonClick("4")}>4</button>
//                 <button onClick={()=>handleButtonClick("5")}>5</button>
//                 <button onClick={()=>handleButtonClick("6")}>6</button>
//                 <button className="opt-btn" onClick={()=>handleButtonClick("*")}>*</button>
//                 <button onClick={()=>handleButtonClick("7")}>7</button>
//                 <button onClick={()=>handleButtonClick("8")}>8</button>
//                 <button onClick={()=>handleButtonClick("9")}>9</button>
//                 <button className="opt-btn" onClick={()=>handleButtonClick("/")}>/</button>
//                 <button onClick={()=> setHistoryModel(true)}>
//                     <HiMiniCodeBracket />
//                 </button>
//                 <button onClick={()=> handleButtonClick("O")}>O</button>
//                 <button onClick={()=> handleButtonClick(".")}>.</button>
//                 <button className="operator-btn equal" onClick={handleCalculate}>=</button>
//             </div>
//     <div className={` ${historyModel ? "history" : "hide"}`}>
//         <h2>History</h2>
//         {history.map((item, index) =>(
//             <p
//             key={index}
//             className={
//                 selectedHistory === item
//                 ? "selected history-item"
//                 : "history-item"
//             }
//             onClick={() => {
//                 handleHistoryItemClick(item), setHistoryModel(false);
//             }}
//             >
//                 {item.input} = {item.result}
//                 </p>
//         ))}
//     <div className="close">
//        <RxCross2 onclick={()=>setHistoryModel(false)} />
//     </div>
//         </div>
//          {} 
//         </div>
//         </div>
//     )
// }
  {/* import Image from "./router/array/img"; */}
{/* // import TableSearch from "./practice/table";
// import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
// import Home from './router/home1';
// import About from './router/about1';
// import Contact from './router/contact1';
//    function Component1(){ */  }
{/* //     return(
//         <div>

//             <TableSearch />
//             <p id="image"></p>
    
//         </div>
//     )
//     return(
//         <div class="container">
//             <Router>
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/About">About</Link>
//                             </li>
//                             <li>
//                                 <Link to="/Contact">Contact</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <Routes>
//                         <Route path="/" exact element={<Home />}></Route>
//                         <Route path="/" exact element={<About />}></Route>
//                         <Route path="/" exact element={<Contact />}></Route>
//                     </Routes>
//                 </div>
//             </Router>
//         </div>
//     )
    // } */}
      