import app from './app';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Failed to find the #root');

const root = createRoot(rootElement);

root.render(<StrictMode>{app}</StrictMode>);
