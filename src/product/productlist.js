import React from 'react'
import Product from './product';
import axios  from "axios";

class ProductList extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            allProducts:[]
        }

        this.upVoteClicked = this.upVoteClicked.bind(this)
        this.downVoteClicked = this.downVoteClicked.bind(this)

    }


    componentWillMount(){
        axios.get("http://localhost:3000/products")
                .then( (p)=>{
                    console.log(p.data)
                    this.setState({
                        allProducts: p.data
                    })
                } )
    }

    upVoteClicked(id){
        console.log("Up Vote Clicked " + id);

        const updatedProducts =  
                this.state.allProducts.map((p)=>{
                    if(p.id === id ){
                        return Object.assign({}, p, {upVote:p.upVote+1})  
                    }else{
                        return p
                    }
                })
        //console.log(updatedProducts)    
        this.setState({allProducts: updatedProducts})    


       
       
    }

    downVoteClicked(id){
        console.log("Down Vote Clicked " + id);
        const updatedProducts =  
                this.state.allProducts.map((p)=>{
                    if(p.id === id ){
                        return Object.assign({}, p, {downVote:p.downVote-1})  
                    }else{
                        return p
                    }
                })
        //console.log(updatedProducts)    
        this.setState({allProducts: updatedProducts})    

    }
    
    render() { 

        const sortedProducts = this.state.allProducts.sort((a, b)=>{
            return a.upVote - b.upVote
        })

        const displaySortedProducts = sortedProducts.map((p)=>{
            return (
                <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    upVote={p.upVote}
                    downVote={p.downVote}
                    description={p.description}
                    imageUrl={p.image}
                    onUpVote={this.upVoteClicked}
                    onDownVote={this.downVoteClicked}
                ></Product>
            )
        })


        return (  
            <div className="container">
                <h1 className="text-center"> Products Vote App</h1>
                {displaySortedProducts}
            </div>
        );
    }
}
 
export default ProductList;