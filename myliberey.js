myliberey.js

function isTouching( movingRectangle1,fixrectangle1){
    if(movingRectangle1.x - fixrectangle1.x < movingRectangle1.width/2 + fixrectangle1.width/2 &&
       fixrectangle1.x - movingRectangle1.x < movingRectangle1.width/2 + fixrectangle1.width/2 &&
       movingRectangle1.y - fixrectangle1.y < movingRectangle1.height/2 + fixrectangle1.height/2 &&
       fixrectangle1.y - movingRectangle1.y < movingRectangle1.height/2 + fixrectangle1.height/2){
         return true;
       }
       else{
         return false;
      
       }
  
  }