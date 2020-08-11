let i; i=0;
let i1; i1=0;
let i2; i2=0;
let name; name="даун который не ввел имя" ; 
let pol; pol = 1;
let mat; mat = "ПИДР";
let mat0 = "ПИДР";
let bukva1="";let bukva2="ом";

function Input_pol(){
    login_ok = 1;
    user_name = prompt("Укажите ваш пол ","");
    user_name = user_name.toLowerCase();
    if (user_name=="жен"||user_name=="женский"||user_name=="женщина") {
        login_ok = 2;
       }
    pol=login_ok;
    if(pol==2)
    {
        bukva1="a";
        bukva2="ой";
    }
    else
    {
        bukva1="";
        bukva2="ом";
    }
}


function Input()
{
    user_name = prompt("Введи своё имя ","");
    user_name = user_name.toLowerCase();
    user_name = user_name.charAt(0).toUpperCase() + user_name.substr(1).toLowerCase();
    if (user_name=="")
        user_name="даун который не ввел имя" ;
    name=user_name;
}

function Input_mat()
{
    user_name = prompt("Долбаеб введи Матюк  ","");
    user_name = user_name.toLowerCase();
    mat=user_name;
    mat0=mat;
    if(pol==2)
    {
        mat0=mat0.slice(0,-1);
    }
    else
        mat0=mat;
}

function L() 
{
    let f;
    let yes;  yes=" ";
    let no;  no="не ";
    f = Math.floor(Math.random() * 2)
    if (f == 1)
    { 
        i1++
        return yes;}
    else
    { 
        i2++;
        return no;
    } 
}
function coinToss()
{
    document.getElementById("JS1").innerHTML = name +" " +L() +mat;
    
    i++;
    document.getElementById("JS22").innerHTML = "Столько нажатий было сделанно = " + i;
    document.getElementById("JS21").innerHTML = "Столько раз "+name+" был"+ bukva1 +" "+ mat0+bukva2+ " = "+ i1;
}