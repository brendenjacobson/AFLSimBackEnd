var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Team'); // Create a table for 'Team' with default settings
mobileApp.tables.add('Season'); // Create a table for 'Season' with default settings
mobileApp.tables.add('Round'); // Create a table for 'Round' with default settings
mobileApp.tables.add('Match'); // Create a table for 'Match' with default settings
mobileApp.tables.add('Result'); // Create a table for 'Result' with default settings
mobileApp.tables.add('Ground'); // Create a table for 'Ground' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
