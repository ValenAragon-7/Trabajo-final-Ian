class Turno {
    constructor(id, dniPaciente, especialidad, fecha) {
        this.id = id;            
        this.dniPaciente = dniPaciente; 
        this.especialidad = especialidad;
        this.fecha = fecha;
    }
    getId() {
        return this.id;
    }
    getDniPaciente() {
        return this.dniPaciente;
    }
    getEspecialidad() {
        return this.especialidad;
    }
    setEspecialidad(nuevaEspecialidad) {
        this.especialidad = nuevaEspecialidad;
    }
}

class Paciente {
    constructor(nombre, apellido, fechaNacimiento, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDni() {
        return this.dni;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    setDni(nuevoDni) {
        this.dni = nuevoDni;
    }
}

class SistemaTurno {
    constructor() {
        this.pacientes = [];
        this.turnos = [];
        this.cargarDatos();
    }

    cargarDatos() {
        let pacientes = localStorage.getItem("pacientes");
        let turnosData = localStorage.getItem("turnos");
        if (pacientes != null) {
            this.pacientes = JSON.parse(pacientes);
        }
        if (turnosData != null) {
            this.turnos = JSON.parse(turnosData);
        }
    }

    guardarDatos() {
        localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
        localStorage.setItem("turnos", JSON.stringify(this.turnos));
    }

    buscarPaciente(dni) {
        for (let i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].dni == dni) {
                return this.pacientes[i]; 
            }
        }
        return null;
    }

    buscarTurno(id) {
        for (let i = 0; i < this.turnos.length; i++) {
            if (this.turnos[i].id == id) {
                return this.turnos[i]; 
            }
        }
        return null;
    }
    horarioDisponible(tipo,fecha,hora,idExcluir=null){
        for( let i = 0; i<this.turnos.length; i++){
            let tActual=this.turnos[i];
            if(tActual.getCod()!=idExcluir && tActual.getTipo()==tipo && tActual.getFecha())){
                return False;
            }   
        }
    }
}

//dolor de cabeza para mañana, gracias.