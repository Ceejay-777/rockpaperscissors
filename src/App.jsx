import { usePlayer } from "./components/Context";
import MyRoutes from "./components/MyRoutes";
import RulesModal from "./components/RulesModal";

function App() {
  const { rulesOpen } = usePlayer();
  return (
    <div>
      {rulesOpen && <RulesModal />}
      <div>
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
