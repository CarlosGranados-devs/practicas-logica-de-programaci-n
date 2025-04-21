Module.exports = vehicleOnCreate = (model, color, year, isFuncional, Brand) => {
    if (!model || !color || !year || !isFuncional || !Brand) {
        throw new Error("Tiene que enviar todos los argumentos para poder ejecutar correctamente la función");
    }

    return {
        model: model,
        color: color,
        year: year,
        IsFuncional: isFuncional,
        Brand: Brand
    };
};
