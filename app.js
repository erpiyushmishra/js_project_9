const input = document.querySelector(".inp");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".list p");



input.addEventListener("keydown", (e)=>{
    if (e.key==="Enter"){
        if(input.value !==""){
            const list_item=document.createElement("p");
            list_item.innerText = `- ${input.value}`;
            list.appendChild(list_item);
            list_item.addEventListener("click",()=>{
                list_item.style.display="none";
            })
        input.value="";
        }
    }
})
