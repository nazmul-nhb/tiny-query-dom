# TinyQuery

A lightweight and modern JavaScript library for DOM manipulation and event handling, inspired by jQuery.

## Installation

```bash
npm install tiny-query-dom
```

```javascript
import { $ } from 'tiny-query-dom';

$("#test").on("click", () => {
    $("#subject")
        .toggle()
        .css({ color: "red", font: "32px bold" })
        .text("No Subject!");
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
