import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

const products = [ 
    {id:1, name:"name",price:100},
    {id:2, name:"name",price:200},
    {id:3, name:"name",price:300},
    {id:4, name:"name",price:400},
    {id:5, name:"name",price:500},
];

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort:true,
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const defaultSorted = [{
    dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
    order: 'desc' // desc or asc
  }];

export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } defaultSorted={defaultSorted}/>