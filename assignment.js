//                                             (1)   feetToMile  er assignment

function feetToMile (feet){
    var mile = feet/5280 ;
    return mile ;
}
var convertFeetToMile = feetToMile();
console.log(convertFeetToMile)

//                                         ====================End ===============







//                                                (2)    ====woodcalculator er assingment ======


function woodcalculator (chare,table,khat){
    var chareQbFeet = chare*1 ;
    var tableQbFeet = table*3 ;
    var khatQbFeet = khat*5;
    var totalQbikFeet = chareQbFeet+tableQbFeet+khatQbFeet;
    return totalQbikFeet;
}
var chareTableKhatToConvertTotalFeet = woodcalculator();
console.log( chareTableKhatToConvertTotalFeet);

//                                                  ======================== end=====================








//                                                         (3) ========== brickcalculator assingment  ==========
 



 function brickcalculator (tala){
     var oneFeetByIt =1000 
      
    if (tala<=10){
        tala = tala*15
        tala= tala*oneFeetByIt
    }else if (tala <= 20 ){
        tala = tala*12
        tala= tala*oneFeetByIt
    }else if (tala >= 21 ){
        tala = tala*10
        tala= tala*oneFeetByIt
    }
    return tala
}
        var bildinErTala = brickcalculator()
         console.log(bildinErTala)



//                                              ===============End=================






//                                              (4)  =========tinyFriend  assingment =====




function  tinyFriend (chackSmallName){
    var minName = chackSmallName[0];
    for(var i = 0; i < chackSmallName.length; i++){
        var result = chackSmallName[i];
        if (result < minName){
            minName = result
            
        }
    }
    return minName ;
}
    var chackresult = tinyFriend([]);
    console.log(chackresult);

    //                                       ================== End=========================