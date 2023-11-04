var express = require('express');
var router = express.Router();

/* GET página de datos */
router.get('/', function(req, res, next) {
  res.render('datos', { 
    nombre: 'Víctor',
    apellido: 'Montenegro',
    cedula: 'V-28269804',
    seccion: '3'
  });
});

module.exports = router;
