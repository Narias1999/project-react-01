import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';
import { data } from '../../../data.json';

describe('<Languages />', () => {
  const languages = mount(<Languages languages={data.languages} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test(`Languages has ${data.languages.length} items`, () => {
    expect(languages.find('.Languages-item').length).toBe(data.languages.length);
  });

});
