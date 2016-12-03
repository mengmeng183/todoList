import React from 'react';

class TodoControl extends React.Component{
  handleClick(i){
    this.props.handleShow(i);
  }
  render(){
    let styles={
      div:{
        margin:'20px 0'
      },
      btn:{
        color:'#fff',
        backgroundColor:'#00bcd4',
        padding:'10px',
        marginLeft:'10px',
        border:'none'
      },
      active:{
        color:'#000',
        backgroundColor:'lightseagreen',
        marginLeft:'10px',
        padding:'15px',
        border:'none'
      }
    }
    let name=['All','Active','Completed'];
    let buttons = name.map( (item,index) =>
      <button key={index} onClick={this.handleClick.bind(this,index)} style={this.props.show==index? styles.active : styles.btn}>{item}</button>
    )
    return(
      <div style={styles.div}>
        {buttons}
      </div>
    )
  }
}

export default TodoControl;
