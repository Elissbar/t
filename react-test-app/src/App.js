import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SelectAuto from './components/SelectAuto';
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

// const App = () => {
//   const { location } = useContext(__RouterContext);
//   const transitions = useTransition(location, location => location.pathname, {
//     from: { opacity: 0, transform: "translate(100%, 0)" },
//     enter: { opacity: 1, transform: "translate(0%, 0)" },
//     leave: { opacity: 0, transform: "translate(-50%, 0)" }
//   });
//   return (
//     <div className="app">
//       <Header />
//       {transitions.map(({ item, props, key }) => (
//         <animated.div key={key} style={props}>
//           <Switch location={item}>
//             <Route path="/" component={Home} exact />
//             <Route path="/select" component={SelectAuto} exact />
//           </Switch>
//         </animated.div>
//       ))}
//     </div>
//   )
// }

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="fade">
            <Switch location={location}>
              <Route path="/" component={Home} exact />
              <Route path="/select" component={SelectAuto} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  )
}

export default App;
