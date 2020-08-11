function insert(num)
{
    document.form.textviev.value = document.form.textviev.value + num;
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
    }
}z