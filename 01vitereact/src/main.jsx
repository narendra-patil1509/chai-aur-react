import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type:'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit'
// }
const anotherUser = 'This is Variable';

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//React read every component as like tree structure below reactElement is example
const reactElement = React.createElement(
  'a',
  {href:'https://netflix.com',target:'_blank'},
  'Netflix Go',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App/>
)
