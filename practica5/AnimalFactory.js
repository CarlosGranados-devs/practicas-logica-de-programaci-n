const AnimalFactory = (name, age, color, race) => {
    if (!name || !age || !color || !race) {
      return "Para poder crear un nuevo animal tienes que rellenar todos los campos";
    }
  
    const newAnimal = {
      nombre: name,
      edad: age,
      color: color,
      raza: race,
    };
  
    return newAnimal;
  };
  
  module.exports = AnimalFactory;
  