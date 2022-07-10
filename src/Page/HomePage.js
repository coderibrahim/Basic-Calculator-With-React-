import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

 class HomePage extends Component {

    state = {
        number:"",
        number2:"",
        result:0
    }

    onChange = (e) =>{
        e.preventDefault();
        this.setState({
            number:e.target.value
        })
    } 

    onCalculate = () => {
        const body = this.state.number;
        const notify = () => toast("Mission Complete");

        Axios.get("/?expr=" + body)
        .then((response) => {
            this.setState({number:response.data}) 
            notify()
        }).catch(error => {

        });        
    }
    
  render() {
    return (
      <div className='container-lg mt-5 mx-auto' style={{width: "500px"}} >
        <h1 className='text-white'>Basic Calculator</h1>
        
        <div className='mt-5 '>
        <div className='form-group row'>
            <input  className='form-control col-12' value={this.state.number} onChange={this.onChange} placeholder='Enter Number' name='calculate-area' />
        </div>
        <div className='row mt-5' style={{height:'50px'}}>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : ""})}><b>AC</b></button>
            <button className='col-3 btn btn-warning' ><img src="https://img.icons8.com/ios/40/000000/delete-forever--v1.png"/></button>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : this.state.number.toString() + "%"})}><img src="https://img.icons8.com/metro/26/000000/percentage2--v1.png"/> </button>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : this.state.number.toString() + "/"})} ><img src="https://img.icons8.com/windows/32/000000/divide.png"/> </button>
        </div>
        <div className='row mt-3 ' style={{height:'50px'}}>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "7" })}><b>7</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "8" })}><b>8</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "9" })}><b>9</b></button>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : this.state.number.toString() + "*"})}><b>X</b></button>
        </div>
        <div className='row mt-3' style={{height:'50px'}}>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "4" })}><b>4</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "5" })}><b>5</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "6" })}><b>6</b></button>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : this.state.number.toString() + "-"})}><b>-</b></button>
        </div>
        <div className='row mt-3' style={{height:'50px'}}>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "1" })}><b>1</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "2" })}><b>2</b></button>
            <button className='col-3 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "3" })}><b>3</b></button>
            <button className='col-3 btn btn-warning' onClick={() => this.setState({ number : this.state.number.toString() + "%2B"})}><b>+</b></button>
        </div>
        <div className='row mt-3' style={{height:'50px'}}>
            <button className='col-4 btn btn-success' onClick={() => this.setState({number: this.state.number.toString() + ","})}><b>,</b></button>
            <button className='col-4 btn btn-success' onClick={() => this.setState({ number : this.state.number.toString() + "0" })}><b>0 </b></button>
            <button className='col-4 btn btn-warning' onClick={this.onCalculate}><b>=</b></button>
        </div>

        <ToastContainer />
        </div>
        
      </div>
    )
  }
}
export default HomePage;
