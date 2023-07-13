document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').addEventListener('click', function(event){
    document.querySelector('#red').addEventListener('click', function(){
            document.body.style.backgroundColor='red'
        });
        document.querySelector('#green').addEventListener('click',function(){
            document.body.style.backgroundColor='green'
        });
        document.querySelector('#blue').addEventListener('click',function(){
            document.body.style.backgroundColor='blue'
        });
        event.preventDefault();
    });
});