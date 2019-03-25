const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/shoppings', (req, res) => {
  const shoppings = [
    {id: 1, brand: 'Prada'},
    {id: 2, brand: 'LV'},
    {id: 3, brand: 'LongChamp'},
  ];

  res.json(shoppings);

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);