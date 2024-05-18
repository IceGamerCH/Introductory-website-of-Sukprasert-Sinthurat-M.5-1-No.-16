function activeShowPage() {
    let content = setTimeout(showPage, 3000)   
}

function showPage() {
    document.getElementById('load2').style.display = 'none'
    document.getElementById('load1').style.display = 'block'
}

let myBtn = document.getElementById("btt");

function scrollFuntion() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block";    
    } else {
        myBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFuntion();
}

function backtotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;    
}
