const path = require ('path');
const platos = require('./baseDatos');

module.exports ={
    
    //Esta será la accion que ocurrirá al ir a / en el sitio web
    index : (req, res) =>{
        return res.render(path.resolve(__dirname, '../views/index.ejs'))
    },

    //Esta será la accion que ocurrirá al ir a /detalleMenu en el sitio web
    detalleMenu : (req, res) =>{
        let plato = platos[req.params.id];
        return res.render(path.resolve(__dirname, '../views/detalleMenu.ejs'), {plato})
    }
}