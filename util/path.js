const path = require("path");

// it gives the path to the directory , filename in the application where it runs from
// In this senario , it is app.js i.e, we get the app.js path
module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
