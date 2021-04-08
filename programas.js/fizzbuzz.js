let fizzbuzz = (num1,num2,palabra1,palabra2) => {
for(let i=1; i<=100; i++){
    let variable=""
    if (i%num1==0){
     variable+= palabra1
    }if(i%num2==0){
     variable+=palabra2
    } console.log(variable || i)
    }
}

fizzbuzz(3,5,"Aguante ","Zelda")