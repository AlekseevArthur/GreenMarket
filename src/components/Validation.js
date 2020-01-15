import state from '../state' 

let newState = state.getState()
let {users} = newState


export function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

export function repeatPassword(pass,repPass){
    if(pass===repPass)
    {
        return(true)
    }
    return false
}

export function checkUser(email,pass){
    for(let i=0;i<users.length;i++){
        if((users[i].email===email)&&(users[i].password===pass))      
        return users[i]
    }
    return false
}
