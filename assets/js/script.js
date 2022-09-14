window.onload = () =>{
    var collapse = document.getElementById("collapse");
    var menu = document.getElementById("menu");
    var menu_item = document.getElementById("menu_item");

    if(collapse){
        collapse.addEventListener("click", ()=>{
            if (menu.style.display == "block"){
                menu.style.display = "none";
            }else{
                menu.style.display = "block";
            }
        })

        if(menu){
            menu.addEventListener("mouseleave", ()=>{
                menu.style.display = "none";
            })
        }
        if(menu_item){
            menu.addEventListener("click", ()=>{
                menu.style.display = "none";
            })
        }
    }
}
