var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyZb12cZRDYPXpOW'}).base('apppCwdY0OP5mfZBY');

base('Structures').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Entreprise'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
OUTPUT
Retrieved ASSEMAN DEPREZ
Retrieved BRASSERIE CASTELAIN
Retrieved CGF CHARCUTERIE
FETCH FIRST PAGE
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Structures').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Entreprise'));
    });
});
