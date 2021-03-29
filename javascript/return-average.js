function average(scores){
//parameter input should be an array [1,2,3]. If you are using just average(1,2,3) that may be the problem
    var total = 0;
    for(var i = 0; i < scores.length; i++){
        total += scores[i];   // total += scores[i] is short for total = total + scores[i]
};
average = total/scores.length;
return(average);
};



function average(arg){
    var total = 0;
    for(var i = 0; i < arg.length; i++){
       total += arg[i];
    }
    var avg = total / arg.length;
    console.log(Math.ceil(avg));

}

var scores = [90, 98, 89, 100, 100, 86, 94]; average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]; average(scores2); //should return 68


