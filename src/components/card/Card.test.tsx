import { shallow } from "enzyme";
import Card from './Card';
import robots from '../../utils/robots';

import * as React from 'react';

describe('Card component', () => {
    it('expects to render the Card component', () => {
        expect(shallow(<Card {...robots[0]}/>)).toMatchSnapshot();
    })
});
