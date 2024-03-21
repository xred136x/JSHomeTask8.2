var count = 0;
const interval = 2000;
var intervalIndex = 0;

const start = document.querySelector('#btn');
start.addEventListener('click', () => {
    container.innerHTML = '';
    createDeleteBug();
    clearInterval(intervalIndex);
    movingBug();
    
});

function createDeleteBug(){    
    for(let i=0;i<5;i++) {
        let newBlock = document.createElement('img');
        newBlock.id = `block${i}`;
        newBlock.className = 'bug';
        newBlock.setAttribute("src", "images/bug.png");
        newBlock.addEventListener('click', e => {
            e.target.remove();
            count++;
            console.log(count);
            if(count===5){
                alert('Вы выиграли!');}
        });
        container.appendChild(newBlock);
    }
}

function movingBug(){
    intervalIndex = setInterval(()  => {
        for(let e=0; e<5; e++){
            const bg = document.querySelector(`#block${e}`)
            if(bg){
            bg.style.left = Math.round(Math.random()*550) + 40 + 'px';
            bg.style.top = Math.round(Math.random()*360) + 20 + 'px';
            }              
        }                        
    }, interval);
}


