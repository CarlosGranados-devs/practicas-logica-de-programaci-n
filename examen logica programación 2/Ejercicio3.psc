Proceso Ejercicio3
    Definir horas, valor_por_hora, salario_basico, recargo Como Real
    Definir tipo_horario Como Entero
    
    Escribir "Ingrese cantidad de horas trabajadas:"
    Leer horas
    Escribir "Ingrese el valor por hora:"
    Leer valor_por_hora
    Escribir "Ingrese tipo de horario (1: Diurno, 2: Nocturno):"
    Leer tipo_horario
    
    salario_basico <- horas * valor_por_hora
    
    Si tipo_horario = 1 Entonces
        recargo <- 0
    Sino
        recargo <- horas * (valor_por_hora * 1.75 - valor_por_hora)
    FinSi
    
    Escribir "Salario básico: $", salario_basico
    Escribir "Recargo: $", recargo
    Escribir "Total a pagar: $", salario_basico + recargo
FinProceso
