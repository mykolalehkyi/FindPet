
function check() {
    var inp = document.querySelector(".findPet").value;
    var l = inp.length + 1;
    if (l > 4) {
        document.querySelector(".regPet").innerHTML = 'Submit';
        document.querySelector(".regPet").style.color = 'black';
        document.querySelector(".regPet").style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('.findPet').style.borderRight = 'none';
        document.querySelector(".regPet").innerHTML = 'Reg Pet';
        document.querySelector(".regPet").style.backgroundColor = 'rgb(238, 249, 204)';
    }

}


function show() {

    //document.querySelector('.regPet__span').style.display = 'block';
    if (document.querySelector('.regPet').innerHTML == "Reg Pet") {
        document.querySelector('.findPet').style.width = '0'
        document.querySelector('.findPet').style.transition = '1s'
        document.querySelector('.btn-6d').style.display = 'none'
        setTimeout(function() {
                document.querySelector('.regPet').innerHTML = 'BACK'
                document.querySelector('.reg__form').style.display = 'block'
                document.querySelector('.regPet__span').style.display = 'block'            
            }, 1000);
    }
    if (document.querySelector('.regPet').innerHTML == "BACK") {
        document.querySelector('.reg__form').style.display = 'none'
        document.querySelector('.regPet__span').style.display = 'none'
        document.querySelector('.findPet').style.width = '400px'
        setTimeout(function() {
            document.querySelector('.btn-6d').style.display = 'block'
            document.querySelector('.regPet').innerHTML = 'Reg Pet'
        }, 500)

    }
}

function takeInfo() {
    var name = document.querySelector('#name').value;
    console.log(name)
}
var obj = {}
function acceptForm() {
        var name = document.querySelector('#name').value
        var tel = document.querySelector('#tel').value 
        var street =  document.querySelector('#street').value
    obj['name'] = name;
    obj['tel'] = tel;
    obj['street'] = street;
    console.log(obj)
}