
module.exports=function(filename,outputfile){
var fs=require('fs');
var readfileStream=fs.createReadStream(filename,'UTF8');
var writefileStream=fs.createWriteStream(outputfile,'UTF8');
readfileStream.on('data',function(chunk){
    var depstr=chunk.substring(chunk.indexOf('dependencies'),chunk.indexOf('}')).split(',');
    var devstr=chunk.substring(chunk.indexOf('devDependencies'));
    var newdevstr=devstr.substring(0,devstr.indexOf('}')).split(',');

      var res='',finddepstr;
      var deplen=depstr.length;
      var devlen=newdevstr.length;
      for(i=0;i<deplen;i++)
      {
       finddepstr=depstr[i];
        res = newdevstr.filter( function(item){
    
        if(item == finddepstr) {
                writefileStream.write(item);
        }

      });
      }
})
}
