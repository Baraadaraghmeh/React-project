import React, { Component } from 'react';


class  Counter extends Component {

    state ={
     count : 0
    //  tags:["tag1","tag2","tag3"]
     };
     
     



     handleIncrement = product =>{

        console.log(product)  ;      
        this.setState({count:this.state.count+1 })

     }

    //  renderTags(){

    //     if (this.state.tags.length === 0) return <p>There is no tags here!</p>
    //      return <ul>
    //        { this.state.tags.map(tag=> <li key={tag}>{tag} </li>)}
    //     </ul>;    
    // }

    render() { 

        return (
    <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>  
        <button onClick={() => this.handleIncrement(product)}
         className="btn btn-secondary btn-sm ">  btn 
         </button>
        {/* {this.renderTags()} */}
    </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){ 
        const {count}=this.state ;
        return count === 0 ? 'Zero' : count;
    
    }
}
 
export default Counter ;