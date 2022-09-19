import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';

// TODO:add test
describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
