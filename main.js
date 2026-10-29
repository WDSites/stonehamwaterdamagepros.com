(function(){
  var btn=document.querySelector(".menu-toggle"),menu=document.getElementById("primary-menu");
  if(!btn||!menu)return;
  function setOpen(o){menu.classList.toggle("open",o);btn.setAttribute("aria-expanded",o?"true":"false");btn.setAttribute("aria-label",o?"Close menu":"Open menu");}
  btn.addEventListener("click",function(){setOpen(!menu.classList.contains("open"));});
  menu.addEventListener("click",function(e){if(e.target.tagName==="A")setOpen(false);});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")setOpen(false);});
  window.addEventListener("resize",function(){if(window.innerWidth>900)setOpen(false);});
})();
