document.getElementById('btn1').click();
function openTab(btn, tabs) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    let buttons = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      buttons[i].classList.remove('active');
    }
    
    let currentTab = document.getElementById(tabs);
    currentTab.style.display = "block";
    let activeBtn = document.getElementById(btn);
    activeBtn.className += " active";
  }