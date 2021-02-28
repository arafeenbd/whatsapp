
import db from './firebase';

function createChatRoom(room) {  
  db.collection("rooms").add({
      name:room
  });
}

export { createChatRoom };
