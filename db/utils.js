/* function refresh(callback) {
  refreshEntity("employee")
    .then(function() {
      refreshEntity("plan");
    })
    .then(function() {
      refreshEntity("approval");
    })
    .then(callback);
}

function refreshEntity(entityName) {
  return db
    .ref("/" + entityName)
    .set(null)
    .then(function() {
      getData(entityName).forEach(function(entity) {
        saveAll
        var newEntity = db.ref("/" + entityName).push();
        entity.uid = newEntity.key;
        newEntity.set(entity);
      });
    });
}

function reset(callback) {
  resetEntity("employee")
    .then(function() {
      resetEntity("plan");
    })
    .then(function() {
      resetEntity("approval");
    })
    .then(callback);
}

function resetEntity(entityName, callback) {
  return db
    .ref("/" + entityName)
    .set(null)
    .then(callback);
} */
