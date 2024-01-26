const wrapper=document.querySelector(".sliderWrapper")
const menuItem=document.querySelectorAll(".menuItem")  /*Here querySelectorAll is used because there are multiple items  */

menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
    });
});