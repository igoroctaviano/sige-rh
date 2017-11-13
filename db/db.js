var firebase = require("firebase-admin");

const employeesData = require('./data/employee');
const plansData = require('./data/plan');

var serviceAccount = {
  "type": "service_account",
  "project_id": "sige-rh",
  "private_key_id": "6518523442c232ff6ae30f52bab95ba2bb71e79b",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtXZZ0WuYQhG57\n/y9/8yRg3UJCY3uTv/rXmAaVpXapPqnbu3z6g57/xYQ0yUDrCcbEpBvIJOpXUAlJ\nnr1f5TS8NIojeXQDHcgLl1xtkPJI6kB/zQoxTeZqfkcy8FMyFJy17T1UYFB12+x7\nCw8zFtBCIgPVMDrIutDDPtajxwvyfJrg74b4UnIfIWXPLJcpng5tVYcozqieifYl\nXFR0XCVbD6Pp4JLDir4IXjdjFl1nlV+6ZeE6cKl4+KCxVKbyO5zm2H6pnmqBtuPk\nBX3fmCe2mUkeQsXRJdkauMlmlufP7iTuT+hrY56P4ExwTV/A5JrGy5P/yF6mtNVn\noGjJQEs7AgMBAAECggEADN6SqaaJx5YdIYVLAGOLQsmJ/qWl6czpkRGPA5LZ4Sxu\nrYoYd/xHVFNUQhrif9Ak+jn4ef4Li1m8psNq6XB5XrNDwehlLUoLrJia2uNUqQcC\nrLoK1Kgkv6kKHgTrGB+hlnu6/sV7k5Q01Nl4UmGSKiaeRDglVPtRPf0vL8852tE3\n0yI5rfYLFABJzKh5cij4I58tj665rJo88BFwCkZsOcLuGCw8rY0rlG0GKmUTFKKs\nl/loJjYbuTQDb3noYUkZf8fx6xrvRBLExbIi7y7rdiYugrP/zgUl2ecByy4uahul\nufc+8/CSVeE8ePUja6hgcRxrTmg9LQzzCivGhw51yQKBgQDgWvCo9HtQnEsQNppk\n5TzxvHutpDoSQPKxZudRTEf+wHDGuSnuVQsIfADWuR5Sc3fM7QguOVVclDznndCg\nDlXsreZS7AX1uXhA13AqTuCVSx0fj0WiL/UFByof99fJe2RSK2MFqwqh8Ue0frWA\navqVQ6xqw4qbCIzwZwrRkECojQKBgQDF0YD0odKNA1FfR/EQ7L5yEC7gDNpldrIT\nofgwsEodBG7Gtz9OaGcg3QAntMvQ+xMJiHxD8SYkx7NSmQyV2cTPzRpIoHOMq+7R\nwH+dD0cWY5xU3xp5ju8PKrfGT8EWNh7NJr+VY5orYChjNSBMUuzpEkHr4350/LVw\ni9Qeut4E5wKBgQDORC2wWB2rrhYBEQJ/spaGdVCMA0n0kEvQuBgBkY07dPf6bDBV\n01Aye7dVsppjGY/SEzaLMOD/HbalB13QWX27/OGd6StNkDgz/R49d4lZGNbstg9C\nHq848S5Ud8unjM9eEE+Y3XkIDEltc3UxXKmHY9F30tFy2biiKUo0A1i+3QKBgQCE\nCz6LDOGgoxBUC4+Mfpr5RHglsi6t/7cKh9lFlsdB602Oc49cZTBBrYOG/ZX3H0Er\n4eEg8P1HG85FWkgeVsia9QuQYxn+Ul4NwPLuAd6vwTn/JRVlAtXsR9V4GJCIpQOW\naUEFFQE55uvOnQ28JLZjNX6vWKF2saDjSVMEWDQPDQKBgGAhKo7ARgpDA1oq/73v\nFi7z5p8/j17ZdWAjrClgk+9vlC72RUcwtHpWosTxspQIyb+ccvXhZ3kaRIms2zCW\nG4Y8V1DyJgkAa3HU7XijV5vHdJW1/MaVc8XGOZXECEcbRHfKcLmKGsZc6ZTyQUMp\nN6W1jUCmDxTChr+QTaoA/t+w\n-----END PRIVATE KEY-----\n",
  "client_email": "sige-rh@appspot.gserviceaccount.com",
  "client_id": "111906741055020976487",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sige-rh%40appspot.gserviceaccount.com"
};

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://sige-rh.firebaseio.com"
});

var db = firebase.database();

function refresh(callback) {
  db.ref("/employee").set(null).then(function() {
    employeesData.forEach(function(employee) {
      var newEmployee = db.ref("/employee").push();
      employee.uid = newEmployee.key;
      newEmployee.set(employee);
    });
  }).then(function() {
    db.ref("/plan").set(null).then(function() {
      plansData.forEach(function(plan) {
        var newPlan = db.ref("/plan").push();
        plan.uid = newPlan.key;
        newPlan.set(plan);
      });
    }).then(callback);
  });
}

/*
addCategory(category: any) {
  var newRef = this.categories.push();
  category.Id = newRef.key;
  newRef.set(category).then( snap => {
    this.openSnackBar('New category has been added', 'ok');
  }).catch(error => {
    this.openSnackBar(error.message, 'ok');
  });
}*/

/*  function refresh(callback) {
  db.ref("/employee").set(null).then(function() {
    employeesData.forEach(function(employee, index) {
      db.ref("/employee/" + index).push(employee);
    });
  }).then(function() {
    db.ref("/plan").set(null).then(function() {
      plansData.forEach(function(plan, index) {
        db.ref("/plan/" + index).push(plan);
      });
    }).then(callback);
  });
} */

function employees(callback) {
  db.ref("/employee").on('value', function(snapshot) {
    var employees;

    if (snapshot.val()) { 
      employees = snapshot.val(); 
    }

    callback(Object.keys(employees).map(key => employees[key]));
  });
}

function employee(id, callback) {



  db.ref("/employee/" + id).on('value', function(snapshot) {
    var employee;

    if (snapshot.val()) { 
      employee = snapshot.val(); 
    }

    callback(employee);
  });
}

function plans(callback) {
  db.ref("/plan").on('value', function(snapshot) {
    var plans;

    if (snapshot.val()) { 
      plans = snapshot.val(); 
    }

    callback(Object.keys(plans).map(key => plans[key]));
  });
}

function plan(id, callback) {
  db.ref("/plan/" + id).on('value', function(snapshot) {
    var plan;

    if (snapshot.val()) { 
      plan = snapshot.val(); 
    }

    callback(plan);
  });
}

module.exports = {
  refresh: refresh,
  employees: employees,
  employee: employee,
  plans: plans,
  plan: plan
};