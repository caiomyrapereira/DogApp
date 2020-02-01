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
              status:false,
              url_img:''
            },
            saveActual:{
              font:'',
              color:'',
              date:'',
              save:false
            }
         };
         this.getList();
         this.initialize();
         this.handlerBreedValue = this.handlerBreedValue.bind(this);
         this.handlerFontValue = this.handlerFontValue.bind(this);
         this.handlerColorValue = this.handlerColorValue.bind(this);
         this.handlerInputValue = this.handlerInputValue.bind(this);
         this.toSave = this.toSave.bind(this)
       }
       
       initialize(){
         const img = localStorage.getItem('url_img');
         if(!!img){
         setTimeout(()=>{
          
          const name = localStorage.getItem('dogName');
          const font = localStorage.getItem('font');
          const color = localStorage.getItem('color');
          const date = localStorage.getItem('date');

           this.setState({
             dog:{
              url_img:img,
              status:true
             },
             saveActual:{
               font:font,
               color:color,
               date:date,
               save:true,
               name:name
              }
            })
            
           console.log(this.state.saveActual.color)
           console.log(this.state.saveActual)
         },50)
        }
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
          }
          ,50)
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

       toSave(e){
         setTimeout(()=>{
           const dateActual = new Date().toLocaleString('br-PT').replace(' ',' - ');
           localStorage.setItem('url_img',this.state.dog.url_img);
           localStorage.setItem('dogName',!!this.state.inputValue ? this.state.inputValue: localStorage.getItem('dogName'));
           localStorage.setItem('font',this.state.fontValue);
           localStorage.setItem('color',this.state.colorValue);
           localStorage.setItem('date',dateActual);
         },100)
         alert('Sucesso!')
         window.location.reload();
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
             saveActual = {this.state.saveActual}
             handlerBreedValue = {this.handlerBreedValue}
             handlerFontValue = {this.handlerFontValue}
             handlerColorValue={this.handlerColorValue}
             handlerInputValue = {this.handlerInputValue}
             toSave = {this.toSave}
           /> 
         )
       }
}

export default App;
