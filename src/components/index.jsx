import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { doAddList } from '../actions';
import { defaultFetch } from '../function';

import FetchPriceItemCryptocurrency from './FetchPrice';
import Item from './Item';

function resolveCoinlistQuery(queryResult) {
  const result = [];
  Object.values(queryResult.data.Data).map(item =>
    result.push(item),
  );
  return [...result];
}

class App extends PureComponent {
  componentDidMount() {
    defaultFetch('/data/all/coinlist').then(res =>
      this.props.onAddList(resolveCoinlistQuery(res)),
    );
  }

  render() {
    const { list } = this.props;
    return (
      <div className="main">
        <HeaderTable />

        {list.map(item => (
          <Item key={item.Id} item={item}>
            <FetchPriceItemCryptocurrency item={item} />
          </Item>
        ))}
      </div>
    );
  }
}

const HeaderTable = () => (
  <ul className="list">
    <li className="list-header">
      <h5>№</h5>
      <h5>Icon</h5>
      <h5>Name</h5>
      <h5>1 coin / USD</h5>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {
    list: state.cryptoState,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddList: result => dispatch(doAddList(result)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
