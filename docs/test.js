


//window.kmpJsBridge.callNative = function (methodName, params, callback) {}
document.getElementById('myButton').addEventListener('click', function() {
document.getElementById("subtitle").innerText = "New Text";
            window.kmpJsBridge.callNative("Greet",JSON.stringify({message:"Hello"}),
                      function (data) {
                        document.getElementById("subtitle").innerText = data;
                        console.log("Greet from Native: " + data);
                      });
        });


