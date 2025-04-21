const LeerLinea = require("readline")





const InterfazConsola = LeerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})


InterfazConsola.question("por favor ingresar modelo del vehiculo", (model) => {
    InterfazConsola.question("por favor ingresar el color del vehiculo" , (color) => {
        InterfazConsola.question("por favor ingresar el año del vehiculo", (year) => {
            InterfazConsola.question("por favor ingresar el estado del vehiculo", (IsFuncional) => {
                InterfazConsola.question("por favor ingresar la marca dwl vehiculo", (Brand) =>{

                    console.log(vehicleOnCreate(model, color, year, IsFuncional, Brand));

                })
        


            })


        })

    })

})