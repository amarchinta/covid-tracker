import  React , { Component } from 'react';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:{ }
    }
  }

  async componentDidMount(){
     const response = await fetchData();
     this.setState({data: response});
     console.log(this.state.data);
  }

  render(){
    return (
      <div>
        <h1 className={styles.heading}>THis is sample</h1>
        <Cards />
        <Charts />
        <CountryPicker />
      </div>
    )
  }

}