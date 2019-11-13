import React from "react";

class Bomb extends React.Component {
    state = {
        count: 0
      };
     
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log(this.state.count);
          if (this.state.count === 8) {
              return clearInterval(this.interval)
          };
          this.setState({ 
              count: this.state.count + 1 
            })
        }, 1000)
       
      }
      
      componentWillUnmount() {
        clearInterval(this.interval)
        }
      
    render() {
        let word;
        if (this.state.count === 8) { 
            console.log('Boom');
            word = 'BOOM!!!!!'; 
        } else if (this.state.count % 2 === 0) {
            console.log('tick');

            word = 'Tick'; 
        } else { 
            console.log('tock');

            word = 'Tock';
        }
        
        return (
        <div>
            <p>{word}</p>
        </div>
        );
  
    }
}

export default Bomb
