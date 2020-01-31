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
            listDogs:[],
            dog:{
              status:true,
              url_img:'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_4181.jpg'
            }
         };
         this.getList();
         this.handlerBreedValue = this.handlerBreedValue.bind(this);
         this.handlerFontValue = this.handlerFontValue.bind(this);
         this.handlerColorValue = this.handlerColorValue.bind(this);
         this.handlerInputValue = this.handlerInputValue.bind(this);
         this.getDog = this.getDog.bind(this);

       }

       handlerBreedValue(e){
          this.setState({breedValue:e.target.value})
          setTimeout(()=>{
            ajax().get(`https://dog.ceo/api/breed/${this.state.breedValue.replace(' ','/')}/images/random`).then( (response)=> {
              this.setState({
                dog:{
                  url_img:response.message,
                  status: response.status === 'success'
                }
              })
            })
          .always(()=>console.log('Err!'));
          }
          ,500)
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

       getList() {
        ajax().get('https://dog.ceo/api/breeds/list/all').then( (response)=> {
          const newList = []
          Object.keys(response.message).forEach(function(item,index,arr){
            newList.push(item)
            if(item.length>0)
              newList.push( ...response.message[item].map((last)=>`${item} ${last}`))
          });
          this.setState({listDogs:newList})
      })
      }

       render(){
         return (
           <Container 
             breedValue = {this.state.breedValue}
             fontValue = {this.state.fontValue}
             colorValue = {this.state.colorValue}
             inputValue = {this.state.inputValue}
             listDogs = {this.state.listDogs}
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
