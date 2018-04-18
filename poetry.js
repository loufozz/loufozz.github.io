var ambsound = new Audio ('LiveRoomOut');

 for (var i = 0; i < 0.3; i = i+0.005){
 ambsound.loop = true;
 ambsound.play();
 ambsound.volume = i;
 }

