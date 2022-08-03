import {CustomButton} from '../custom-button.component';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('CustomButton tests', () => {
  test('should render button', () => {
    render(<CustomButton> test </CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('should render passed children', () => {
    render(<CustomButton> test </CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('test');
  });
  test('should render google styling when passed google type', () => {
    render(<CustomButton styles='googleButtonStyle'> test </CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #4285f4');
  });
  test('should render inverted styling when passed inverted type', () => {
    render(<CustomButton styles='invertedButtonStyle'> test </CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: white');
  });



})
  