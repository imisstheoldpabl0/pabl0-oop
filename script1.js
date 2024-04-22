// EJERCICIO 1

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    detalles() {
        console.log(`Las propiedades de la persona son: ${this.nombre}, ${this.edad}, ${this.genero}`)
    }
}

let miPersona = new Persona('Pablo', 25, 'Hombre');
miPersona.detalles();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(curso, grupo) {
        this.curso = curso;
        this.grupo = grupo;
        console.log(`Nombre: ${this.nombre}
        Edad: ${this.edad}
        Genero: ${this.genero}
        Curso: ${this.curso}
        Grupo: ${this.grupo}`);
    }
}
let miEstudiante = new Estudiante('Pablo', 25, 'Hombre', 'Fullstack', 'Bootcamp');
miEstudiante.registrar();

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignar(asignatura, nivel)
    }
    asignar(asignatura, nivel) {
        this.asignatura = asignatura;
        this.nivel = nivel;
        console.log(`Nombre: ${this.nombre}
        Edad: ${this.edad}
        Genero: ${this.genero}
        Asignatura: ${this.asignatura}
        Nivel: ${this.nivel}`);
    }
}
let miProfesor = new Profesor('Alejandro', 35, 'Hombre', 'Javascript', 'Avanzado');
miProfesor.asignar('Python', 'Intermedio');


let persona1 = new Persona('Alberto', 28, 'Hombre')
persona1.detalles();

let estudiante1 = new Estudiante('Alberto', 28, 'Hombre', 'JS Katas', 'Alto')
estudiante1.registrar();

let profesor1 = new Profesor('Guillermo', 37, 'Hombre', 'JS Validation', 'Alto')
profesor1.asignar();