import '@testing-library/jest-dom/extend-expect';
import React from 'react';
global.React = React;

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {
        // do nothing
      },
      removeListener: () => {
        // do nothing
      },
    }
  },
})

Object.defineProperty(window, 'location', {
  value: {
    href: '',
    host: 'localhost',
    replace: jest.fn(),
    origin: '',
  },
  writable: true,
})

window.scroll = jest.fn
window.alert = jest.fn

window.epaas = {
  api: {
    getPersistence: jest.fn(),
    setPersistence: jest.fn(),
    deletePersistence: jest.fn(() => true),
    initialize: jest.fn(),
    addEventListener: jest.fn((eventName, cb) => cb()),
  },
}
