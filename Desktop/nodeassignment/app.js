
module.exports=function(filename,outputfile){
var fs=require('fs');
var readfileStream=fs.createReadStream(filename,'UTF8');
var writefileStream=fs.createWriteStream(outputfile,'UTF8');
readfileStream.on('data',function(chunk){
      var depstr=chunk.substring(chunk.indexOf('dependencies'),chunk.indexOf('}')).split(',');
      var devstr=chunk.substring(chunk.indexOf('devDependencies'));
      var newdevstr=devstr.substring(0,devstr.indexOf('}')).split(',');
      var resultantstr ='count devDependencies : '+ newdevstr.length+" count dependencies :  "+depstr.length;
      writefileStream.write(resultantstr);

})}
