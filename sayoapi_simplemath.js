sayoapi_argerr = () => alert("Illegal Argument.");
sayoapi_oddcalc = func => func % 2 != 0;
function sayoapi_rouding_arrays(func){
    if (Array.isArray(func)){
        let count = 0;
        let func1 = [];
        while (count < func.length){
             func1.push (Math.trunc(func[count]))
            count ++;
        }
        return func1
    } else {
        sayoapi_argerr();
    }
} 