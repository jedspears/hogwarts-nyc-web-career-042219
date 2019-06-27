import React, { Component } from 'react';
export default class HogTile extends Component {

    state = {
        clicked: false,
        hide: false
    }

    hideClicked = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    handleHide = () => {
        if (!this.state.hide) {
            return (
                <div onClick={this.clickHandler}className="pigTile">
                    <h1>{this.props.name}</h1> 
                    <img src={this.photoName()} alt='haha'/>
                    <button onClick={this.hideClicked}>Hide Pig</button>
                    {this.details()}
                </div>
            ) 
        }
    }

    clickHandler = () => {
        this.setState ({
            clicked: !this.state.clicked
        })
    }

    photoName = () => {
        let nameThing = this.props.name.toLowerCase()
        let newName = nameThing.replace(/ /g, '_')
        return `hog-imgs/${newName}.jpg`
    }

    details = () => {
        if(this.state.clicked) {
            return (
                <div>
                    <p>Specialty: {this.props.specialty}</p>
                    <p>Greased Status: {this.props.greased.toString()}</p>
                    <p>Weight as a ratio of hog to LG - 224.7 Cu. Ft. French Door Refrigerator with                 Thru-the-Door Ice and Water: 
                        {this.props
                            ['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                    </p>
                    <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleHide()}
            </div>
        
        )
    }
}