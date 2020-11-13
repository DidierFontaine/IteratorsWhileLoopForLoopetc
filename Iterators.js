const colors = ["yellow", "blue", "red", "orange"]
let index = 0
while (colors.length-1 >=index) {
    console.log(colors[index])
    index++
}

for (let index = 0; colors.length-1 >=index; index++){
    console.log(colors[index])
}

colors.forEach(function(color){
    console.log(color)
})