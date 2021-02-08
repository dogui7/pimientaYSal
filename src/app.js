const express = require('express');
const app = express();
const path = require('path');

// Seteo de mis elementos estaticos
app.use(express.static(path.resolve(__dirname, '../public')));

// Definimos el view engine
app.set("view engine","ejs");

//Llamado a mis rutas (eliminar o agregar las que se necesiten y renombrarlas)
const mainRouter = require('./routes/mainRouter');

// Redireccionamiento a los routers (mirar carpeta routes)
app.use('/', mainRouter);

// Servidor
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => console.log("Servidor funcionando")); 