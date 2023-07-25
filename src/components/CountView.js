import { observer } from "mobx-react"

const CountView = observer(({countState})=>
    <>
        <p>State: {countState.count}</p>
        <button onClick={countState.increaseCount}>Increase</button>
        <button onClick={countState.resetCount}>Reset</button>
    </>
)

export default CountView;