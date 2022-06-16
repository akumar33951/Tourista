import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import {SignUp} from './components/pages/SignUp';
import DescribeDestination from './components/pages/DescribeDestination';
import SideBar from './components/SideBar';
import ViewData from './components/ViewData';
import AddPlaces from './components/AddPlaces';
import UpdatePlaces from './components/UpdatePlaces';
import RemovePlace from './components/RemovePlace';
import AddTagToPlace from './components/AddTagToPlace';
import RemoveTagOfPlace from './components/RemoveTagOfPlace';
import AddTag from './components/AddTag';
import RemoveTag from './components/RemoveTag';
import AddCity from './components/AddCity';
import RemoveCity from './components/RemoveCity';
import AddImages from './components/AddImages';
import UpdateImages from './components/UpdateImages';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/describe-destination' component={DescribeDestination} />
          <Route path='/admin-sideBar' component={SideBar} />
          <Route path='/view-data' component={ViewData} />
          <Route path='/add-place' component={AddPlaces} />
          <Route path='/update-place' component={UpdatePlaces} />
          <Route path='/remove-place' component={RemovePlace} />
          <Route path='/add-image' component={AddImages} />
          <Route path='/Update-Image' component={UpdateImages} />
          <Route path='/add-tag-to-place' component={AddTagToPlace} />
          <Route path='/remove-tag-of-place' component={RemoveTagOfPlace} />
          <Route path='/add-tag' component={AddTag} />
          <Route path='/remove-tag' component={RemoveTag} />
          <Route path='/add-city' component={AddCity} />
          <Route path='/remove-city' component={RemoveCity} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
