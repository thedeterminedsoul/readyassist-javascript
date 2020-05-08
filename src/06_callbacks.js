function a() {
    console.log("Hello world")
}

function b(callback) {
    console.log("Im inside b");
    if(callback) {
        callback()
    }
}

b(a)