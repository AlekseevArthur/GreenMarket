import state from '../state'

 let thisState = state.getState()

export default function headerSet(){

    let userNav = document.getElementsByClassName('user')[0]

    if(thisState.user.email)
    {
        userNav.innerHTML = thisState.user.email
        userNav.setAttribute('href','room.html')
    }

    let cartIcon =  document.getElementsByClassName('user')[0]

}