import React, { PureComponent } from 'react';
import classes from './MiniCartAttr.module.css';
import Button from '../../Button/Button';

export class MiniCartAttr extends PureComponent {
  state = {
    hasAttrWithLabel: !!this.props.attributes.find(
      (x) => x.value === 'Yes' || x.value === 'No'
    ),
  };

  attrWithLabel = (el, i) => {
    if (this.state.hasAttrWithLabel) {
      return (
        <div key={i} className={classes.Labels}>
          <Button type='square' sqMini>
            {el.value}
          </Button>
          <p>{el.attr} </p>
        </div>
      );
    } else {
      return (
        <Button key={i} type='square' sqMini>
          {el.value}
        </Button>
      );
    }
  };

  render() {
    const { attributes } = this.props;
    const { hasAttrWithLabel } = this.state;

    return (
      <div
        className={
          hasAttrWithLabel
            ? [classes.Attributes, classes.AttributesWithLabels].join(' ')
            : classes.Attributes
        }
      >
        {attributes?.map((el, i) =>
          el.attr === 'Color' ? (
            <Button
              key={i}
              type='square'
              style={{ backgroundColor: el.value }}
              sqMini
            ></Button>
          ) : (
            this.attrWithLabel(el, i)
          )
        )}
      </div>
    );
  }
}

export default MiniCartAttr;
