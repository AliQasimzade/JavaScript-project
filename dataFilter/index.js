const dataElements = [

    {
        name:"Ali",
        surname:"Qasimzade",
        age:"21"
    },
    {
        name:"Sona",
        surname:"Jebrailova",
        age:"19"
    },
    {
        name:"Rahil",
        surname:"Aliyev",
        age:"23"
    },
    {
        name:"Eldar",
        surname:"Babayev",
        age:"29"
    },{
        name:"Orxan",
        surname:"Huseynli",
        age:"26"
    }
]

const searchDataElement = document.getElementById("searchDataElement")
let dataElement = document.getElementById("data")


function getDataElement(data){

    dataElement.innerHTML = ""

    for(let i=0;i<data.length;i++){

        dataElement.innerHTML += `<tr>
                                 <td>${data[i].name}</td>
                                 <td>${data[i].surname}</td>
                                 <td>${data[i].age}</td>
                                 </tr>
        `
    }
}
getDataElement(dataElements)

searchDataElement.addEventListener("input",(e) =>{
    let value = e.target.value
    let result = filterDataElements(value)
    getDataElement(result)
})

function filterDataElements(value){

    let newDataElement = []
    
    dataElements.filter(item =>{

        if(item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.surname.toLowerCase().includes(value.toLowerCase()) ||
        item.age.includes(value)){
            newDataElement.push(item)
        }
    })
    return newDataElement
}
