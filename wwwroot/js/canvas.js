//window.addEventListener('load', () => {
//    const canvas = document.querySelector("#canvas");
//    const ctx = canvas.getContext('2d');

//   // size

//    let painting = false;

//    function startPosition(e) {
//        painting = true;
//        draw(e);
//    }
//    function endPosition() {
//        painting = false;
//        ctx.beginPath();
//    }
//    function draw(e) {
//        if (!painting) {
//            return;
//        }
//        ctx.lineWidth = 10;
//        ctx.lineCap = 'round';

//        ctx.lineTo(e.clientX, e.clientY);
//        ctx.stroke();
//        ctx.beginPath();
//        ctx.moveTo(e.clientX, e.clientY);
//    }

//    canvas.addEventListener('mousedown', startPosition);
//    canvas.addEventListener('mouseup', endPosition);
//    canvas.addEventListener('mousemove', draw);
//})

window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);


}