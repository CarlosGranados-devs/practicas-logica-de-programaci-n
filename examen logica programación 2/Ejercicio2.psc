Proceso Ejercicio2
    Definir nombre Como Cadena
    Definir estado_civil Como Caracter
    
    Escribir "Ingrese su nombre completo:"
    Leer nombre
    
    Escribir "Ingrese la inicial de su estado civil (S, C, V, U, O):"
    Leer estado_civil
    estado_civil <- Mayusculas(estado_civil)
    
    Segun estado_civil Hacer
        "S":
            Escribir nombre, " es Soltero."
        "C":
            Escribir nombre, " es Casado."
        "V":
            Escribir nombre, " es Viudo."
        "U":
            Escribir nombre, " está en Unión Libre."
        "O":
            Escribir nombre, " tiene Otro estado civil."
        De Otro Modo:
            Escribir "Inicial no válida."
    FinSegun
	FinProceso
