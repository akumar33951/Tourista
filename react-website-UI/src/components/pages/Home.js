import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import axios from 'axios';
import {CONSTANT} from '../constants/Constants';
import Spinner from '../Spinner';
import Navbar from '../Navbar';
class Home extends React.Component {
  destinations = [];
  constructor(props){
    super(props);
    this.state = {Loading: true}
    axios.get('http://localhost:3000/destination/delhi').then(response=>{
      this.destinations = response.data;
      console.log(this.destinations);
      this.state.Loading = false;
      this.forceUpdate();
      // this.setState({ Loading: false });
    });
    console.log(this.destinations);
    console.log('here');
   }
  handleClick(event){
    axios.get('http://localhost:3000/destination/'+event).then(response=>{
      this.destinations = response.data;
      console.log(this.destinations);
      this.state.Loading = false;
      this.forceUpdate();  
      //console.log(response.data);
    });
    console.log('here');
  }
  render(){
    console.log(this.destinations);
    console.log(this.state)
    if(this.state.Loading){ 
      return (<Spinner></Spinner>);
    }
    else
    return (
      <>
        <Navbar />
        <HeroSection onChildClick={(event)=>this.handleClick(event)}/>
        <Cards destinations={this.destinations}/>
        <Footer />
      </>
    );
  }
}

export default Home;