import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import { data } from '../../../data.json';

describe('<Academic />', () => {
  const academic = mount(<Academic academicItems={data.Academic} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test(`Academic has ${data.Academic.length} items`, () => {
    expect(academic.find('.Academic-item').length).toBe(data.Academic.length);
  });

});
