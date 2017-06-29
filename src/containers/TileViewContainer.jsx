import React, { Component } from 'react'
import { connect } from 'react-redux'


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

  buildTile = (idea) => {
    return (
      <div className="tile">
        <div className="info">
          <h1 className="title">{idea.title}</h1>
          <p className="description">{idea.desc}</p>
          <p className="author">{idea.author}</p>
          <p className="type">{idea.type}</p>
          <p className="votes">{idea.votes}</p>
        </div>
      </div>
    )
  }

  renderTiles = () => {
    const { ideas } = this.state
    return ideas.map(idea => this.buildTile(idea))
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
