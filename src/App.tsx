import Pages from "./pages";
import "./App.scss";
import Dashboard from "./components/layout/Dashboard";
import Header from "./components/layout/Header";
import Pagenetion from "./pages/Tickets/components/Pagenation/idnex";




function App() {
  return (
    <div className="body">
      <div className="left">
        <Dashboard />
      </div>
      <div className="right">
        <Header />
        <Pages />
        <Pagenetion />
      </div>
    </div>
  );
}

export default App;
