class Perro {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }

    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.raza}.`);
    }
}

// Creando objetos de la clase Perro
const miPerro = new Perro('Max', 'Labrador');
const tuPerro = new Perro('Bella', 'Beagle');
const otroPerro = new Perro('Carlitos', 'San Bernardo');

// Llamando a los métodos de nuestros objetos
miPerro.ladrar();
tuPerro.presentarse();
otroPerro.presentarse();
otroPerro.ladrar();