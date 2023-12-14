async function getData() {
    try {
    const res = await fetch("http://localhost:3000/getemployees")
    const data = await res.json()
    displayData(data);
    } catch(err){
        console.log(err);
    }
}
//
function displayData(arr){
    let outHTML="";
    for(let i=0; i < arr.length; i++){
        outHTML+="<p>"+arr[i].empname + " using password " + arr[i].emppass + "</p>"
    }
    document.getElementById("documents").innerHTML = outHTML;
}

// function validateForm() {
//     let alphaOnly = /^[A-Zz-z]+$/;
//     document.getElementById("nameMessage").innerHTML="";
//     document.getElementById("weightMessage").innerHTML="";
//     //
//     return true;
// }