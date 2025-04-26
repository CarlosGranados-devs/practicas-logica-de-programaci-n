const LeerLinea = require("readline");
const AnimalFactory = require("./AnimalFactory");

const InterfazConsola = LeerLinea.createInterface({
  input: process.stdin,
  output: process.stdout,
});

InterfazConsola.question("Por favor ingrese el nombre del animal: ", (name) => {
  InterfazConsola.question("Por favor ingrese la edad del animal: ", (age) => {
    InterfazConsola.question("Por favor ingrese el color del animal: ", (color) => {
      InterfazConsola.question("Por favor ingrese la raza del animal: ", (race) => {
        try {
          const animal = AnimalFactory(name, age, color, race);
          console.log("Animal creado exitosamente:");
          console.log(animal);
        } catch (error) {
          console.error(error.message);
        }

        InterfazConsola.close();
      });
    });
  });
});
