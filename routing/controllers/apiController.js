module.exports = function(app) {
           
    app.get('/api/person/:id', function(req, res) {
        // get data from the database
    });

    app.post('/api/person',function(req, res){
        // post data to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete the data from database
    });
    
}