import React, { Component } from 'react';
import { defaultFetch } from '../function';

// Component fetch price
export default class FetchPriceItemCryptocurrency extends Component {
  state = { price: null };
  componentDidMount() {
    defaultFetch(
      `/data/price?fsym=${this.props.item.Name}&tsyms=USD`,
    ).then(result =>
      this.setState({ price: Object.values(result.data) }),
    );
  }
  render() {
    return <strong>{this.state.price}</strong>;
  }
}
