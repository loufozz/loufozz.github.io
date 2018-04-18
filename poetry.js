var ambsound = new Audio ('LiveRoomOut.mp3');

 for (var i = 0; i < 0.3; i = i+0.001){
 ambsound.loop = true;
 ambsound.play();
 ambsound.volume = i;
 }

