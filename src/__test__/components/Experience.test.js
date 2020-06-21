import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';
import { data } from '../../../data.json';

describe('<Experience />', () => {
  const experience = mount(<Experience experienceItems={data.experience} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test(`Experience have ${data.experience.length} items`, () => {
    expect(experience.find('.Experience-item').length).toBe(data.experience.length);
  });

});
