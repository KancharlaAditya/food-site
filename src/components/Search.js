import React,{Component} from 'react';

class search extends Component{
  constructor(props){
    super(props);
    this.state = { location: '',places:[]};
  }
  render(){
    return(
      <div><input type="search"
      onChange={
      e=>{
      this.setState(
        {location: e.target.value},
        ()=>{
        let api='https://developers.zomato.com/api/v2.1/locations?query='+this.state.location+'&count=3';
        console.log("location is "+api);
        fetch(api,{method: 'GET',headers:{'Content-Type': 'application/json','user-key': 'e5d5800f92d7e4e3994902bdaa807d38'}}
             ).then(response => response.json()
           ).then(result=>this.setState({places:result.location_suggestions},
                  ()=>console.log(this.state.places)));
             })
      }
      }>

       </input>

       </div>
);}

}

export default search;
