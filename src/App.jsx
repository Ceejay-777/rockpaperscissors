import MyRoutes from "./components/MyRoutes"
import PlayAgain from "./components/PlayAgain"
import RPS from "./components/RPS"
import RPSTriangle from "./components/RPSTriangle"
import Rules from "./components/Rules"
import Scoreboard from "./components/Scoreboard"
import Page1 from "./pages/Page1"

function App() {

  return (
    <div className="p-6">
      {/* <RPS type={"scissors"}/>
      <RPS type={"paper"}/>
      <RPS type={"rock"}/> */}
      {/* <Scoreboard /> */}
      {/* <Rules /> */}
      {/* <PlayAgain /> */}
      {/* <Page1 /> */}
      <MyRoutes />
      {/* <RPSTriangle /> */}
    </div>
  )
}

export default App
