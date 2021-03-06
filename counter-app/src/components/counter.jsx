import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        tags : ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize : 10,
        fontWeight : 'bold'
    }
    render() { 
        return (
            <div>
                <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>        
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
                </ul>
            </div>
        );
    };
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;