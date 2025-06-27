import { Header, Main } from "./app.layout"
import MainHeader from "./components/MainHeader"

function App() {

  return (
    <>
  <Header>
  <MainHeader/>
  </Header>
  <Main>
    <div className="bg-orange-600 w-full">
    <h1>Main Tag</h1>

    </div>
  </Main>
    </>
  )
}

export default App
