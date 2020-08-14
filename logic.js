let text; text="пустота";

function insert(num)
{
    let b = document.form.textviev.value.slice(0);
    if(b==")")
    {
        back();
    }
    OBR_skobka2();

    OBR_slova();

    document.form.textviev.value = document.form.textviev.value + num;    
}

function znak(num)
{
    OBR_skobka2();
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
{   OBR_skobka2();
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
    let z=str.replace(/[^)]/g, "").length;
    let sim = f-z;
    let i=0;


    for(i=0;i<sim;i++)
    {
        document.form.textviev.value = document.form.textviev.value + ")";
    }
   
}

function OBR_skobka2()
{
    let str = document.form.textviev.value;
    let f=str.replace(/[^(]/g, "").length;
    let z=str.replace(/[^)]/g, "").length;
    let target = "(";
    let minus = z-f;
    for(i=0;i<minus;i++)
    {
        back();
    }
}

/*function OBR_skobka3()
{ let str =document.form.textviev.value;
    let z =str.length;
    let y ;
 for(i=0;i<z;i++)
 {
     y = document.form.textviev.value.charAt(i)
     if(y=="(")
     {
        let i1 = document.form.textviev.value.charAt(i-1);
        alert("символ- "+y+"  номер - "+i+"\n"+" пред символ- "+i1);
      if (i1==0||i1==1||i1==2||i1==3||i1==4||i1==5||i1==6||i1==7||i1==8||i1==9)
      { alert(document.form.textviev.value.charAt(i));
       
      }
     }
    
  
 }    
}*/

function OBR_slova()
{
    if (document.form.textviev.value == text)
        {
            document.form.textviev.value ="";
        }
}
