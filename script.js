//selecting tabs
const lineTabs = document.getElementsByClassName("tab-item");

for (let i=0; i<lineTabs.length; i++) {
    lineTabs[i].addEventListener("click", function (event) {
        event.stopPropagation();
        const selectedTab = document.getElementsByClassName("selected")[0];
        selectedTab.classList.remove("selected"); //remove from current selected
        const clickedElement = event.target;//grab the clicked element
        clickedElement.classList.add("selected");//add to clicked element
    });
}

