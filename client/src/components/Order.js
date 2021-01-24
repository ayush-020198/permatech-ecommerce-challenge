import React, {Component} from 'react';
import Axios from 'axios';

class Order extends Component {
    state = {
        orderConst: [],
        orders: [],
        updateOrder: []
    }

    // componentDidMount provides the list of orders to the client side
    // from the back end wth the help of Axios as soon as the page refresh
    componentDidMount(){
        Axios({
            method: "GET",
            url: `/order/${this.props.match.params.id}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            let orders = [];
            orders = res.data;
    // The data obtained is set into the order and orderConst array
            this.setState({orderConst:orders, orders});
        });
    }

    // The status of order is updated here among the two options that are 'processing' and 'done'
    editStatus = (event, key1) => {
        const orders = [...this.state.orders];
        orders[key1].status = event.target.value;
        this.setState({orders});
    }

    // All the updates are saved here by turning the updateOrder array as false
    saveEdit = (key1) => {
        const updateOrder = [...this.state.updateOrder];
        updateOrder[key1] = false;
        this.setState({updateOrder});
    }

    // Updates can be cancelled here by turning the order array into the original one
    // and turning the updateOrder key as false
    cancelEdit = (key1) => {
        const orders = this.state.orderConst;
        const updateOrder = [...this.state.updateOrder];
        updateOrder[key1] = false;
        this.setState({orders, updateOrder});
    }

    // Editing is turned on by turning the updateOrder array as true
    editOrder = (key1) => {
        const updateOrder = [...this.state.updateOrder];
        updateOrder[key1] = true;
        this.setState({updateOrder})
    }

    // Quantity of the product is increased here
    incrementQuantity = (key1,key2) => {
        const orders = [...this.state.orders];
        orders[key1].productsOrdered[key2].quantity++;
        console.log(key1,key2);
        this.setState({orders});
    }

    // Quantity of the product is decreased here
    decrementQuantity = (key1,key2) => {
        const orders = [...this.state.orders];
        orders[key1].productsOrdered[key2].quantity--;
        console.log(key1,key2);
        this.setState({orders});
    }

    render(){
        return this.state.orders.map((order, key1) =>
        <tr id={key1}>
            <td>Order_ID: {order._id}
            </td>
            <td>
                _||_
            </td>
            <td>
                {
                // If a certain key of updateOrder array is true 
                // then options are visible
                // else current order status is visible  
                    this.state.updateOrder[key1] ? 
                    <select onChange={ (event) => this.editStatus(event, key1)}>
                        <option>
                            Processing
                        </option>
                        <option>
                            Done
                        </option>
                    </select> :
                    <p>
                        {order.status}
                    </p>
                }
            </td>
            <td>
                _||_
            </td>
            <td>
                {order.time}
            </td>
            <td>
                _||
            </td>
            <td>
                {
                // The products can be incremented or decremented here 
                // by modifying the certain key of updateOrder array
                    order.productsOrdered.map((product,key2) => {
                    return <table id={key2}>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>
                                    {product.quantity}
                                    {this.state.updateOrder[key1] 
                // If a certain key of updateOrder array is true
                // The buttons are visible for updating the quantity of product 
                                    && 
                                    <span>
                                        <button className="btn btn-success ml-2 mr-2 py-0 px-2" onClick={() => this.incrementQuantity(key1,key2)}>+</button>
                                        <button className="btn btn-danger py-0 px-2" disabled={product.quantity<=0} onClick={() => this.decrementQuantity(key1,key2)}>-</button>
                                    </span>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                })}
            </td>
            <td>
                _||_
            </td>
            <td>
                {
            // If a certain key of updateOrder array is true
            // then Save, Cancel, Product qty. increment & decrement buttons are visible
            // else Edit button is visible 
                this.state.updateOrder[key1] ? 
                    <div>
                        <button onClick={ () => this.saveEdit(key1)}>
                            Save
                        </button>
                    <button onClick = {() => this.cancelEdit(key1)}>
                            Cancel
                        </button>
                    </div> :
                    <button onClick = {() => this.editOrder(key1)}>
                        Edit
                    </button>
                }
            </td>
        </tr>
        ) 
    }

}

export default Order;