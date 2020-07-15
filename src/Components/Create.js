import React, { Component } from 'react'
import { db } from '../Firebase'
import { Link } from 'react-router-dom'
// import moment from 'moment'
class Create extends Component {
    state = {
        Name: '',
        FilterStart: '',

        HeaterStart: '',

        TempIn: '',
        TempOut: ''
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('Values ')
    }
    submitHandle = (e) => {
        e.preventDefault()
        db.collection('Testing').add({
            Name: this.state.Name,
            FilterStart: this.state.FilterStart,

            HeaterStart: this.state.HeaterStart,

            TempIn: this.state.TempIn,
            TempOut: this.state.TempOut
        }).then(() => {
            this.setState({
                Name: '',
                FilterStart: '',

                FilterEnd: '',

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
                                <label htmlFor='Name'>Name:</label>
                                <input type='text' value={this.state.Name} name='Name' onChange={this.changeHandle}
                                    placeholder='Name' id='Name' className='form-control' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='FilterStart'>FilterStart:</label>
                                <input type='datetime-local' value={this.state.FilterStart}
                                    onChange={this.changeHandle} name='FilterStart' id='FilterStart'
                                    className='form-control' />

                            </div>

                            <div className='form-group'>
                                <label htmlFor='HeaterStart'>HeaterStart:</label>
                                <input type='datetime-local'
                                    value={this.state.HeaterStart}
                                    onChange={this.changeHandle}
                                    className='form-control' name='HeaterStart' id='HeaterStart' />

                            </div>


                            <div className='form-group'>
                                <label htmlFor='TempIn'>TempIn:</label>
                                <input type='number' value={this.state.TempIn} name='TempIn' onChange={this.changeHandle}
                                    className='form-control' id='TempIn' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='TempOut'>TempOut</label>
                                <input type='number' value={this.state.TempOut} name='TempOut' onChange={this.changeHandle}
                                    className='form-control' id='TempOut' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>

            </div >
        )
    }
}
export default Create;