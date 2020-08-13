let text; text="пустота";

function insert(num)
{
    OBR_slova();

    document.form.textviev.value = document.form.textviev.value + num;    
}

function znak(num)
{
    
    OBR_slova();

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
    {
        znak(num);
    }
    
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
    OBR_skobka();

    let exp = document.form.textviev.value ;

    if(exp)
    {   
        document.form.textviev.value = eval(exp)
        OBR_neopr();
    }
}

function OBR_neopr()
{
    if (document.form.textviev.value == "Infinity")
    {
        document.form.textviev.value = "на 0 делить нельзя! "; 
        text=document.form.textviev.value;
    }

    if (document.form.textviev.value == "NaN")
    {
        document.form.textviev.value = "Неопределенность ";
        text=document.form.textviev.value;
    }
    
}

function OBR_skobka()
{ 
    let str = document.form.textviev.value;
    let f=str.replace(/[^(]/g, "").length;
    
    for(i=0;i<f;i++)
    {
        document.form.textviev.value = document.form.textviev.value + ")";
    }
}

function OBR_slova()
{
    if (document.form.textviev.value == text)
        {
            document.form.textviev.value ="";
        }
}
