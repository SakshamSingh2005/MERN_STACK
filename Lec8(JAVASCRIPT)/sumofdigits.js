function add(){
    x=prompt();
    let sum=0,rem;
    while(x>0){
        rem=x%10;
        sum+=rem;
        x=Math.floor(x/10);
    }
    console.log(sum);
    
}

add();