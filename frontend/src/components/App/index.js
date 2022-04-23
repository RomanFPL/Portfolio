import { useContext } from "react"
import { AppContext } from "../AppContext";

const App = () => {
    const context = useContext(AppContext);
    console.log(context)
  return (
    <div>Hi there</div>
  )
}

export default App