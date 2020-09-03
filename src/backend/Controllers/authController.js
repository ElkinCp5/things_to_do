const login = async (req, res) => {
  res.send('Todos los productos');
};

const logup = async (req, res) => {
  res.send('Todos detalles producto');
};

module.exports = {
  login,
  logup,

};
