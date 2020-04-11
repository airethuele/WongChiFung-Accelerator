var ctx = document.querySelector('canvas').getContext('2d')

var bg = new Image();
bg.src = 'h.png'
bg.onload = function () {
    ctx.drawImage(bg, 0, 0);
}

document.querySelector("#img_input").addEventListener("change", function () {
    if(!event.target.files[0]) return false
    
    ctx.clearRect(0,0,701,701)
    ctx.setTransform(1,0,0,1,0,0);
    ctx.drawImage(bg, 0, 0);

    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = function () {
        var ru = new Image();
        ru.src = event.target.result
        ru.onload = function () {
            ctx.setTransform(1,-0.045,0,1,0,0);
            ctx.drawImage(ru, 0, 0,ru.width,ru.height,53,342,453,259)
        }
    }
});