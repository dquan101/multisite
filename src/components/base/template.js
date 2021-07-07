const template_variables = {
    "doctorName": {
        "value": "Alejandro Madraz",
        "type": "innerHTML"
    },
    "doctorSlogan": {
        "value": "Medicos de verdad",
        "type": "innerHTML"
    },
    "doctorPhoneAction": {
        "value": "+502 3386-6530",
        "type": "innerHTML"
    },
}


document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    // document.getElementById("doctorName").innerHTML = "Jose Antonio Ruano";
    // document.getElementById("doctorSlogan").innerHTML = "Medicos de verdad";
    // document.getElementById("doctorPhoneAction").innerHTML = "+502 3386-6530";
    // document.getElementById("doctorPhoneAction").setAttribute("href", "tel:+50233866530");
    Object.entries(template_variables).forEach(([key, value]) => {
        console.log(key, value)
        switch (value.type) {
            case "innerHTML":
                document.getElementById(key).innerHTML = value.value;
                break;

            default:
                break;
        }
    });
});