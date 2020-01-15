import state from '../state'

let thisState = state.getState()

export default class User{
    constructor(user){
        this.user = user
    }

    userExit(){
        thisState.users.forEach(user => {
            if (user.email === this.user.email)
            user = this.user
        });
        thisState.user ={}
        state.setState(thisState)
        window.location ='/'
    }
}