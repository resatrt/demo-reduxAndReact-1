import React,{Component} from 'react';


class App extends Component{
 add1(){
   this.props.onAdd1()
 }
 add2(){
   this.props.onAdd2()
 }
 add3(){
   this.props.onAdd3()
 }
 add4(){
   this.props.onAdd4()
 }

  render(){
    return (
      <div>
       你点击了<span id='value'>{this.props.value}</span>
       <div>
          <button id='add' onClick={()=>this.add1()}>+1</button>
          <button id='minus' onClick={()=>this.add2()}>-1</button>
          <button id='addIfOdd' onClick={()=>this.add3()}>如果是单数就+1</button>
          <button id='addIfSync' onClick={()=>this.add4()}>两秒后+1</button>
       </div>
     </div>
    )
  }
}


export default App;
