function fn(callback) {
    setTimeout(function () {
        var data = 200
        callback(data)
    }, 1000)
}

function fn2(callback) {
    fn(function(data){
        callback(data)
    })
    
}

fn2(function(data){
    console.log(data)
});