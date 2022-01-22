import firebase from "../firebase";

let db = firebase.ref("phase");
var connect = 1;
class DataService {
  getAll() {
    var data = [];
    db.on("value", (snapshot) => (data = snapshot.val()));
    connect = data.Link;
    return data;
  }
  get_Connect() {
    return connect;
  }
  create(data) {
    return db.push(data);
  }

  update(value) {
    return db.update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
