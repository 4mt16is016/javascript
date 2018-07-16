function validate(){
    var nameEle=document.getElementById("uname");
    
    var pwdEle=document.getElementById("pwd");
    var name=nameEle.value;
    var pwd=pwdEle.value;
    if(name.trim()==""){
          document.getElementById("erroruname").innerHTML="user name cannot be empty";
        nameEle.style.border="lpx solid red ";
        return false;
      
    }
    if(pwd.trim()==""){
        document.getElementById("errorpwd").innerHTML="pwd cannot be empty";
            pwdEle.style.border="lpx solid red";
        return false;
        
    }
    
            
        
    }
    
