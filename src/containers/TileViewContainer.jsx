import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TileView.css';

import Tile from '../components/Tile'

class TileView extends Component {
  state = {
    ideas: [
      {
        id: 0,
        title: 'title',
        desc: 'description',
        author: 'author',
        type: 'build',
        votes: 0,
        progress: {
          members: [],
          status: 0
        },
      },
      {
        id: 1,
        title: 'title2',
        desc: 'description2',
        author: 'author2',
        type: 'proposal',
        votes: 0,
        progress: {
          members: [],
          status: 0
        },
      }
    ]
  }


  renderTiles = () => {
    const { ideas } = this.state
    return ideas.map((idea) => <Tile idea={idea} />)
  }

  render() {
    return (
      <div className="tile-view">
        {this.renderTiles()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return (
    {}
  )
}

export default connect(mapStateToProps, null)(TileView);
