function post(canvas) {
    fetch("http://localhost:5000?canvas=" + canvas, {
        method: "POST",
        cors: "no-cors"
    });
}