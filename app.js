var sql = require('mssql');

var  config  =   {
    user:   'wriju',
        password:   '',
        server:   'wgsqlserver.database.windows.net',
      // Don't use 1433 and ensure IP address is unblocked in Firewall Policy
        database:   'nodesqldb',
         options:  {
        encrypt:  true  // Use this Microsoft Azure SQL Database (SQLAzure)
    }
}

sql.connect(config).then(function () {
    console.log('Openning connection');
    new  sql.Request()
        .query('Select * from Employee').then(function (recordset)  {
        console.dir(recordset);
    }).catch(function (err)  {
        // When error comes
        });
    });

