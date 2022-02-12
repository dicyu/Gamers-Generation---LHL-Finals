import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {
  const user = false;

  return (
    <div className="App">
      <Navigation />
      <Header />
      {user ? (
        <span className="sidebar__container">
          <Sidebar />
        </span>
      ) : null}
      {/* input */}
      {/* footer picture */}
    </div>
  );
}

export default App;
