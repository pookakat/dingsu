module.exports = function(app){
    app.get('/user', function(req, res){
        res.json({foo: 'bar'})
    });
    app.post('/user', function(req, res){
        console.log(req.body);
        res.json({foo: 'bar'})
    });
};