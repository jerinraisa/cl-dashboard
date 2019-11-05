// First Param: username
// Second Param: password
db.auth("cl-dashboard", "cl-dashboard");

db = db.getSiblingDB("cl-dashboard");

db.createUser({
  user: "cl-dashboard",
  pwd: "cl-dashboard",
  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
});

db.createCollection("users");
