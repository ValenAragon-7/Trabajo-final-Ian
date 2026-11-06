class turnos{

}

class pacientes{

}

class SistemaTurno{
    constructor(){
        this.pacientes=[];
        this.turnos=[];
        this.cargarDatos();
    }
    cargarDatos(){
    let pacientes = localStorange.getItem("pacientes");
    let turno = localStorange.getItem("turnos");
    if (pacientes != null){
        this.pacientes=JSON.parse(pacientes);
    }
    if (turno != null){
        this.turnos=JSON.parse(turnos);
    }
}

guardarDatos(){
    localStorage.storage.getItem("pacientes",JSON.stringify(this.pacientes));
    localStorage.setItem("turnos",JSON.stringify(this.turnos));
}

buscarPaciente(dni){
    //metodo busca al paciente en vector
    //si lo encuentra devuelve el paciente (return).
    //si no devuelve null. 

}
}

