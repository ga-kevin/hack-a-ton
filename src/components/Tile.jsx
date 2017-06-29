import React, { Component } from 'react'
import './tile.css'

class Tile extends Component {
  checkStatus = (status) => {
    switch(status) {
      case 0: return 'Not Started'
      case 1: return 'In Progress'
      case 2: return 'Completed'
    }
  }

  buildTile = (idea) => {
    return (
      <div className="tile">
        <div className="info">
          <h1 className="title">{idea.title}</h1>
          <p className="description">{idea.desc}</p>
          <p className="author">{idea.author}</p>
          <p className="type">{idea.type}</p>
          <p className="votes">{idea.votes}</p>
          <p className="status">{this.checkStatus(idea.progress.status)}</p>
        </div>
      </div>
    )
  }

  render() {
    const { idea } = this.props

    return this.buildTile(idea)
  }
}

export default Tile
