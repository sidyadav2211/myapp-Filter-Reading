import React, { Component } from 'react'
import { db } from '../Firebase'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Stop from './Stop'

class Data extends Component {
    ref = db.collection('Testing').limit(5)
    unsubscribe = null
    state = {
        Testing: [],
        isLoading: false,
        activePage: 1
    }
    onCollectionUpdate = (querySnapshot) => {
        const Testing = []
        querySnapshot.forEach((doc) => {
            const { Name, FilterStart, HeaterStart, TempIn, TempOut } = doc.data()
            Testing.push({
                key: doc.id,
                doc,
                Name,
                FilterStart,

                HeaterStart,

                TempIn,
                TempOut
            })
        })
        this.setState({
            Testing,
            isLoading: true
        })
        console.log(Testing)
    }

    componentDidMount() {

        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

        // db.collection('Testing').get() //getting data
        //   .then(querySnapshot => {

        //     const testingData = querySnapshot.docs.map(doc => doc.data())


        //     this.setState({
        //       Testing: testingData,
        //       isLoading: true
        //     })
        //     console.log('add', testingData)
        //   })

        // console.log('True')
    }
    componentWillUnmount() {
        this.unsubscribe = null
    }
    // handleSign = () => {


    //   firebaseAuth.signOut()
    //   console.log('successfull')




    // }
    //Button enter Change the page
    handlerPageChange1 = (p1) => {
        db.collection('Testing').limit(10).get()
            .then(querySnapshot => {
                const testing = querySnapshot.docs.map(doc => doc.data())
                if (testing) {
                    this.setState({
                        Testing: testing,
                        activePage: p1
                    })
                } else {
                    console.log('Data not found')
                }
            })
    }
    handlerPageChange2 = (p2) => {
        db.collection('Testing').limit(30).get()
            .then(querySnapshot => {
                const testing = querySnapshot.docs.map(doc => doc.data())
                if (testing) {
                    this.setState({
                        Testing: testing,
                        activePage: p2
                    })
                } else {
                    console.log('Data not found')
                }
            })
    }
    handlerPageChange3 = (p3) => {
        db.collection('Testing').limit(80).get()
            .then(querySnapshot => {
                const testing = querySnapshot.docs.map(doc => doc.data())
                if (testing) {
                    this.setState({
                        Testing: testing,
                        activePage: p3
                    })
                } else {
                    console.log('Data not found')
                }
            })
    }
    handlerPageChange4 = (p4) => {
        db.collection('Testing').limit(200).get()
            .then(querySnapshot => {
                const testing = querySnapshot.docs.map(doc => doc.data())
                if (testing) {
                    this.setState({
                        Testing: testing,
                        activePage: p4
                    })
                } else {
                    console.log('Data not found')
                }
            })
    }
    handlerPageChange5 = (p5) => {
        db.collection('Testing').limit(500).get()
            .then(querySnapshot => {
                const testing = querySnapshot.docs.map(doc => doc.data())
                if (testing) {
                    this.setState({
                        Testing: testing,
                        activePage: p5
                    })
                } else {
                    console.log('Data not found')
                }
            })
    }

    render() {
        const { Testing, isLoading } = this.state

        return (

            <div className="container">

                {isLoading ?
                    <div className='alert alert-success' role='alert'>Successfully loaded</div> :
                    <div className='alert alert-danger' role='alert'>No data Loading</div>
                }
                {/* <button onClick={() => firebaseAuth.signOut()} className='btn btn-primary'
          style={{ float: "right", margin: '10px' }}>Sign Out</button> */}
                <div className='panel-default'>
                    <div className='panel panel-heading'>
                        <h1>Filter & Heater Reading</h1>
                    </div>
                    <div className='panel pane-body'>
                        <h3><Link to='/create' className='btn btn-info'>Start</Link></h3>



                        <div className='table table-responsive-sm'>
                            <table className='table table-striped'>

                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th>FilterStart</th>

                                        <th>HeaterStart</th>

                                        <th>TempIn</th>
                                        <th>TempOut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Testing.map((val, id) =>
                                        <tr>
                                            <td key={id}><Link to={`/show/${val.key}`}>{val.Name}</Link></td>
                                            <td>{moment(val.FilterStart).format("MMMM Do YYYY, h:mm:ss a")}</td>

                                            <td>{moment(val.HeaterStart).format("MMMM Do YYYY, h:mm:ss a")}</td>

                                            <td>{val.TempIn}</td>
                                            <td>{val.TempOut}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                        <button className='btn btn-outline-primary' onClick={this.handlerPageChange1}
                            value={this.state.activePage}>1</button>
                        <button className='btn btn-outline-primary' onClick={this.handlerPageChange2}
                            value={this.state.activePage}>2</button>
                        <button className='btn btn-outline-primary' onClick={this.handlerPageChange3}
                            value={this.state.activePage}>3</button>
                        <button className='btn btn-outline-primary' onClick={this.handlerPageChange4}
                            value={this.state.activePage}>4</button>
                        <button className='btn btn-outline-primary' onClick={this.handlerPageChange5}
                            value={this.state.activePage}>5</button>
                    </div>
                </div>



                {/* {isLoading ? "true" : "false"} */}
                <h3><Link to='/create1' className='btn btn-info'>End</Link></h3>
                <Stop />

            </div>
        )
    }

}
export default Data;