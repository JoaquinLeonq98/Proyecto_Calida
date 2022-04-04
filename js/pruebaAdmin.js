const a = [{usuario:1, contra:2}, {usuario:3, contra:4}, {usuario:5, contra:6}];
function prueba (usuario, contra){
    let b=false;
    for (let i=0; i<a.length; i++){
        if (a[i].usuario===usuario){
            if (a[i].contra===contra){
                let b = true;
                return b;
                break
            } else {
                break
            }
        } else {
            continue
        } 
    }//for
    return b;
}//function prueba
