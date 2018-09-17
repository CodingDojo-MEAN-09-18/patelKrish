var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) 
{
    console.log('client request URL: ', request.url);

    if(request.url === '/cars')
    {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cats')
    {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/new')
    {
        fs.readFile('./views/create.html', 'utf8', function (errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents)
        {
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
    }
    else if(request.url === '/images/cars/pexels-photo-120049.jpg')
    {
        fs.readFile('./images/cars/pexels-photo-120049.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cars/pexels-photo-274974.jpg')
    {
        fs.readFile('./images/cars/pexels-photo-274974.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cars/pexels-photo-1149831.jpg')
    {
        fs.readFile('./images/cars/pexels-photo-1149831.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cats/pexels-photo.jpg')
    {
        fs.readFile('./images/cats/pexels-photo.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cats/pexels-photo-617278.jpg')
    {
        fs.readFile('./images/cats/pexels-photo-617278.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cats/pexels-photo-923360.jpg')
    {
        fs.readFile('./images/cats/pexels-photo-923360.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else 
    {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(6789);

console.log('Running in localhost at port 6789');
