import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import { timesSeries } from 'async';
//import '../../node_modules/font-awesome/css/font-awesome.css'

class Product extends React.Component {

    constructor(props){
        super(props)

        this.localDownVote = this.localDownVote.bind(this)
        this.localUpVote = this.localUpVote.bind(this)
    }


    localUpVote(){
        this.props.onUpVote(this.props.id)
    }

    localDownVote(){
        this.props.onDownVote(this.props.id)
    }
    
    render() { 
        return ( 
            <div>
               <div class="card">
                    <h5 class="card-header">
                        <span style={{fontSize:"50px"}}>{this.props.upVote}</span>
                        <i class="fas fa-thumbs-up fa-2x"></i>
                        &nbsp; &nbsp;
                        <span style={{fontSize:"50px"}}>{this.props.downVote}</span>
                        <i class="fas fa-thumbs-down fa-2x"></i>    

                    </h5>
                        <div class="card-body">
                            <div class="row">
                                <div>      
                                    <img src={this.props.imageUrl} class="img-thumbnail"></img>
                                </div>
                                <div style={{padding:"10px"}}>
                                    <h5 class="card-title">{this.props.title}</h5>
                                    <p class="card-text">{this.props.description}</p>
                                    <button class="btn btn-primary" onClick={this.localUpVote}>
                                    Up Vote
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    <button class="btn btn-primary" onClick={this.localDownVote}>
                                    Down Vote
                                    </button>
                                    <p></p>    
                                    <p></p>
                                    <p>Submitted By: <img src={this.props.imageUrl} className="avatar"></img></p>

                                </div>
                            </div>
                        </div>
                </div>




            </div>
         );
    }
}
 

export default Product