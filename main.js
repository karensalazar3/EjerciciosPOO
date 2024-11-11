//Ejercicio POO 1:
//Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por consola las propiedades de la persona.
class Person {
    constructor(name, age, genre) {
      this.name = name
      this.age = age
      this.genre = genre
    }
  
    obtDetails() {
        console.log(`Nombre: ${this.name}`)
        console.log(`Edad: ${this.age}`)
        console.log(`Género: ${this.genre}`)
      }
    }
  const persona = new Person("Giancarlo", 18, "Masculino");
  persona.obtDetails();
  
//Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por consola el resultado.class Student extends Person
class Student extends Person {
constructor(name, age, genre, course, group) {
      super(name, age, genre)
      this.course = course
      this.group = group
    }
  
    register() {
        this.obtDetails()
      console.log(`El estudiante ${this.name} está registrado en el curso ${this.course}, grupo ${this.group}.`);
    }
  }
  const estudiante = new Student("Karen", 30, "Femenino", "FullStack", "FullTime")
  estudiante.obtDetails()
  estudiante.register() 


//Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por consola el resultado.

class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
      super(name, age, genre)
      this.asignatura = asignatura
      this.level = level
    }
  
    assign() {
      console.log(`El profesor ${this.name} está asignado a la asignatura de ${this.asignatura}, nivel ${this.level}.`);
    }
  }
  
  const profesor = new Teacher("Sofia", 26, "Femenino", "Matematicas", "Secundaria")
  profesor.obtDetails()
  profesor.assign()    
