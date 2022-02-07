window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    var saveButton = document.getElementById('save');
    var cancelButton = document.getElementById('clear');
    var image = document.querySelector("img");

    const ctx = canvas.getContext("2d");

    canvas.height = 250;
    canvas.width = 400;

    ctx.drawImage(
        image, 0, 0, 400, 250
    )

    //Variablen
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e)
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath()
    }


    function draw(e){

        if(!painting) return;
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.strokeStyle = "red";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //EventListeners

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    saveButton.addEventListener('click', function (event) {
        var data = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(data)
        // Send data to server instead...
        //window.open(data);
    });

})