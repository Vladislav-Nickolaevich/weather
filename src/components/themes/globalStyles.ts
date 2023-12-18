
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    // toggleBorder: '#FFF',
    background: '#363537'
};
export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    // toggleBorder: '#6B8096',
    background: '#999',
    border: '#FFF'
};