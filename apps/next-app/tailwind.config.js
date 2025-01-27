const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [nextui()],
}
