import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Firebase'

class Show extends Component {
    state = {
        testing: {},
        key: '',

    }

    componentDidMount() {
        const ref = db.collection('Testing').doc(this.props.match.params.id)
        ref.get().then(doc => {
            if (doc.exists) {
                this.setState({
                    testing: doc.data(),
                    key: doc.id

                })
                console.log('Keys', doc.id)
            } else {
                console.log('No such data')
            }
        })
    }
    delete = (id) => {
        db.collection('Testing').doc(id).delete().then(() => {
            console.log('Delete data successfully!')
            this.props.history.push('/')
            alert('Deleted')
        }).catch(error => {
            console.log('Error removing data:', error)
        })
    }
    render() {
        console.log('Rendering show')
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h4><Link to='/' className='btn btn-info'>Go Back</Link></h4>
                        <h3 className='panel=title'>
                            {this.state.testing.Name}
                        </h3>
                    </div>
                    <div className='panel-body'>
                        <dl>
                            <dt>FilterStart:</dt>
                            <dd>{this.state.testing.FilterStart}</dd>
                            <dt>FilterEnd:</dt>
                            <dd>{this.state.testing.FilterEnd}</dd>
                            <dt>HeaterStart:</dt>
                            <dd>{this.state.testing.HeaterStart}</dd>
                            <dt>HeaterEnd:</dt>
                            <dd>{this.state.testing.HeaterEnd}</dd>
                            <dt>TempIn:</dt>
                            <dd>{this.state.testing.TempIn}</dd>
                            <dt>TempOut</dt>
                            <dd>{this.state.testing.TempOut}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`} className='btn btn-success'>Edit</Link>
                        <button onClick={this.delete.bind(this, this.state.key)} className='btn btn-danger'>Delete</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Show;