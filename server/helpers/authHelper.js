const bcrypt = require("bcrypt");

exports.comparePassword = (password, hashes) => {
  return bcrypt.compare(password, hashes);
};
