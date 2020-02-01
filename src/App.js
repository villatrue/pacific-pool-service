import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
// import Chat from './components/Boss/Boss';

const App = ()=>(
    <Router>
        <Route path="/" exact component={Home} />
        {/* <Route path="/admin" component={Boss} /> */}
    </Router>
);

export default App;