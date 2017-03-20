const knex = require('knex');
const moment = require('moment');

const path = require('path');

const transformer = require('knex-csv-transformer').transformer;
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;

exports.seed = transformer.seed({
  table: 'fakedata',
  file: path.join(__dirname, '../api/csv/fakedata.csv'),
  transformers: [
    transfomerHeader('Item', 'item'),
    transfomerHeader('User Id', 'user_id'),
    transfomerHeader('Gender', 'gender'),
    transfomerHeader('Age', 'age'),
    transfomerHeader('Date of Transaction', 'transaction_date'),
    transfomerHeader('Store', 'store'),
    transfomerHeader('Brand', 'brand'),
    transfomerHeader('Location', 'location'),
    transfomerHeader('Category', 'category'),
    transfomerHeader('Price', 'price')
    ]
});

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
