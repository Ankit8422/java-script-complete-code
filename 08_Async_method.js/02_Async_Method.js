console.log("Ankit");

setTimeout(function add(a=4, b=5){
    console.log(a+b);
    },3000)

    console.log("Hello javascript");

    console.log("Code ends");

    let count = 0;

    function incrementCounter(){
        count++;
        console.log("Counter:", count);
    }

    // Start the intervel, calling incrementCounter every 1000 milliseconds (1 second)
    const intervalId = setInterval(incrementCounter,1000)

    // After 5 seconds, stop the interval
    setTimeout(()  => {
        clearInterval(intervalId);
        console.log("Interval stopped.");
    }, 5000);
    