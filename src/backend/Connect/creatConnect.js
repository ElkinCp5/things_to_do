const validate = (text) => (typeof text !== 'undefined' && text !== '' && text);

export default (userName, userPassword, urlBase, database) => {
  if (validate(userName) && validate(userPassword) && validate(urlBase) && validate(database)) {
    return urlBase.replace('<user>', userName).replace('<password>', userPassword).replace('<dbname>', database);
  }
  return false;
};
