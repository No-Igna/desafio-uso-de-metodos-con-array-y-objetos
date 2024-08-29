document.write('<p>Estadisticas centro medico ñuñoa</p>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


//Agregar código para el desafio 2 aquí
traumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE ',          paciente: 'ANA GELLONA',    rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR',            paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',            paciente: 'CARMEN ISLA ',   rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',        paciente: 'PABLO LOAYZA',   rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',         paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'});

//No creo que fuera necesario, pero agregue esta funcion para ordenarlos por hora de llegada, volviendo la hora un numero entero (por ejemplo, las 9:00 seria 900 y las 10:00 seria 1000) y comparando estos valores devuelve los valores que arrojaria normalmente la funcion (a,b)=>a-b, de modo que si 'a' es menor que 'b' devuelve un numero negativo, siendo 'a' mayor devuelve uno positivo y si son iguales devuelve 0.
traumatologia=traumatologia.sort((a,b)=>{
    let aValue= parseInt(a.hora.replace(":",""));
    let bValue= parseInt(b.hora.replace(":",""));
    if(aValue<bValue) return -1;
    if(aValue>bValue) return 1;
    return 0    
});
//Agregar código para el desafio 2 aquí
radiologia.shift();
radiologia.pop();

//-------
document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);

//imprimir lista de consultas, separando cada dato desplegado por un - y cada fila separada por un parrafo.
const requerimiento3= arreglo =>{
    arreglo.forEach(fila => {
        document.write(`<p>${fila.hora} - ${fila.especialista} - ${fila.paciente} - ${fila.rut} - ${fila.prevision}</p>`);
    });
};
requerimiento3(dental);
//listado de todos los pacientes que se atendieron en el centro medico.
let todasLasConsultas = radiologia.concat(traumatologia,dental);
//lo mismo que antes, prefiero esto ordenado por hora de atencion.
todasLasConsultas=todasLasConsultas.sort((a,b)=>{
    let aValue= parseInt(a.hora.replace(":",""));
    let bValue= parseInt(b.hora.replace(":",""));
    if(aValue<bValue) return -1;
    if(aValue>bValue) return 1;
    return 0    
});
const pacientes = arreglo =>{
    arreglo.forEach(nombre => {
        document.write(`<p>${nombre.paciente}</p>`)
    })
};
pacientes(todasLasConsultas);

//filtrar a todos los pacientes con ISAPRE de la lista de consultas de Dental.
const requerimiento5 = arreglo =>{
    let isapre = arreglo.filter(atencion => atencion.prevision ==='ISAPRE');
    isapre.forEach(pacienteConIsapre =>{
        document.write(`<p>${pacienteConIsapre.paciente} - ${pacienteConIsapre.prevision}</p>`);
    });
};
requerimiento5(dental);
//filtrar a todos los pacientes con FONASA de la lista de consultas de Traumatologia.
const requerimiento6 = arreglo =>{
    let fonasa = arreglo.filter(atencion => atencion.prevision ==='FONASA');
    fonasa.forEach(pacienteConFonasa =>{
        document.write(`<p>${pacienteConFonasa.paciente} - ${pacienteConFonasa.prevision}</p>`);
    });
};
requerimiento6(traumatologia);