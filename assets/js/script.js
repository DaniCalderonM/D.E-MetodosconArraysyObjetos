//FUNCIONES AL INICIO
//EJERCICIO 3
//Funcion con "for of" para recorrer el array y sus objetos en Dental.
//Mediante un document.write estamos mostrando en el html los valores
//solicitados de dental.
function imprimirDental(copiaDental) {
    let impresion = "";
    for (const valor of copiaDental) {
        impresion += `<p>
            ${valor.hora} - ${valor.especialista} - ${valor.paciente} - ${valor.rut} - ${valor.prevision}
            </p>`;
    }
    document.write(impresion);
}

//EJERCICIO 4
//Creamos un arreglo vacio.
const listadoPacientes = [];

//Creamos la funcion para agregar mediante un .push 
//los valores que encuentre al arreglo vacio.
function agregarPacientes(array) {
    for (const respuesta of array) {
        listadoPacientes.push(respuesta.paciente);
    }
}
//Creamos la funcion para mostrar por html y por un parrafo
//los valores encontrados en listadoPacientes.
function mostrarPacientes() {
    for (const paciente of listadoPacientes) {
        document.write(`<p>${paciente}</p>`);
    }
}

//EJERCICIO 5
//Creamos la funcion filtroIsapre para encontrar a los pacientes
//de Dental que pertenecen a ISAPRE.
function filtroIsapre(consulta) {
    return consulta.prevision === 'ISAPRE';
}
//Creamos la funcion mostrarResultado para mostrarlos en el html
//esta funcion sera reutilizada en el siguiente ejercicio.
function mostrarResultado(resultado) {
    document.write(`<p>${resultado.paciente} - ${resultado.prevision}</p>`);
}

//EJERCICIO 6
//Creamos la funcion filtroFonasa para encontrar a los pacientes
//de Traumatologia que pertenecen a Fonasa.
function filtroFonasa(consulta) {
    return consulta.prevision === 'FONASA';
}

//Apoyo Desafio
document.write('<h1>Estadisticas centro medico ñuñoa</h1>');
const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];
//Apoyo Desafio
const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];
//Apoyo Desafio
const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí:

//Copia del arreglo de objetos radiologia.
const [...copiaRadiologia] = radiologia;
//console.log("Copia del Array radiologia: ", copiaRadiologia);

//Copia del arreglo de objetos traumatologia.
const [...copiaTraumatologia] = traumatologia;
//console.log("Copia del Array traumatologia: ", copiaTraumatologia);

//Copia del arreglo de objetos dental.
const [...copiaDental] = dental;
//console.log("Copia del Array Dental: ", copiaDental);

//1. Agregar las siguientes horas al arreglo de Traumatología:
//HORA ESPECIALISTA PACIENTE RUT PREVISIÓN
//09:00 RENÉ POBLETE ANA GELLONA 13123329-7 ISAPRE
//09:30 MARIA SOLAR RAMIRO ANDRADE 12221451-K FONASA
//10:00 RAUL LOYOLA CARMEN ISLA 10112348-3 ISAPRE
//10:30 ANTONIO LARENAS PABLO LOAYZA 13453234-1 ISAPRE
//12:00 MATIAS ARAVENA SUSANA POBLETE 14345656-6 FONASA
//con .push añadimos objetos y se suman al final del arreglo de objetos.
copiaTraumatologia.push({ hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' })
copiaTraumatologia.push({ hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' })
copiaTraumatologia.push({ hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' })
copiaTraumatologia.push({ hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' })
copiaTraumatologia.push({ hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' })
console.log("Añadiendo los objetos nuevos con push en copiaTraumatologia: ", copiaTraumatologia);

//2. Eliminar el primer y último elemento del arreglo de Radiología.
//Con .shift eliminamos el primer elemento.
copiaRadiologia.shift();
//Con .pop eliminamos el ultimo elemento.
copiaRadiologia.pop();
console.log("Pacientes arreglo de objeto original radiologia: ", radiologia);
console.log("Pacientes arreglo de objeto luego del shift y el pop en copiaRadiologia: ",copiaRadiologia);

//3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime
//conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
//separando por un guión cada dato desplegado y cada fila de información debe estar
//separada por un párrafo 
//Ejemplo:
//8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
//11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...

//Llamamos a la función imprimirDental pasando el arreglo de objetos copiaDental
document.write('<h2><u>Lista Consultas Medicas de Dental</u></h2>');
imprimirDental(copiaDental);

//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
//Ejemplo:
//FRANCISCA ROJAS
//PAMELA ESTRADA
//ARMANDO LUNA…

//Agregamos a los pacientes de cada array
//pasando como argumentos las copias a la funcion agregarPacientes.
agregarPacientes(copiaRadiologia);
agregarPacientes(copiaTraumatologia);
agregarPacientes(copiaDental);

document.write('<h2><u>Listado Actualizado de todos los pacientes del Centro Medico</u></h2>');
//Llamamos a la funcion mostrarPacientes que nos permite mostrar a los pacientes en el html.
mostrarPacientes();

//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
//de Dental
//Ejemplo:
//MARCELA RETAMAL - ISAPRE
//ANGEL MUÑOZ - ISAPRE
//ANA SEPULVEDA - ISAPRE

//Creamos la variable para utilizar .filter en la funcion filtroIsapre
//y asi obtener los pacientes de dental con Isapre.
const pacientesISAPRE = copiaDental.filter(filtroIsapre);

document.write('<h2><u>Pacientes Dental - Isapre</u></h2>');
//Aplicamos .forEach para recorrer cada elemento del array y
//se lo aplicamos a la funcion mostrarResultado para mostrarlo en el html.
pacientesISAPRE.forEach(mostrarResultado);

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
//de Traumatología
//Ejemplo:
//PAULA SÁNCHEZ – FONASA

//Creamos la variable para utilizar .filter en la funcion filtroFonasa
//y asi obtener los pacientes de traumatologia con Fonasa.
const pacientesFonasa = copiaTraumatologia.filter(filtroFonasa);

document.write('<h2><u>Pacientes Traumatologia - Fonasa</u></h2>');
//Aplicamos .forEach para recorrer cada elemento del array y
//se lo aplicamos a la funcion mostrarResultado para mostrarlo en el html.
//Aqui fue reutilizada la funcion mostrarResultado.
pacientesFonasa.forEach(mostrarResultado);
