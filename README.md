# TinyQuery

A lightweight and modern JavaScript library for DOM manipulation and event handling, inspired by jQuery.

## Installation

```bash
npm install tinyquery
```

```javascript
import { $ } from 'tinyquery';
$('#elementId')
    .text('New Text')
    .css('color', 'blue')
    .on('click', () => {
        alert('Element clicked!');
});

```

## Features

- DOM Manipulation: text(), html(), val(), append(), prepend()
- Event Handling: on(), off(), trigger(), click()
- CSS Manipulation: css(), addClass(), removeClass(), toggleClass()
- Traversing: parent(), children()
- Form Handling: serialize()
- Chaining Methods
- Utility Functions: each()
