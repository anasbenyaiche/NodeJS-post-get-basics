
var http = require('http');
var fs = require('fs');
var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    if (req.url==='/home' || req.url==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if(req.url==='/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if(req.url==='/api/ninja'){
        var ninja=[
            {name:"ryu", age:29},
            {name:'yoshi', age:32}
        ];
        res.writeHead(200, {'Content-Type':'application/JSON'})
        res.end(JSON.stringify(ninja))
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }

})



server.listen(3000, '127.0.0.1');
console.log('yo Anas, now the server is listening to port 3000')

//res in text form or JSON form

// res.writeHead(200, { 'Content-Type': 'text/plain' });

// res.end('feed my popcorn is any change will be instant')
// Read and write stream

// myReadStream.on('data', (chunk) => {
//     console.log('new chunk recieved: ');

//     myWriteStream.write(chunk);
//     console.log('new chunk has been written:')

// })




// var events = require('events');

// var util = require('util');

// var Person = function(name){
//     this.name= name;
// }

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james')
// var mary = new Person('mary')
// var ryu = new Person('ryu')

// var people = [james,mary,ryu]

// people.forEach((person)=>{
//     person.on('speak', (msg)=>{
//         console.log(person.name + "said: " + msg )
//     })
// });
// james.emit('speak', 'hello Guys')
// mary.emit('speak', 'hey youuu')
