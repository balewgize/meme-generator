import Header from "./components/Header"
import MemeForm from "./components/MemeForm"

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="row mt-3">
        <div className="col-lg-6 mx-auto">
          <MemeForm />
        </div>
      </div>
    </div>
  )
}

export default App
