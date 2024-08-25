import "./App.css";
import "./index.css";
import { APIDemo } from "./components/APIDemo";
import { Header } from "./components/Header"; // Adjust path as needed
function App() {
  return (
    <div className="App">
      <Header />
      <APIDemo />
    </div>

    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<About />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
