import { usePlayer } from "./components/Context";
import MyRoutes from "./components/MyRoutes";
import RulesModal from "./components/RulesModal";

function App() {
  const {rulesOpen} = usePlayer()
  return (
    <div>
      {rulesOpen && <RulesModal />}
      {rulesOpen || <div className="p-6">
        <MyRoutes />
      </div>}
    </div>
  );
}

export default App;
