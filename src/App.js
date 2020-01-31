import React from 'react';
import Container from './Components/Container';
import ajax  from '@fdaciuk/ajax';


class App extends React.Component{
       constructor(){
         super();
         this.state = {
            breedValue:'',
            fontValue:'',
            colorValue:'',
            inputValue:'',
            dog:{
              status:true,
              name:'spaniel welsh',
              url_img:'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_4181.jpg'
            }
         };

         this.handlerBreedValue = this.handlerBreedValue.bind(this);
         this.handlerFontValue = this.handlerFontValue.bind(this);
         this.handlerColorValue = this.handlerColorValue.bind(this);
         this.handlerInputValue = this.handlerInputValue.bind(this);
         this.getDog = this.getDog.bind(this);

       }

       handlerBreedValue(e){
          this.setState({breedValue:e.target.value})
       }
       
       handlerFontValue(e){
        this.setState({fontValue:e.target.value})
       }

       handlerColorValue(e){
        this.setState({colorValue:e.target.value})
       }
       
       handlerInputValue(e){
        this.setState({inputValue:e.target.value})
       }

       getDog(e){
         console.log(this.state.inputValue)
       }



       render(){
         return (
           <Container 
             breedValue = {this.state.breedValue}
             fontValue = {this.state.fontValue}
             colorValue = {this.state.colorValue}
             inputValue = {this.state.inputValue}
             dog = {this.state.dog}
             handlerBreedValue = {this.handlerBreedValue}
             handlerFontValue = {this.handlerFontValue}
             handlerColorValue={this.handlerColorValue}
             handlerInputValue = {this.handlerInputValue}
             getDog={this.getDog}
           /> 
         )
       }
}

export default App;
