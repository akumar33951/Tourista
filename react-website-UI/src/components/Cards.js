import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { DestinationCard } from './DestinationCard';
import SelectList from './SelectList';
import axios from 'axios';

class Cards extends React.Component {
  destinations = [];
  constructor(props){
    super(props);
    console.log(props.destinations);
    //this.state = {Loading: true}
    //axios.get('http://localhost:3000/destination/mumbai').then(response=>{
    this.destinations = props.destinations;
    //console.log(this.destinations);
      //this.state.Loading = false;
      //this.forceUpdate();
      // this.setState({ Loading: false });
    //});
    //console.log(this.destinations);
    //console.log('here');
   }

   shouldComponentUpdate (nextProps) {
    // Rendering the component only if
    // passed props value is changed

    if (nextProps.destinations !== this.props.destinations) {
      this.destinations = nextProps.destinations;
      return true;
    } else {
      return false;
    }
  }

  handleClick(event){
    axios.get('http://localhost:3000/destination_tag/' + this.destinations[0].cname +'/'+event).then(response=>{
      this.destinations = response.data;
      console.log(this.destinations);
      //this.state.Loading = false;
      this.forceUpdate();  
      //console.log(response.data);
    });
    console.log('here');
  }
  render(){
    console.log(this.destinations);
    //console.log(this.state)
    // if(this.state.Loading){ 
    //   return (<Spinner></Spinner>);
    // }
    // else
    return (
      //<>
        <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <SelectList onChildClick={(event)=>this.handleClick(event)}></SelectList>
        {/* <SelectList></SelectList> */}
        <div className='cards__container'>
          {this.destinations.map(destination => {
            return <DestinationCard destination={destination}></DestinationCard>
          })}
          {/* <DestinationCard>
          </DestinationCard> */}
          
          {/* <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div> */}
        </div>
        <div className='cards__container'>
          <DestinationCard>
          </DestinationCard>
          <DestinationCard>
          </DestinationCard>
          <DestinationCard>
          </DestinationCard>
          </div>
      </div>
        
        //{/* <HeroSection onChildClick={(event)=>this.handleClick(event)}/>
        //<Cards destinations={this.destinations}/>
        //<Footer /> */}
      //</>
    );
  }
}

export default Cards;



// function Cards({destinations}) {
//   //let destinations = []
//   //destinations = destinations1;
//   const city = destinations[0].city;
//   const forceUpdate: () => void = React.useState()[1].bind(null, {})
//   console.log('city: '+ city);
//   debugger;
//   const handleClick = (event) => {
//     //destinations = event;
//     // console.log("hey there"+ event);

//     axios.get('http://localhost:3000/destination_tag/delhi/' + event).then(response=>{
//       destinations = response.data;
//       console.log(destinations);
    
//       //this.state.Loading = false;
//       forceUpdate();
//       // this.setState({ Loading: false });
//     });

//     console.log("hey there"+ event);
//   };

//   return (
//     <div className='cards'>
//       <h1>Check out these EPIC Destinations!</h1>
//       <p>Filter: <SelectList onChildClick={(event)=>{handleClick(event)}}></SelectList></p>
//       {/* <SelectList></SelectList> */}
//       <div className='cards__container'>
//         {destinations.map(destination => {
//            return <DestinationCard destination={destination}></DestinationCard>
//         })}
//         {/* <DestinationCard>
//         </DestinationCard> */}
        
//         {/* <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-9.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-2.jpg'
//               text='Travel through the Islands of Bali in a Private Cruise'
//               label='Luxury'
//               path='/services'
//             />
//           </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-3.jpg'
//               text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
//               label='Mystery'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-4.jpg'
//               text='Experience Football on Top of the Himilayan Mountains'
//               label='Adventure'
//               path='/products'
//             />
//             <CardItem
//               src='images/img-8.jpg'
//               text='Ride through the Sahara Desert on a guided camel tour'
//               label='Adrenaline'
//               path='/sign-up'
//             />
//           </ul>
//         </div> */}
//       </div>
//       <div className='cards__container'>
//         <DestinationCard>
//         </DestinationCard>
//         <DestinationCard>
//         </DestinationCard>
//         <DestinationCard>
//         </DestinationCard>
//         </div>
//     </div>
//   );
// }

// // export default Cards;
