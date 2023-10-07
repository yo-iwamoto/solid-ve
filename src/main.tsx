/* @refresh reload */
import { App } from './App';
import { render } from 'solid-js/web';
import './styles/theme.css';
import './styles/reset.css';

const root = document.querySelector('#root');
if (root === null) {
  throw new Error('Root element not found');
}

render(() => <App />, root);
