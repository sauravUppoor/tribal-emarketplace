
    var tabButtons = document.querySelectorAll(".tab-container .button-container button");
    var tabPanels = document.querySelectorAll(".tab-container .tab-panel");
    var filename= location.pathname.split('/').pop(); 

    function showPanel(panelIndex, colourCode) {
        tabButtons.forEach(function(node) {
            node.style.backgroundColor="";
            node.style.color="";
            node.style.borderBottom="1px solid #d0cece";
        });
        console.log(colourCode);
        var colorSelected = (colourCode == 1)? "rgba(79,99,88,1)" : "rgba(191,90,78,1)";
        tabButtons[panelIndex].style.borderBottom="2px solid " + colorSelected;
        tabPanels.forEach(function(node) {
            node.style.display="none";
        });
        tabPanels[panelIndex].style.display="block";
    }
    
    var i = (filename == "user.html")? 1 : 0;
    showPanel(0, i);
    
