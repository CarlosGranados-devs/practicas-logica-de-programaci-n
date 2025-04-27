function userStatus() {
    let name = "Carlos";
    let age = 18.5;
    let number = 22.22;
  
    let isActive = true;
    isActive = false;
  
    if (isActive === true) {
      return "en línea";
    } else {
      return "última vez 02pm";
    }
  }
  
  console.log(userStatus());
  
  const fruits = [
    "manzana",
    "pera",
    "uva",
    1
  ];
  
  fruits.forEach(element => {
    console.log(element);
  });
  
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits[3]);
  
  const userInfo = {
    name: "Carlos",
    age: "18",
    isActive: true,
    favoriteColor: ["red", "black"]
  };

  const { name, age, isActive, favoriteColor } = userInfo;
  
  console.log(name);
  console.log(age);
  console.log(isActive);
  
  favoriteColor.forEach(color => {
    console.log(color);
  });
  