/*
const quantitycell = document.getElementById("quantity");
const delbtn = document.getElementById("buttondel");
const plusbtn = document.getElementById("buttonplus");
const minusbtn = document.getElementById("buttonminus");*/
const order =document.querySelector(".order")
const choosenitem = document.getElementById("choosenitem");


/*
quantity=1

function quantitywrite(){
    quantitycell.innerHTML = quantity;
}

setInterval(quantitywrite, 100)
window.onload = quantitywrite()


plusbtn.addEventListener("click", function(){
    quantity++;
});

minusbtn.addEventListener("click", function(){
    if (quantity>1){
        quantity--;
    } 
});
*/

order.addEventListener("click", function(e){
    if (e.target.nodeName=="LI"){
        choosenitem.innerHTML+="<p><span>"+e.target.innerText+"</span><button>-</button><span id="+quantity+">1</span><button>+</button><button>CANCEL</button></p>"
    }
});