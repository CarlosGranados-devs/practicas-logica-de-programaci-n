Proceso Ejercicio4
    Definir edad Como Entero
    Definir peso, estatura Como Real
    
    Escribir "Ingrese su edad:"
    Leer edad
    Escribir "Ingrese su peso en kilogramos:"
    Leer peso
    Escribir "Ingrese su estatura en metros:"
    Leer estatura
    
    Si edad >= 18 Entonces
        Si peso > 50 Entonces
            Si estatura > 1.5 Entonces
                Escribir "Puede participar en la competencia."
            Sino
                Escribir "No cumple la estatura m�nima."
            FinSi
        Sino
            Escribir "No cumple el peso m�nimo."
        FinSi
    Sino
        Escribir "No cumple la edad m�nima."
    FinSi
FinProceso
