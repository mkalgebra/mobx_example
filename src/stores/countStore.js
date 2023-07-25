import {makeAutoObservable} from "mobx"

class CountStore{
    count = 0;

    constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
    }
  
    increaseCount() {
      this.count++;
    }
  
    resetCount() {
      this.count = 0;
    }
}

export default CountStore