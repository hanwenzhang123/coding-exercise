function average(scores){
//parameter input should be an array [1,2,3]. If you are using just average(1,2,3) that may be the problem
    var total = 0;
    for(var i = 0; i < scores.length; i++){
        total += scores[i];   // total += scores[i] is short for total = total + scores[i]
};
average = total/scores.length;
return(average);
};
