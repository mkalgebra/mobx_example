import CountView from "./components/CountView";
import CountStore from "./stores/countStore";

function App() {
  const countState = new CountStore()

  return (
    <>
      <CountView countState={countState}/>
    </>
  );
}

export default App;
