# AnimatedBorder Component

The `AnimatedBorder` component adds a customizable animated border effect to its children. It is built with React and can be styled using CSS variables for easy customization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

## Installation

To use the `AnimatedBorder` component, install it via npm or yarn. Ensure that you have the required CSS file included in your project.

```bash
npm install react-animated-border
```

## Usage Example

You can use the `AnimatedBorder` component in your application like this:

```tsx
import React from "react";
import AnimatedBorder from "react-animated-border";

const App = () => {
  return (
    <div style={{ width: '400px', height: '400px'}}>
    <AnimatedBorder borderAnimationColor="rgba(255, 0, 0, 1)">
      <h1>Hello, World!</h1>
    </AnimatedBorder>
    </div>
  );
};

export default App;
```

## Props

| Prop                   | Type        | Required | Default                       | Description                                                   |
|------------------------|-------------|----------|-------------------------------|---------------------------------------------------------------|
| `children`             | `ReactNode` | Yes      | N/A                           | The content to be wrapped inside the animated border.         |
| `borderAnimationColor` | `string`    | No       | `rgba(41, 141, 223, 1)`      | The color of the animated border. You can pass any valid CSS color value. |
| **Note**               | N/A         | N/A      | N/A                           | A div wrapper is added to the `AnimatedBorder`. Without it, the animated border will take the parent's width and height. Check the example for clarification. |

## Animated Border Example

![Animated Border Example](https://github.com/therohitjha/react-animated-border/blob/main/animated-border.gif?raw=true)

*This image demonstrates the animated border effect.*



# useSpotlight Hook

The `useSpotlight` hook creates a spotlight effect that follows the mouse pointer within a component. It allows customization of the spotlight and hotspot colors.

## Props

### `spotlightColor` (optional)

- **Type**: `string`
- **Default**: `"rgba(41, 141, 223, 0.3)"`
- **Description**: The color of the spotlight effect.

### `hotspotColor` (optional)

- **Type**: `string`
- **Default**: `"rgba(255, 255, 255, 1)"`
- **Description**: The color of the area outside the spotlight.

## Props

| Prop Name        | Type   | Required | Default                      | Description                           |
|------------------|--------|----------|------------------------------|---------------------------------------|
| `spotlightColor` | string | No       | `"rgba(41, 141, 223, 0.3)"` | The color of the spotlight effect.    |
| `hotspotColor`   | string | No       | `"rgba(255, 255, 255, 1)"`  | The color of the area outside the spotlight. |




````tsx
import React from 'react';
import useSpotlight from 'react-animated-border';

const SpotlightComponent = () => {
  const { handleMouseMove, spotlightStyle } = useSpotlight();

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '400px', ...spotlightStyle }}
    >
      Hover over this area to see the spotlight effect!
    </div>
  );
};

export default SpotlightComponent;
````
```tsx
import React from 'react';
import useSpotlight from 'react-animated-border';

const Example = () => {
  const { handleMouseMove, spotlightStyle } = useSpotlight('rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)');

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '400px', ...spotlightStyle, position: 'relative' }}
    >
      <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
        Move your mouse here!
      </h2>
    </div>
  );
};

export default Example;
```
## Example Image

![Spotlight Effect Example](https://github.com/therohitjha/react-animated-border/blob/main/spotlight.gif?raw=true)

*This image demonstrates the spotlight effect in action.*

