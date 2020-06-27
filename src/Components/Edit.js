import React, { Component } from 'react'
import { db } from '../Firebase'
import { Link } from 'react-router-dom'

class Edit extends Component {
    state = {
        key: '',
        Name: '',
        FilterStart: '',
        FilterEnd: '',
        HeaterStart: '',
        HeaterEnd: '',
        TempIn: '',
        TempOut: ''

    }
    componentDidMount() {
        const ref = db.collection('Testing').doc(this.props.match.params.id)
        ref.get().then((doc) => {
            if (doc.exists) {
                const testing = doc.data()
                console.log('Geeting Data', doc.data)
                this.setState({
                    key: doc.id,
                    Name: testing.Name,
                    FilterStart: testing.FilterStart,
                    FilterEnd: testing.HeaterEnd,
                    HeaterStart: testing.HeaterStart,
                    HeaterEnd: testing.HeaterEnd,
                    TempIn: testing.TempIn,
                    TempOut: testing.TempOut
                })
            } else {
                console.log("No Such Documents")
            }
        })
    }
    chnageHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandle = (e) => {
        e.preventDefault()
        const { Name, FilterStart, FilterEnd, HeaterStart, HeaterEnd, TempIn, TempOut } = this.state
        const updateRef = db.collection('Testing').doc(this.state.key)
        updateRef.set({
            Name,
            FilterStart,
            FilterEnd,
            HeaterStart,
            HeaterEnd,
            TempIn,
            TempOut
        }).then((docRef) => {
            this.setState({
                key: '',
                Name: '',
                FilterStart: '',
                FilterEnd: '',
                HeaterStart: '',
                HeaterEnd: '',
                TempIn: '',
                TempOut: '',
            })
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch(error => {
                console.log("Error adding Documents :", error);

            })
    }
    render() {
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>

                        <h3 className='panel-title'>Edit</h3>
                    </div>
                    <div className='panel-body'>
                        <h4><Link to={`/show/${this.state.key}`} className='btn btn-info'>Go Back</Link></h4>
                        <form onSubmit={this.submitHandle}>
                            <div className='form-goup'>
                                <label for='Name'>Name:</label>
                                <input type='text' name='Name' value={this.state.Name}
                                    onChange={this.chnageHandle} className='form-control' id='Name' />
                            </div>
                            <div className='form-goup'>
                                <label for='FilterStart'>FilterStart:</label>
                                <input type='datetime-local' name='FilterStart' value={this.state.FilterStart}
                                    onChange={this.chnageHandle} className='form-control' id='FilterStart' />
                            </div>
                            <div className='form-goup'>
                                <label for='FilterEnd'>FilterEnd</label>
                                <input type='datetime-local' name='FilterEnd' value={this.state.FilterEnd}
                                    onChange={this.chnageHandle} className='form-control' id='FilterEnd' />
                            </div>
                            <div className='form-goup'>
                                <label for='HeaterStart'>HeaterStart</label>
                                <input type='datetime-local' name='HeaterStart' value={this.state.HeaterStart}
                                    onChange={this.chnageHandle} className='form-control' id='HeaterStart' />
                            </div>
                            <div className='form-goup'>
                                <label for='HeaterEnd'>HeaterEnd</label>
                                <input type='datetime-local' name='HeaterEnd' value={this.state.HeaterEnd}
                                    onChange={this.chnageHandle} className='form-control' id='HeaterEnd' />
                            </div>
                            <div className='form-goup'>
                                <label for='TempIn'>TempIn</label>
                                <input type='number' name='TempIn' value={this.state.TempIn}
                                    onChange={this.chnageHandle} className='form-control' id='TempIn' />
                            </div>
                            <div className='form-goup'>
                                <label for='TempOut'>TempOut</label>
                                <input type='number' placeholder='Temperature' name='TempOut' value={this.state.TempOut}
                                    onChange={this.chnageHandle} className='form-control' id='TempOut' />
                            </div>
                            <button type='submit' className='btn btn-primary' value='Submit' />
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
export default Edit;