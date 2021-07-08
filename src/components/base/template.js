var template_variables = {
    "doctorName": {
        "value": "Alejandro Madrazo",
        "type": "innerHTML"
    },
    "doctorSlogan": {
        "value": "Medicos de verdad",
        "type": "innerHTML"
    },
    "doctorPhone": {
        "value": "+502 3386-6530",
        "type": "innerHTML"
    },
    "doctorPhoneText" : {
        "value": "Llama y reserva tu consulta",
        "type": "innerHTML"
    },
    "doctorAddress" : {
        "value": "0 calle, zona 9",
        "type": "innerHTML"
    },
    "ServicesTitle" : {
        "value" : "Servicios que se ofrecen",
        "type" : "innerHTML"
    },
    "Service1" : {
        "value" : "Pediatría Eficiente",
        "type" : "innerHTML"
    },
    "Service2" : {
        "value" : "Enfermeras con experiencia",
        "type" : "innerHTML"
    },
    "Service3" : {
        "value" : "Servicios de Atención Urgente",
        "type" : "innerHTML"
    },
    "Service1-Text" : {
        "value" : "Descripción 1",
        "type" : "innerHTML"
    },
    "Service2-Text" : {
        "value" : "Descripción 2",
        "type" : "innerHTML"
    },
    "Service3-Text" : {
        "value" : "Descripción 3",
        "type" : "innerHTML"
        }
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