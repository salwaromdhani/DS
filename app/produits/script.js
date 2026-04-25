const addButtons = document.querySelectorAll('.add');
const recap = document.getElementById('recap');
let cart=[];

function updateRecap(){
    if(cart.length===0){recap.innerHTML="<p>Votre panier est vide.</p>";return;}
    let html="<ul>";
    let total=0;
    cart.forEach(item=>{
        const itemTotal=item.price*item.qty;
        total+=itemTotal;
        html+=`<li>${item.name} - ${item.qty} x ${item.price} TND = ${itemTotal} TND</li>`;
    });
    html+="</ul><strong>Total : "+total+" TND</strong>";
    recap.innerHTML=html;
}

addButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const productDiv=btn.parentElement;
        const name=productDiv.querySelector('h3').innerText;
        const price=parseFloat(productDiv.querySelector('.price').innerText);
        const qty=parseInt(productDiv.querySelector('.qty').value);
        const existing=cart.find(p=>p.name===name);
        if(existing){existing.qty+=qty;}else{cart.push({name,price,qty});}
        updateRecap();
    });
});
