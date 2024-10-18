// adding names and email stuff

let users = [];
let users_container = document.getElementById('users_container')      //getting element from the html file
let alert = document.getElementById('alert');

function renderUsers(){
    users_container.innerHTML='';     //emptying the user container every time the fn runs to avoid multiple data display / store.
    users.forEach((user)=>{
    let div = document.createElement('div');      //creating element to show up on the screen
    let name = document.createElement('p');       //creating element to show up on the screen
    let email = document.createElement('p');      //creating element to show up on the screen
    div.classList.add('user');         //adding css class to the div
    name.innerText=user.name;            //importing values
    email.innerText=user.email;          //importing values
    users_container.appendChild(div);    //combining the js element into html container
    div.appendChild(name);               //combining the values to the js div
    div.appendChild(email);          //combining the values to the js div

    deleteUser=()=>{
        let contain = document.getElementById('users_container');    //trying to delete a user , jo huwa nhi, bs ek bar last vala delete hora
        div.remove();
    }

    })
}

function doesUserExist(email){        // passing the input value and checking if it is typed twice
    let user = users.filter((user)=>{  //using filter to check whether this value exists
        return user.email == email;
    })
    return user.length > 0 ? true : false  // if email value exixts it will surely pass a value greater than 1 that means trueee
}

function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove('success', 'danger')    //fn to remove the alert !!
    }, 2000)
}


addUser = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user = {                 //storing data as object inside
        name: name.value,
        email: email.value,
    }

    let ifUserExist = doesUserExist(email.value)
    if(ifUserExist == false){      // if the value is false then it means email,value dont pre exists
        users.push(user);       //adding the user data into users array ==> array of objects
        alert.classList.add('success');
        alert.innerText='User added successfully';
        hideAlert()
    }

    else{
        alert.classList.add('danger');
        alert.innerText='Email already exists';
        hideAlert()
    }


    renderUsers();      //creating another fn for the ease of the code


}

