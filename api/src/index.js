module.exports = (app) => {
    app.use('/hello', require('./api/hello'));
}