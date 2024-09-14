import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
 } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      n:0,
      bt:'GO!',
      mark: null
    };
    
    this.t = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go(){

    if(this.t != null){
      //aqui para
      clearInterval(this.t);
      this.t = null;
      this.setState({bt:'GO!'});
    }else{
      //começa
      this.t = setInterval( () => {
        this.setState({n: this.state.n + 0.1})
      }, 100);

      this.setState({
        bt: 'STOP!'
      });     

    }
    
  }

  clear(){
    if(this.t != null){
      clearInterval(this.t);
      this.t = null;      
    }       
    this.setState({     
      mark: this.state.n,
      n:0,
      bt: 'GO!'
    });
  }

  render(){
    return(
      <View style={styles.area}>
        <Image 
        source={require('./image/cron.png')}
        style={styles.cron}
        />

        <Text style={styles.time}>{this.state.n.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.txt}>{this.state.bt}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clear}>
            <Text style={styles.txt}>CLEAR!</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.mark}>
            <Text style={styles.mTxt}>              
              {this.state.mark > 0 ? 'Você parou em: ' + this.state.mark.toFixed(2) + 'sec' : ''}
            </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00aaaa'
  },
  time:{
    marginTop:-160,
    fontSize:60,
    color:'white',
    fontWeight:'bold'
  },
  btnArea:{
    marginTop:80,
    height:40,
    flexDirection:'row'
  },
  btn:{
    flex:1,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    margin:17,
    height:40,
    borderRadius:18
  },
  txt:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  mark:{
    marginTop:40,
    height:40,
    fontSize:20,       
  },
  mTxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    fontStyle:'italic'
  }
});

export default App;