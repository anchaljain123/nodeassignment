
module.exports=function(inputfile,outputfile){
var fs=require('fs');
var readfileStream=fs.createReadStream(inputfile,'UTF8');
var writefileStream=fs.createWriteStream(outputfile,'UTF8');
readfileStream.on('data',function(chunk){
  var line=chunk.split('\n');
  for(i=0;i<line.length;i++){
  if(line[i].indexOf("//")!=-1){
  var indx=line[i].indexOf('//')
  var newstr=line[i].substring(indx);
  writefileStream.write(newstr);
}
}
})
}
