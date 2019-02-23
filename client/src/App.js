import React, { Component } from 'react'
import TextAnalysis from './components/TextAnalysis'

import { Paper, 
         Typography, 
         TextField, 
         Button,
         List, 
         ListItem, 
         ListItemText,
         ListItemSecondaryAction,
         IconButton
        } 
from '@material-ui/core'

import { Delete } from '@material-ui/icons'

export default class App extends Component {

  state = {
    exercises: [
      { id: 1, title: 'Japan' },
      { id: 2, title: 'Germany' },
      { id: 3, title: 'South Korea' }
    ],
    title: ''
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
  })

  handleCreate = e => {
    e.preventDefault()
    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }))
    }
  }

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))

  render() {
    const { title, exercises } = this.state

    return (
      <Paper>       
      {/* <NavBar /> */}

      <Typography variant='display1' align='center' gutterBottom>
        Exercises
      </Typography>

      <form onSubmit={this.handleCreate}>
        <TextField
          name='title'
          label='Trips'
          value={title}
          onChange={this.handleChange}
          margin='normal'
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
        >
          Create
        </Button>
      </form>

      
      <TextAnalysis />
      
      <List>
        {exercises.map(({ id, title }) =>
          <ListItem key={id}>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
              <IconButton
                color='primary'
                onClick={() => this.handleDelete(id)}
              >
              <Delete />                
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
      </Paper> 
    )
  }
}


