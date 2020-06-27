import React, { Component } from 'react'
import { db } from '../Firebase'

import { Link } from 'react-router-dom'

class Create extends Component {
    state = {
        Name: '',
        FilterStart: '',
        FilterEnd: '',
        HeaterStart: '',
        HeaterEnd: '',
        TempIn: '',
        TempOut: ''
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('Values')
    }
    submitHandle = (e) => {
        e.preventDefault()
        db.collection('Testing').add({
            Name: this.state.Name,
            FilterStart: this.state.FilterStart,
            FilterEnd: this.state.FilterEnd,
            HeaterStart: this.state.HeaterStart,
            HeaterEnd: this.state.HeaterEnd,
            TempIn: this.state.TempIn,
            TempOut: this.state.TempOut
        }).then(() => {
            this.setState({
                Name: '',
                FilterStart: '',
                HeaterStart: '',
                FilterEnd: '',
                HeaterEnd: '',
                TempIn: '',
                TempOut: ''
            })
            this.props.history.push('/')
            alert('Data submited')
        }).catch(error => {
            console.log('Error While loading Doc', error)
        })


    }

    render() {

        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h3 className='panel-title'>Add New Reading</h3>
                    </div>
                    <div className='panel-body'>
                        <h4><Link to='/' className='btn btn-info'>Go Back</Link></h4>
                        <form onSubmit={this.submitHandle}>
                            <div className='form-group'>
                                <label for='Name'>Name:</label>
                                <input type='text' value={this.state.Name} name='Name' onChange={this.changeHandle}
                                    placeholder='Name' id='Name' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for='FilterStart'>FilterStart:</label>
                                <input type='datetime-local' value={new Date(this.state.FilterStart.seconds * 1000).toLocaleString("en-IN")} name='FilterStart' onChange={this.changeHandle}
                                    id='FilterStart' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for="FilterEnd">FilterEnd:</label>
                                <input type='datetime-local' name='FilterEnd' value={new Date(this.state.FilterEnd.seconds * 1000).toLocaleString("en-IN")} onChange={this.changeHandle}
                                    id='FilterEnd' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for='HeaterStart'>HeaterStart:</label>
                                <input type='datetime-local' name='HeaterStart' value={new Date(this.state.HeaterStart.seconds * 100).toLocaleString("en-IN")} onChange={this.changeHandle}
                                    className='form-control' id='HeaterStart' />
                            </div>
                            <div className='form-group'>
                                <label for='HeaterEnd'>HeaterEnd:</label>
                                <input type='datetime-local' name='HeaterEnd' value={new Date(this.state.HeaterEnd.seconds * 1000).toLocaleString("en-IN")} onChange={this.changeHandle}
                                    className='form-control' id='HeaterEnd' />
                            </div>
                            <div className='form-group'>
                                <label for='TempIn'>TempIn:</label>
                                <input type='number' value={this.state.TempIn} name='TempIn' onChange={this.changeHandle}
                                    className='form-control' id='TempIn' />
                            </div>
                            <div className='form-group'>
                                <label for='TempOut'>TempOut</label>
                                <input type='number' value={this.state.TempOut} name='TempOut' onChange={this.changeHandle}
                                    className='form-control' id='TempOut' />
                            </div>
                            <buttom type='submit' className='btn btn-primary'>Submit</buttom>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
export default Create;