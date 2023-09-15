function display(values){
    document.getElementById('Result').value+=values
}

function calculate(){
       let initial_value = document.getElementById('Result').value;
       let q= eval(initial_value)
       document.getElementById('Result').value=q;

}

function deleteitem(){
    console.log('function reached')
    let initial_value = document.getElementById('Result').value;
    console.log(initial_value)
    let initial_value_len = initial_value.length; // Corrected 'len' to 'length'
    console.log(initial_value_len)
    let n = initial_value_len - 1;
    console.log(n)
    console.log(typeof(n))
    const final_value = initial_value.substring(0, n);
    console.log(final_value)
    document.getElementById('Result').value = final_value;
    
}

function clearAll(){
    document.getElementById('Result').value="";

}
