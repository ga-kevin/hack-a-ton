import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteUp } from '../redux/modules/idea';
import './TileView.css';
import Tile from '../components/Tile'

class TileView extends Component {
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

  componentDidMount() {
    this.props.voteUp();
  }

  renderTiles = () => {
    const { ideas } = this.props
    return ideas.map(idea => <Tile idea={idea} />)
  }

  render() {
    return (
      <div className="tile-view">
        {this.props.ideas && this.renderTiles()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ideas: state.idea.ideas
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteUp: () => dispatch(voteUp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TileView);
