import * as React from 'react';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import { Container } from './container';

describe('Appointment', () => {
  let classes;
  let shallow;
  beforeAll(() => {
    classes = getClasses(<Container />);
    shallow = createShallow({ dive: true });
  });

  describe('Container', () => {
    it('should pass className to the root element', () => {
      const tree = shallow(<Container className="custom-class" />);

      expect(tree.is('.custom-class'))
        .toBeTruthy();
      expect(tree.is(`.${classes.container}`))
        .toBeTruthy();
    });
    it('should pass rest props to the root element', () => {
      const tree = shallow(<Container data={{ a: 1 }} />);

      expect(tree.props().data)
        .toMatchObject({ a: 1 });
    });
  });
});
