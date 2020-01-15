let initialState = {
    headerInfo:{},
    user:{userBuys:[]},
    users:[],
    cart:[],
    blog:[],
    product:{}
}

class State{
    constructor(){}

    getState(){
        let state
        if (localStorage.getItem('state')) {
            state = JSON.parse(localStorage.getItem('state'));
        } else {
            state = initialState
        }
        return state
    }

    setState(newState){
        localStorage.setItem('state', JSON.stringify(newState));
    }



}

let state = new State

export default state