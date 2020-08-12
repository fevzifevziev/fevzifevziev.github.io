function insert(num)
{
    document.form.textviev.value = document.form.textviev.value + num;
    
}
function znak(num)
{
    

    let a = document.form.textviev.value.slice(-1);
    
    if (a=="+"||a=="-"||a=="*"||a=="/"||a==".")
    {
        back();
    }
    document.form.textviev.value = document.form.textviev.value + num;
   
}
function znak2(num)
{
    let a = document.form.textviev.value;
    let b = document.form.textviev.value.slice(0);
    if(a!=""&&b!="+"&&b!="-")
        znak(num);
    
}

function clean()
{
    document.form.textviev.value = "";
}

function back()
{
    let exp = document.form.textviev.value ;
    document.form.textviev.value=exp.substring(0,exp.length-1);
}
function equal()
{
    let exp = document.form.textviev.value ;
    if(exp)
    {
        document.form.textviev.value = eval(exp)
        OBR1();
    }
}
function OBR1()
{
    if (document.form.textviev.value == "Infinity")
    {
        document.form.textviev.value = " на 0 делить нельзя! ";
        
    }
    if (document.form.textviev.value == "NaN")
    {
        document.form.textviev.value = "Неопределенность";
    }
}
