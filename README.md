# Grilla

El objetivo es crear un componente grilla que pueda ser utilizada para crear un juego

## Uso

-Layout.js es el componente que se utiliza como ejemplo para configurar la grilla, el mismo consta de un estado en el cual
se detallan la cantidad de grillas, el numero de filas, numero de columnas, los posibles valores o estados de cada celda
y un array que guarda los estados de cada celda:

numGrillas -> numero de grillas,
numFilas -> numero de filas de la grilla,
numColumnas -> numero de columnas de la grilla,
estadosPosibles -> array que guarda los posibles valores para cada celda,
estadosCeldas -> array que guarda el estado de cada celda

## Advertencia

De momento la cantidad de grillas solo replica el mismo estado para todas (Se debería agregar un estado independiente
para cada grilla en caso de agregar mas de 1)

