const all = async (req, res) => {
  res.send('Todos los productos');
};

const detail = async (req, res) => {
  res.send('Todos detalles producto');
};

const create = async (req, res) => {
  res.send('Crear productos');
};

const distroy = async (req, res) => {
  res.send('Eliminar producto');
};

const account = async (req, res) => {
  res.send('Todos los productos');
};

module.exports = {
  all,
  detail,
  create,
  distroy,
  account,
};
