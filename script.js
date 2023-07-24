let userName = document.getElementById('userNameInput');
let initialsNumberInput = document.getElementById('intialNumberInput');

let avatarBackground = document.getElementById('avatar-circle')
let avatar = document.getElementById('avatar-letters')


let initialsNumber = 3

function initialsOnTheAvatarMaker() {
    let names = userName.value.split(' ')


    if (parseInt(initialsNumberInput.value) < 1) {
        initialsNumber = 1
    }  else if(parseInt(initialsNumberInput.value) > 3) {
        initialsNumber = 3 
    }  else if(initialsNumberInput.value !== '') {
        initialsNumber = parseInt(initialsNumberInput.value)
    }


    let initials = ''

    if(names.length > initialsNumber){
        
        for(var i = 0; i < initialsNumber; i++) {
            if(names[i] !== ''){
                let word = names[i].split('')
                initials += word[0]
            }
        }

    } else {
        for(var j = 0; j < names.length; j++) {
            if(names[j] !== ''){
                let word = names[j].split('')
                initials += word[0]
            }
        }
    }

    avatar.innerHTML = initials.toUpperCase()
}

function avatarColor() {
    // a,b and c are the numbers of a rgb color (that are between 0 and 255)
    let color = {
        a:Math.floor(Math.random() * 255), 
        b:Math.floor(Math.random() * 255), 
        c:Math.floor(Math.random() * 255)
    };

    avatarBackground.style.backgroundColor = `rgb(${color.a}, ${color.b}, ${color.c})`

    // to be easier to see the letter
    if(color.a >= 127) {
        avatar.style.color = '#000'
    } else {
        avatar.style.color = '#fff'
    }

    console.log(color);
};

avatarColor();