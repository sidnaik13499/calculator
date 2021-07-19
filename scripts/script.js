var temp = 0;
/******************************** INPUT FUNCTIONS ****************************************/
function inp0(){ 
    document.getElementById("dis").value += document.getElementById("b0").value;    
    document.getElementById("ans").value = "";
}
function inp1(){ 
    document.getElementById("dis").value += document.getElementById("b1").value; 
    document.getElementById("ans").value = "";
    
}
function inp2(){ 
    document.getElementById("dis").value += document.getElementById("b2").value; 
    document.getElementById("ans").value = "";   
}
function inp3(){ 
    document.getElementById("dis").value += document.getElementById("b3").value; 
    document.getElementById("ans").value = "";   
}
function inp4(){ 
    document.getElementById("dis").value += document.getElementById("b4").value; 
    document.getElementById("ans").value = "";   
}
function inp5(){ 
    document.getElementById("dis").value += document.getElementById("b5").value;   
    document.getElementById("ans").value = ""; 
}
function inp6(){ 
    document.getElementById("dis").value += document.getElementById("b6").value; 
    document.getElementById("ans").value = "";   
}
function inp7(){ 
    document.getElementById("dis").value += document.getElementById("b7").value; 
    document.getElementById("ans").value = "";   
}
function inp8(){ 
    document.getElementById("dis").value += document.getElementById("b8").value; 
    document.getElementById("ans").value = "";   
}
function inp9(){ 
    document.getElementById("dis").value += document.getElementById("b9").value; 
    document.getElementById("ans").value = "";   
}
function inpdo(){ 
    document.getElementById("dis").value += document.getElementById("bdo").value;  
    document.getElementById("ans").value = "";  
}


function inpa(){ 
    document.getElementById("dis").value += document.getElementById("sum").value;    
}
function inps(){ 
    document.getElementById("dis").value += document.getElementById("sub").value;    
}
function inpm(){ 
    document.getElementById("dis").value += document.getElementById("mul").value;    
}
function inpd(){ 
    document.getElementById("dis").value += document.getElementById("div").value;    
}
function inpmo(){ 
    document.getElementById("dis").value += document.getElementById("mod").value;    
}

/*************************** CALCULATIONS FUNCTIONS***************************************/

function eq(){ 
    var disp = document.getElementById("dis").value;
    if (document.getElementById("ans").value==""){      
        document.getElementById("ans").value = eval(disp);
        document.getElementById("dis").value = ""; 
    }else{
        document.getElementById("ans").value=eval( document.getElementById("ans").value + disp );
        document.getElementById("dis").value = "";
    }
     
    // var i = disp.indexOf("+");
    // var sub = disp.substring(i+1,disp.length);
    // while(document.getElementById("ans").value!=""){
    //     document.getElementById("ans").value =eval(document.getElementById("ans").value + sub);
    // }
    
} 

function clr(){
    document.getElementById("ans").value = "";
    document.getElementById("dis").value = "";
} 

function bck(){
    var str = document.getElementById("dis").value;
    document.getElementById("dis").value = str.substring(0, str.length - 1);
}

