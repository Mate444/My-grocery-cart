import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../reducers/actions.js';

class GroceryItems extends Component {
    render() {
        return <div id= "grocery-cart">
            <table border='1'>
                <tbody>
                <tr>
                    <th></th>
                    <th>Item Price </th>
                    <th>Item Name</th>
                </tr>
                {this.props.items.map((item, index) => {
                    return <tr key={index}>            
                        <td>
                            <button onClick={() => this.props.addToCart(item)}>
                                Add to cart
                            </button>
                        </td>   
                        <td>{item.price} </td>
                        <td>{item.name} </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    }
}
function mapStateToProps(state){
    return {
            items: state.forSale
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) => {
           dispatch(addToCart(item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems)