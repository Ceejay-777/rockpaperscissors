import RPS from "./components/RPS"
import RPSTriangle from "./components/RPSTriangle"
import Scoreboard from "./components/Scoreboard"

function App() {

  return (
    <div className="p-6">
      {/* <RPS type={"scissors"}/>
      <RPS type={"paper"}/>
      <RPS type={"rock"}/> */}
      <Scoreboard />
      {/* <RPSTriangle /> */}
    </div>
  )
}

export default App
