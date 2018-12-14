(function(){
    function fixPolygon(){
        let bodyHeight = document.body.clientHeight;
        let bodyWidth = document.body.clientWidth;
        console.log("resized");
        let polygon = document.getElementById("polygon");
        if (bodyWidth <= 450){
            polygon.style.height = bodyHeight + "px";
        }
    }
    fixPolygon();
    window.addEventListener("resize", fixPolygon);
}());