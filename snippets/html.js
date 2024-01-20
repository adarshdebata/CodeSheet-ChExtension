export function generateCode(codeSnippet) {
    switch (codeSnippet) {
        case 'boilerplate':
            return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My HTML Page</title>\n</head>\n<body>\n  <!-- Your HTML content goes here -->\n</body>\n</html>';
        case 'marqueeTag':
            return '<marquee>Hello, World!</marquee>';
        case 'anchorTag':
            return '<a href="https://www.example.com" target="_blank">Visit Example.com</a>';
        case 'orderList':
            return '<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ol>';
        case 'unorderedList':
            return '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>';
        case 'table':
            return '<table border="1">\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n  <tr>\n    <td>Data 3</td>\n    <td>Data 4</td>\n  </tr>\n</table>';
        // Add other HTML elements as needed
        default:
            return 'Invalid code snippet for HTML';
    }
}
