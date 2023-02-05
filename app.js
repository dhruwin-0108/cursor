let cursorValue = ['alias','all-scroll','auto','cell','col-resize','context-menu','copy','crosshair','default','e-resize','ew-resize','grab','grabbing','help','move','n-resize','ne-resize','nesw-resize','no-drop','none','not-allowed','ns-resize','nw-resize','nwse-resize','pointer','progress','row-resize','s-resize','se-resize','sw-resize','text','vertical-text','w-resize','wait','zoom-in','zoom-out','-moz-grab','-moz-grabbing','-moz-zoom-in','-moz-zoom-out','-webkit-grab','-webkit-grabbing','-webkit-zoom-in','-webkit-zoom-out','inherit','initial','unset'];

let cards = document.querySelectorAll(".cards");

for (var i=0; i<cards.length; i++){
    cards[i].style.cursor = cursorValue[i];
}