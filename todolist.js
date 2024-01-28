document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submit').disabled = true
    document.querySelector('#task').onkeyup = () => {
        document.querySelector('#submit').disabled = false
    }



    document.querySelector('form').onsubmit = () => {
        let li = document.createElement('li')
        let task = document.querySelector('#task').value
        li.innerHTML = task
        document.querySelector('#tasks').append(li)
        document.querySelector('#task').value = ''
        document.querySelector('#submit').disabled = true
    } 


    document.querySelector('button').onclick = () => {
        document.querySelector('#tasks').innerHTML = ''
    }
})