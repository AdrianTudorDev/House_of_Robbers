var numar = [1,5,1,6,9,9,7,0,40,100,100]

const L = numar.length

var sum = 0

for (let i = 0; i < L - 2; i++){
    for (let j = i + 2; j < L; j++){
        if(sum <= numar[i] + numar[j]){
            sum = numar[i] + numar[j]
        }   
    }
}
for (let i = 0; i < L; i++) {
    if(sum <= numar[i]){
        sum = numar[i]
    }   
}

console.log(sum)