import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui): RenderResult => render(ui)

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
