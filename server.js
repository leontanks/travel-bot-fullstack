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
        place: "Neuschwanstein Caste",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Neuschwanstein_Castle_from_Marienbr%C3%BCcke%2C_2011_May.jpg/240px-Neuschwanstein_Castle_from_Marienbr%C3%BCcke%2C_2011_May.jpg"
      }
    },
    {
      id: 2,
      country: {
        name: "United Kingdom",
        places: "British Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/800px-British_Museum_%28aerial%29.jpg"
      }
    }
  ]

  res.json(travels);
  
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);