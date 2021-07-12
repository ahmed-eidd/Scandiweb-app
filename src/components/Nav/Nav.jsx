import React, { PureComponent } from 'react';
import CartIcon from './NavIcons/NavCart/NavCart';
import DollarIcon from './NavIcons/NavCurr/NavCurr';
import Logo from '../Logo/Logo';
import classes from './Nav.module.css';
import NavItems from './NavItems/NavItems';
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../../graphql/Queries';
import { connect } from 'react-redux';
import { cartModalAction, currModalAction } from '../../store/modals/actions';

export class Nav extends PureComponent {
  render() {
    return (
      <Query query={GET_CURRENCIES}>
        {({ data  }) => (
          <nav className={classes.Nav}
        >
            <NavItems />
            <Logo />
            <div className={classes.Icons}>
              <DollarIcon currencies={data?.currencies} />
              <CartIcon />
            </div>
          </nav>
        )}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  cartOpen: state.modals.cartOpen,
  currOpen: state.modals.currOpen,
});

const mapDispatchToProps = {
  cartHandler: cartModalAction,
  currHandler: currModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
