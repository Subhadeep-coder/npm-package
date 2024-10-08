
# int-to-words

`int-to-words` is a JavaScript/Node.js package that converts numeric values into their English word representation. This utility is particularly useful for applications that need to present numbers as words, such as in financial documents, educational software, or any system where numbers need to be human-readable.

## Features

- Converts integers to their corresponding English words.
- Supports numbers from zero to billions.
- Handles edge cases such as zero and negative numbers.
- Simple, lightweight, and easy to integrate into any project.

## Installation

Install the package via npm:

```bash
npm install int-to-words
```

## Usage

Below is an example of how to use the `int-to-words` package:

```javascript
const { IntToWord } = require('int-to-words');

// Convert a number to words
const number = 1002;
const wordRepresentation = IntToWord(number);

console.log(wordRepresentation); // Outputs: "One Thousand Two."
```

### API

#### `IntToWord(num)`

- **Parameters**: 
  - `num` *(number)*: The number you want to convert to words.
  
- **Returns**: 
  - *(string)*: The word representation of the provided number.

### Example

```javascript
const { IntToWord } = require('int-to-words');

console.log(IntToWord(123));        // Outputs: "One Hundred Twenty Three."
console.log(IntToWord(1000000));    // Outputs: "One Million."
console.log(IntToWord(100200));     // Outputs: "One Hundred Thousand Two Hundred."
console.log(IntToWord(0));          // Outputs: "Zero."
console.log(IntToWord(-1));         // Outputs: "Negative numbers are not supported."
```

## Contributing

We welcome contributions to the `int-to-words` package! If you discover any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

The `int-to-words` package was created to provide an easy way to convert numbers into words for various applications. We hope it simplifies your projects as much as it has for ours.
