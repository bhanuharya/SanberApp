import React from 'react';
<<<<<<< HEAD
import Main from './components/Main';

import SkillScreen from './SkillScreen.js';


export default class App extends React.Component {
  render() {
    return (
      //<Main />
      <SkillScreen/>
    );
  }
=======
import Register from './RegisterScreen';
import Login from './LoginScreen';
import About from './AboutScreen';

export default function App() {
  return (
    // <Register />,
    <About />
    //<Login />
  );
>>>>>>> 0bc81577e6f73b9a0452066d16b0cfe1881690e7
}