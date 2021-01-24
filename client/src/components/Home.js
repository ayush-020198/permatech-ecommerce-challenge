import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {
        customers: []
    }

    // componentDidMount provides the list of customers to the client side
    // from the back end wth the help of Axios as soon as the page refresh
    componentDidMount(){
        Axios({
            method: "GET",
            url: "/customer",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
    // The data obtained is set into the customer array
            this.setState({
                customers: res.data
            });
        });
    }

    // The response from back end is in the json format and is in an array
    // All the information is abstracted with the help of 'map' function
    render() {
        return this.state.customers.map((customer) => 
    // tr, td are used for converting the data into tabular form
            <tr>
                <td>
                    {customer.name}
                </td>
                <td> _||_ </td>
                <td>
                    {customer.email}
                </td>
                <td> _||_ </td>
                {/* The link tag shows the complete order list for a specific  customer*/}
                <td>
                    <Link to = {`orders/${customer._id}`}>
                        <button>
                            View Order
                        </button>
                    </Link>
                </td>
            </tr>
        )
    }
}

export default Home;