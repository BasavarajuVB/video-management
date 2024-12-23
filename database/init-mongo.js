// Initialize MongoDB with a default user and video collection
db.createUser({
    user: "admin",
    pwd: "adminpassword",
    roles: [{ role: "readWrite", db: "videoDB" }]
  });
  
  db.createCollection("videos");
  