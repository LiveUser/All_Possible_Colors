//worker.js
console.log("Worker is Running");
 var maxColors= 16777216;
var imgData;
onmessage=(recieved)=>{
  imgData=recieved.data;
  console.log("Recieved ImgData");
  generate();
};
    function toHex(c){
      if(c>0){
      var hex=c.toString(16);
      return hex.length ==1 ? "0" +hex:hex;
      }else{
        return 0;
      }
      }
    function toDEC(num){
      var list=num.split("");
      for(i=0;i<list.length;i++){
        if(list[i]=="a"){
          list[i]=10;
          }
          else if(list[i]=="b"){
          list[i]=11;
          }
          else if(list[i]=="c"){
          list[i]=12;
          }
          else if(list[i]=="d"){
          list[i]=13;
          }
          else if(list[i]=="e"){
          list[i]=14;
          }
          else if(list[i]=="f"){
          list[i]=15;
          }
          else{
          list[i]=Number(list[i]);
          }
        }
        number=0;
        for(i=0;i<list.length;i++){
          number=16*number+list[i];
          }
          return number;
      }
    function generate(){
      for (s=0;s<maxColors;s++){
        var i=s*4;
        rgb=toHex(s);
        if(rgb.length<6){
          let difference=6-rgb.length;
          for(l=0;l<difference;l++){
            rgb="0"+rgb;
          }
        }else{}
        rgb=String(rgb);
        let newRgb=[toDEC(rgb.substring(0,2)),toDEC(rgb.substring(2,4)),toDEC(rgb.substring(4,6))];

        imgData.data[i]=newRgb[0];
        imgData.data[i+1]=newRgb[1];
        imgData.data[i+2]=newRgb[2];
        imgData.data[i+3]=255;
       }
       postMessage(imgData);
     }
     var rgb;
    //let timer=setInterval(()=>{generate()},1)