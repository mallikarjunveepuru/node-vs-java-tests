
/*
 * GET Hello World! message.
 */

exports.hello = function(req, res){
    res.render('hello', { title: 'Express' });
    //res.end('Hello World!\n');
};