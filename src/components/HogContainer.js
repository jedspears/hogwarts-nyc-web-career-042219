import React, { Component } from 'react';
import HogTile from './HogTile'

export default class HogContainer extends Component {

    filterHogs = () => {
        return this.props.hogData.filter(hog => hog.greased === true)
    }

    renderNotGreased = () => {
        return (
            <div>
                {this.props.hogData.map ((hog, i) => 
                    <HogTile
                        // baba={this.props.baba}
                        key={i}
                        id={i}
                        {...hog}
                    /> 
                )}
            </div>
        )
    }

    renderGreased = () => {
        let greased = this.filterHogs()
        return (
            <div>
                {greased.map ((hog, i) => 
                    <HogTile
                        // baba={this.props.baba}
                        key={i}
                        {...hog}
                    /> 
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
              {(this.props.greasedFilter ? this.renderGreased() : this.renderNotGreased())}
            </div>
        )
    }
}