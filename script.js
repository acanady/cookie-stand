window.onload = function() {
    function setLogoPadding(){
        let elem_style = getComputedStyle(document.getElementById("bg_left"));
        let logo = document.getElementById("logo");    
        logo.style.paddingLeft = parseFloat(elem_style.width) - 50 + 'px';
    }
    
    setLogoPadding();
    window.addEventListener('resize', setLogoPadding);
};
