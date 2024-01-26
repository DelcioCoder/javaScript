document.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('button').forEach(function(button){
        button.onclick = () => {
            document.querySelector('h1').style.color = button.dataset.color
        }

    })
} )