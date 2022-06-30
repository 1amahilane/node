const http=require('http');
const data=require('./data');
http.createServer((req,res)=>
{
    res.writeHead(200,{'content-Type':'application\json'});
    //res.write("{name:'Aditya',email:'aditya@gmail.com'}"); //json.stringify likhne jagah kewal '{}' bhi kiya ja sakta tha
   // res.write(JSON.stringify(data));
   res.write("<h1>Hiiiii pragati</h1>");
    res.end();
}




).listen(3000);