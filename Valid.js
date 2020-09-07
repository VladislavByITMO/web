
let enterbutton = document.querySelector('.Enter_button');
let input = document.getElementById("Y_field");
let inputR = document.getElementById("R_field");
let inputYpole = document.querySelector('.qw');
let inputRpole = document.querySelector('.qw2');
let flag;
let value_X;
let value_Y;
let value_R;



function x_choosen(id){

    var elems = document.getElementsByClassName('X_button');
    for(var i=0; i < elems.length; i++) {
        elems[i].style.backgroundColor="#4a4848";
   }
  //  buttons.style.backgroundColor='rgba(250, 50, 50, .4)';
   value_X = document.getElementById(id).value;
   document.getElementById(id).style.backgroundColor='rgb(137,238,19, .4)';

}

function set_r(){
    if (document.getElementById('r1').checked) {
        value_R = document.getElementById('r1').value;
    }else if (document.getElementById('r2').checked) {
        value_R = document.getElementById('r2').value;
    }else if (document.getElementById('r3').checked) {
        value_R = document.getElementById('r3').value ;
    }else if (document.getElementById('r4').checked) {
        value_R = document.getElementById('r4').value;
    }else if (document.getElementById('r5').checked) {
        value_R = document.getElementById('r5').value;
    }
}



enterbutton.addEventListener('click',function () {
    validY();
    checkflag()
})

function validY(){
    if(!/^-?\d+(\.|,)?\d*$/i.test(input.value)){
        input.value = "";
        inputYpole.style.backgroundColor = "rgba(250, 50, 50, .4)";
        flag = false;
    }else{
      //  error.textContent = "";
        let y = input.value.replace(/[,]/,".");
        if(y<-5 || y>5){
         //   error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            input.value = "";
            inputYpole.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag = false;
        }else if(Number(y.split(".")[0]) >=5 && Number(y.split(".")[1])>0){
        //    error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            input.value = "";
            inputYpole.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag = false;
        }else if(Number(y.split(".")[0]) <=-5 && Number(y.split(".")[1])>0){
        //    error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            input.value = "";
            inputYpole.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag = false;
        }else {
            value_Y = input.value.replace(/[,]/,".");
            inputYpole.style.backgroundColor = "rgb(137,238,19, .4)";
            flag = true;
        }
    }
}
function checkflag() {
    if (value_X) {
        if (flag) {
            create_get();
        }

    }else {
        var elems = document.getElementsByClassName('X_button');
        for(var i=0; i < elems.length; i++) {
            elems[i].style.backgroundColor="rgba(250, 50, 50, .4)";
        }
    }
}

/*let phrases2 = [
    { text: 'Юрий Дудь' },
    { text: 'расставить книги на полке по цвету' },
    { text: 'отправить другу смешную гифку' },
    { text: 'читать про зарплаты в Сан-Франциско' },
    { text: 'прочитать новости и ужаснуться в комментариях'},
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости'}

];

function getRandomElement2(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}


 */
