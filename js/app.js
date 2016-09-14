$( document ).ready(function() {
    $('.stepTwoTitle').hide();
    $('.stepTwo').hide();
    $('.stepThreeTitle').hide();
    $('.stepThree').hide();
});

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
    matches = [];
    substrRegex = new RegExp(q, 'i');

    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

// Data Sources
var services = ['MySqlService', 'CassandraService'];
var methods = ['getDataFromMySQL()', 'setDataToMySQL()', 'getDataFromCassandra()', 'setDataToCassandra()'];
var dbName = ['Users', 'Orders', 'Invoices'];
var tableName = ['users', 'user-details', 'orders', 'order-details', 'invoices', 'invoice-details'];

// Config for TypeAhead
var config = {
  hint: true,
  highlight: true,
  minLength: 1
};

var servicesSource = {
  name: 'services',
  source: substringMatcher(services)
};

var methodsSource = {
  name: 'methods',
  source: substringMatcher(methods)
};

var dbNameSource = {
  name: 'dbName',
  source: substringMatcher(dbName)
};

var tableNameSource = {
  name: 'tableName',
  source: substringMatcher(tableName)
};

$('.services').typeahead(config, servicesSource);

$('.methods').typeahead(config, methodsSource).on('typeahead:selected', function(obj, data){
    $('.stepTwoTitle').show();
    $('.stepTwo').show();
});

$('.dbName').typeahead(config, dbNameSource);

$('.tableName').typeahead(config, tableNameSource).on('typeahead:selected', function(obj, data){
    $('.stepThreeTitle').show();
    $('.stepThree').show();
});