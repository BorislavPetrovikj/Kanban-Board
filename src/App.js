import "./App.scss";
import Kanban from "./Components/kanban";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Kanban Board</h1>
      <Kanban />
    </div>
  );
}

export default App;
