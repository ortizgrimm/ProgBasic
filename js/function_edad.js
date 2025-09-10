function CalcularEdad(){
    const input = document.getElementById("fecha_nac").value;
    const resultado = document.getElementById("resultado");

    if (!input){
        resultado.textContent = "Por favor ingresa una fecha de nacimiento"
        return;
    }

    const fecha = new Date(input);
    const today = new Date();
    
    let edad = today.getFullYear() - fecha.getFullYear();
    let mes = today.getMonth()- fecha.getMonth();

    if(mes < 0 || (mes === 0 && today.getDate() < fecha.getDate())){
        edad--;

    }

    resultado.textContent = `Tienes ${edad} años`;

    const date_ejm = new Date();
    console.log(date_ejm);
    console.log("Dia Semana: " + date_ejm.getDay());
    console.log("Dia Mes: " + date_ejm.getDate());
    console.log("Mes: " + (date_ejm.getMonth() + 1));
    console.log("Año: " + date_ejm.getFullYear());
    console.log("Hora: " + date_ejm.getHours());
    console.log("Minutos: " + date_ejm.getMinutes());
    console.log("Segundos: " + date_ejm.getSeconds());
    console.log("Milisegundos: " + date_ejm.getMilliseconds());

    const meses =[
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    console.log("Dia de la semana: " + dias[(date_ejm.getDay() -1)]);
    console.log("Mes del Año: " + meses[date_ejm.getMonth()]);
}