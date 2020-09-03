const all = async (req, res) => {
  res.send('Todos los users');
};

const detail = async (req, res) => {
  res.send('Todos detalles user');
};

const create = async (req, res) => {
  res.send('Crear users');
};

const distroy = async (req, res) => {
  res.send('Eliminar user');
};

const account = async (req, res) => {
  res.send('Todos los users');
};

module.exports = {
  all,
  detail,
  create,
  distroy,
  account,
};
