//FORM VALIDATION
function tc(a){
  var x = document.querySelector(a).value;
  return x;
}
function validate(){
  if (tc(".fname")==null || tc(".fname")=="") {
    alert("Please Enter name");
    return false;
  }
  if (!tc(".fname").match(/^[a-zA-Z]+$/))
    {
        alert("Please Enter A Valid Name!");
        return false;
    }
  if (tc(".email")==null || tc(".email")=="") {
    alert("Please Enter Email");
    return false;
  }
  if (tc(".phone")==null || tc(".phone")=="") {

    alert("Please Enter Phone Number");
    return false;
  }
  if(tc(".phone")<1000000000){
    alert("Please Enter Valid Phone Number");
    return false;
  }

    document.write("Thank you! for filling the form");
    return true;
}


//Palindrome

function myFunction()
{
  var str = document.getElementById('txtbox').value;
  var result = checkPalindrome(str);
  alert('The Entered String "'+str +'" is "'+result+'"');
  return;
}
function checkPalindrome(str)
{
  var orignalStr;
  str = str.toLowerCase();
  orignalStr = str;
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  var reverseStr = str;
  if(orignalStr == reverseStr){
    return 'Palindrome';
  }
  else
  {
    return 'Not Palindrome';
  }
}

//ANAGRAMS

function checkANAGRAM(stringA, stringB) {
        str=stringA;
        str2=stringB;
        stringA = stringA.replace(/[^\w]/g, '');
        stringA = stringA.toLowerCase();
        stringB = stringB.replace(/[^\w]/g, '');
        stringB = stringB.toLowerCase();
        stringA = stringA.split('');
        stringA = stringA.sort().join('');
        stringB = stringB.split('');
        stringB = stringB.sort().join('');
         if(stringA==="" || stringB==="")
         {
             alert("Please Enter The Strings");
             return false;
         }
      else if(stringA===stringB)
       {
           alert(str+" and "+str2+" are "+" ANAGRAMS!");
           return true;
       }

       else{
        alert(str+" and "+str2+" are "+" NOT ANAGRAMS!");
        return false;
       }
    }


//CALCULATOR
    function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    return c;
    }
    function sub(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a - b;
    document.getElementById("answer").value= c;
    return c;
    }
    function mul(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a * b;
    document.getElementById("answer").value= c;
    return c;
    }
    function div(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a / b;
    document.getElementById("answer").value= c;
    return c;
    }
    function square(){
    var a,b,c,d;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    d=Math.sqrt(a);
    c=d.toFixed(3);
    document.getElementById("answer").value= c;
    return c;
    }
    function abs(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=Math.abs(a);
    document.getElementById("answer").value= c;
    return c;
    }
    function percent(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=(a/100)*b;
    document.getElementById("answer").value= c;
    return c;
    }


//GAME OF Survival
    function Random()
    {
      var A=Math.floor(Math.random()*1000);
      var B=Math.floor(Math.random()*1000);
      document.getElementById('input1').value=A;
       document.getElementById('input2').value=B;
       return 0;
    }
    function play()
     {
       var A=document.getElementById('input1').value;
       var x=A%3;
       document.getElementById('input1').value=x;
       var B=document.getElementById('input2').value;
       var y=B%3;
       document.getElementById('input2').value=y;
       if(x==y)
       {
         alert("Tie");
         return true;
       }
       else if((x==0||y==0)&&(y==1||x==1))
       {
         alert("Human Wins");
         return true;
       }
       else if((x==1||y==1)&&(y==2||x==2))
       {
         alert("Cockroach Wins");
         return true;
       }
       else if((x==0||y==0)&&(y==2||x==2))
       {
         alert("Human Dies");
         return true;
       }
       else
       {
         alert("Try Again...!!!!");
         return false;
       }
       return  0;
     }
