import state from "../state";
import {repeatPassword,validateEmail}from '../components/Validation'
import Search from "../components/Search";
import headerSet from '../components/Header'
headerSet()
new Search({ container: "search-container", input: "header-input" });

let newState = state.getState();

let inputData ={}

function onChange(){
    inputData[this.name] = this.value
}


let inputs =document.getElementsByTagName('input')

for(let i = 0;i<inputs.length;i++){
    inputs[i].addEventListener('change',onChange)
}

function handleSubmit(e){
   
     let{email,psw,psw_repeat} =inputData
    if(validateEmail(email)&&repeatPassword(psw,psw_repeat)){
        let newUser = {email,password:psw}
        newState.users.push(newUser)
        newState.user = newUser
        state.setState(newState)
        window.location = '/'
    }
    e.preventDefault()
}

document.getElementsByClassName('form-container')[0].addEventListener('submit',handleSubmit)

