// //callback - функция обратного вызова
// const first = ()=> {
//     setTimeout(()=>{
//         console.log(1)
//     }, 1000)
// }
// const second = ()=> {
//     console.log(2)
// }
//
// first()
// second()
//
// function getSquareNums(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++){
//         newArray.push(arr[i] ** 2)
//     }
//     return newArray
// }
//
// console.log(getSquareNums([2,2,2,2]))
//
// function getSquareNums2(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++){
//         newArray.push(arr[i] / 2)
//     }
//     return newArray
// }
//
// console.log(getSquareNums2([2,2,9,7]))
//
//
//
// //callback
//
// function doSomeMath(array, todo) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++){
//         newArray.push(todo(array[i]))
//     }
//     return newArray
// }
// function sum(num) {
//     return num + 2
// }
// function sum2(num) {
//     return num -2
// }
//
// console.log(doSomeMath([1,2,3,4,5],sum))
// console.log(doSomeMath([1,2,3,4,],sum2))


const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (!input.value.trim()){
        input.value = ''
        return false
    }else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButton = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class' ,'edit_button')
        divButton.setAttribute('class' ,'div_button')
        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'
        text.innerHTML = input.value

        divButton.append(deleteButton, editButton)
        div.append(text, divButton)
        todoList.prepend(div)

        editButton.addEventListener('click', ()=>{
            const newText = prompt('Edit').trim()
            newText === '' ? text.innerHTML: text.innerHTML = newText
            const textElement = document.getElementById('text')
            textElement.innerHTML = newText

        })
        deleteButton.addEventListener('click', ()=>{
            div.remove()
        })
        input.addEventListener('input', () => {})
        clearTimeout(text)
        setTimeout(() => {
            input.value = ''
        }, )
       }
}

createButton.onclick = () => createTodo()



