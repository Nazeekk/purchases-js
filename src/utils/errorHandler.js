function checkError(error) {
  if (error) {
    throw new Error(error.details[0].message);
  }
}

module.exports = { checkError };
