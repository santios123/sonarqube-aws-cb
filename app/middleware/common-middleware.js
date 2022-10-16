const middlewares = {
  moreThan140Lines() {
    const a = 10;
    const b = 20;
    let result = 0;
    result = a + b;
    console.log('Sum of two numbers >>>', result);
    return result;
  },

  setDefaultHeaders(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
  },
};

module.exports = middlewares;
