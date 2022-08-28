import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import About from '..';

const { asFragment } = render(<About />);

afterEach(cleanup);
expect(asFragment()).toMatchSnapshot();

describe('About component', () => {
    //first test
    it('renders', ()=>{
        render(<About/>)
    });
    //second test
    it('matches snapshot DOM node structure', () => {
        // render About
      });

  })