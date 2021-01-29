const inputTodo = document.getElementById("todo")
const addBtn = document.getElementById("add")
const list = document.getElementById("list")

let newTodoElsarr = []

addBtn.addEventListener("click",(e) =>{

    e.preventDefault()
    
    let patternTodo1 = new RegExp('^ +$')
    if(patternTodo1.test(inputTodo.value) == true ||
    inputTodo.value == "" ||
    newTodoElsarr.find(item => item == inputTodo.value)
    ){
        alert("Your todo is wrong")
    }else{
        newTodoElsarr.push(inputTodo.value)
        console.log(newTodoElsarr)
        addTodo()
    }
})

function addTodo(){

    let newLi = document.createElement("li")
    newLi.innerHTML = `${inputTodo.value}`
    let removeEl = document.createElement("button")
    removeEl.innerHTML = "Sil"
    removeEl.addEventListener("click",() =>{
        newLi.classList.add("active")
    })
    let markBtn = document.createElement("button")
    markBtn.innerHTML = "Mark as done"
    let flag = true
    markBtn.addEventListener("click",() =>{
       if(flag == true){
           newLi.classList.add("line")
           flag = false
       }else{
           newLi.classList.remove("line")
           flag = true
       }
    })
    newLi.appendChild(removeEl)
    list.appendChild(newLi)
    list.appendChild(markBtn)
    inputTodo.value = ""
}

