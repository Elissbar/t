import React from 'react';
import Home from './components/Home';
import SelectAuto from './components/SelectAuto';

const Routes = {
    "/home": () => <Home/>,
    "/select": () => <SelectAuto/>,
}

export default Routes;