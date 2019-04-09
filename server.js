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

app.get('/api/travels', (req, res) => {
  const travels = [
    {
      id: 1,
      country: {
        name: "Germany",
        place: "Neuschwanstein Castle",
        image: "https://blog.hotelscombined.com/wp-content/uploads/2018/09/Neuschwanstein-1.jpg?x79158"
      }
    },
    {
      id: 2,
      country: {
        name: "United Kingdom",
        place: "British Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/800px-British_Museum_%28aerial%29.jpg"
      }
    }
  ]

  res.json(travels);
  
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);