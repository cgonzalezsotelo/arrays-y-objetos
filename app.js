const radiology = [{
    Hora: "11:00",
    Especialista: "IGNACIO SCHULZ",
    Paciente: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    Previsión: "FONASA"
},
{
    Hora: "11:30",
    Especialista: "FEDERICO SUBERCASEAUX",
    Paciente: "PAMELA ESTRADA",
    RUT: "15345241-3",
    Previsión: "ISAPRE" 
},
{
    Hora: "15:00",
    Especialista: "FERNANDO WURTHZ",
    Paciente: "ARMANDO LUNA",
    RUT: "16445345-9",
    Previsión: "ISAPRE"
},
{
    Hora: "15:30",
    Especialista: "ANA MARIA GODOY",
    Paciente: "MANUEL GODOY",
    RUT: "17666419-0",
    Previsión: "ISAPRE"
},
{
    Hora: "16:00",
    Especialista: "PATRICIA SUAZO",
    Paciente: "RAMON ULLOA",
    RUT: "14989389-K",
    Previsión: "FONASA"
}]

const traumatology = [{
    Hora: "08:00",
    Especialista: "MARIA PAZ ALTUZARRA",
    Paciente: "PAULA SANCHEZ",
    RUT: "15554774-5",
    Previsión: "FONASA"
},
{
    Hora: "10:00",
    Especialista: "RAUL ARAYA",
    Paciente: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    Previsión: "ISAPRE" 
},
{
    Hora: "10:30",
    Especialista: "MARIA ARRIAGADA",
    Paciente: "ANA KLAPP",
    RUT: "17879423-9",
    Previsión: "ISAPRE"
},
{
    Hora: "11:00",
    Especialista: "ALEJANDRO BADILLA",
    Paciente: "FELIPE MARDONES",
    RUT: "1547423-6",
    Previsión: "ISAPRE"  
},
{
    Hora: "11:30",
    Especialista: "CECILIA BUDNIK",
    Paciente: "DIEGO MARRE",
    RUT: "16554741-K",
    Previsión: "FONASA" 
},
{
    Hora: "12:00",
    Especialista: "ARTURO CAVAGNARO",
    Paciente: "CECILIA MENDEZ",
    RUT: "9747535-8",
    Previsión: "ISAPRE" 
},
{
    Hora: "12:30",
    Especialista: "ANDRES KANACRI",
    Paciente: "MARCIAL SUAZO",
    RUT: "11254785-5",
    Previsión: "ISAPRE"
}]

const dental = [{
    Hora: "08:30",
    Especialista: "ANDREA ZUÑIGA",
    Paciente: "MARCELA RETAMAL",
    RUT: "11123425-6",
    Previsión: "ISAPRE"
},
{
    Hora: "11:00",
    Especialista: "MARIA PIA ZAÑARTU",
    Paciente: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    Previsión: "ISAPRE"
},
{
    Hora: "11:30",
    Especialista: "SCARLETT WITTING",
    Paciente: "MARIO KAST",
    RUT: "7998789-5",
    Previsión: "FONASA" 
},
{
    Hora: "13:00",
    Especialista: "FRANCISCO VON TEUBER",
    Paciente: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    Previsión: "FONASA"
},
{
    Hora: "13:30",
    Especialista: "EDUARDO VIÑUELA",
    Paciente: "HUGO SANCHEZ",
    RUT: "17665461-4",
    Previsión: "FONASA"
},
{
    Hora: "14:00",
    Especialista: "RAQUEL VILLASECA",
    Paciente: "ANA SEPULVEDA",
    RUT: "14441281-0",
    Previsión: "ISAPRE"
}]

// // Pacientes Radiología: Acá intenté pasar la primera y última atención de manera dinamica a través de shift y pop, pero entraba en conflicto al crear la tabla ya que estas propiedades eliminan el arreglo seleccionado, por lo tanto al imprimir los valores en la tabla no se visualizaban todos.

// console.log(`La primera atención es: ${radiology.shift().Paciente} - ${radiology.shift().Previsión}`);
// console.log(`La última atención es: ${radiology.pop().Paciente} - ${radiology.pop().Previsión}`);

// // Pacientes Traumatología
// console.log(`La primera atención es: ${traumatology.shift().Paciente} - ${traumatology.shift().Previsión}`);
// console.log(`La última atención es: ${traumatology.pop().Paciente} - ${traumatology.pop().Previsión}`);

// // Pacientes Dental
// console.log(`La primera atención es: ${dental.shift().Paciente} - ${dental.shift().Previsión}`);
// console.log(`La última atención es: ${dental.pop().Paciente} - ${dental.pop().Previsión}`);

// Pacientes Radiología
document.getElementById("radiology").innerHTML = `La primera atención es: ${radiology[0].Paciente} - ${radiology[0].Previsión} <br>
La última atención es: ${radiology[4].Paciente} - ${radiology[4].Previsión}` 
// console.log(`La primera atención es: ${radiology[0].Paciente} - ${radiology[0].Previsión}`);
// console.log(`La última atención es: ${radiology[4].Paciente} - ${radiology[4].Previsión}`);

// Pacientes Traumatología
document.getElementById("traumatology").innerHTML = `La primera atención es: ${traumatology[0].Paciente} - ${traumatology[0].Previsión} <br>
La última atención es: ${traumatology[6].Paciente} - ${traumatology[6].Previsión}`
// console.log(`La primera atención es: ${traumatology[0].Paciente} - ${traumatology[0].Previsión}`);
// console.log(`La última atención es: ${traumatology[6].Paciente} - ${traumatology[6].Previsión}`);

// Pacientes Dental
document.getElementById("dental").innerHTML = `La primera atención es: ${dental[0].Paciente} - ${dental[0].Previsión} <br>
La última atención es: ${dental[5].Paciente} - ${dental[5].Previsión}`
// console.log(`La primera atención es: ${dental[0].Paciente} - ${dental[0].Previsión}`);
// console.log(`La última atención es: ${dental[5].Paciente} - ${dental[5].Previsión}`);

// Tabla Arreglos

let tableHeaderRadiology = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>`;
let tableHeaderTraumatology = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>`;
let tableHeaderDental = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>`;

for (let i = 0; i < radiology.length; i++) {
    tableHeaderRadiology += `<tr>
        <td>${radiology[i].Hora}</td>
        <td>${radiology[i].Especialista}</td>
        <td>${radiology[i].Paciente}</td>
        <td>${radiology[i].RUT}</td>
        <td>${radiology[i].Previsión}</td>
    </tr>`;
};

for (let i = 0; i < traumatology.length; i++) {
    tableHeaderTraumatology += `<tr>
        <td>${traumatology[i].Hora}</td>
        <td>${traumatology[i].Especialista}</td>
        <td>${traumatology[i].Paciente}</td>
        <td>${traumatology[i].RUT}</td>
        <td>${traumatology[i].Previsión}</td>
    </tr>`;
};

for (let i = 0; i < dental.length; i++) {
    tableHeaderDental += `<tr>
        <td>${dental[i].Hora}</td>
        <td>${dental[i].Especialista}</td>
        <td>${dental[i].Paciente}</td>
        <td>${dental[i].RUT}</td>
        <td>${dental[i].Previsión}</td>
    </tr>`;
};

document.getElementById("table1").innerHTML = tableHeaderRadiology;
document.getElementById("table2").innerHTML = tableHeaderTraumatology;
document.getElementById("table3").innerHTML = tableHeaderDental;
