import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';


class App extends Component {

  state = {
    greasedFilter: false,
    sortingOp: '',
    // baba: false
  }

  greasedClicked = () => {
    this.setState ({
      greasedFilter: !this.state.greasedFilter
    })
  }

  sortOpChange = (event) => {
    if(event.target.id === "name") {
      this.setState ({
        sortingOp: "name"
      })
    } else if (event.target.id === "weight") {
      this.setState({
        sortingOp: "weight"
      })
    }
  }

  sortHogName = (pig1, pig2) => {
    let nameA = pig1.name.toLowerCase()
    let nameB = pig2.name.toLowerCase()

    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    } else {
      return 0
    }
  }

  sortHogWeight = (pig1, pig2) => {
    const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    return pig1[weightKey] - pig2[weightKey]
  }

  sortHogs = () => {
    if (this.state.sortingOp === "name") {
      hogs.sort(this.sortHogName)
    } else if (this.state.sortingOp === "weight") {
      hogs.sort(this.sortHogWeight)
    }
  }

  // bringBackHogs = () => {
  //   console.log("bring them back")
  //   this.setState({
  //     baba: "dada"
  //   })
  // }

  render() {
    this.sortHogs()
    return (
      <div className="App">
          < Nav 
            bringBackHogs={this.bringBackHogs}
            greased={this.state.greasedFilter}
            greasedClicked={this.greasedClicked} 
            sortOpChange={this.sortOpChange}
          />
          < HogContainer 
            baba={this.state.baba}
            greasedFilter={this.state.greasedFilter}
            hogData={hogs} 
          />
      </div>
    )
  }
}

export default App;
