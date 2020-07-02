import React, { Component } from 'react';
import { db } from './Firebase'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './App.css';


class App extends Component {
  ref = db.collection('Testing')
  unsubscribe = null
  state = {
    Testing: [],
    isLoading: false
  }

  onCollectionUpdate = (querySnapshot) => {
    const Testing = []
    querySnapshot.forEach((doc) => {
      const { Name, FilterStart, FilterEnd, HeaterStart, HeaterEnd, TempIn, TempOut } = doc.data()
      Testing.push({
        key: doc.id,
        doc,
        Name,
        FilterStart,
        FilterEnd,
        HeaterStart,
        HeaterEnd,
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
  render() {
    const { Testing, isLoading } = this.state
    return (
      <div className="container-fluid">
        {isLoading ?
          <div className='alert alert-success' role='alert'>Successfully loaded</div> :
          <div className='alert alert-danger' role='alert'>No data Loading</div>
        }
        <div className='alert alert-'></div>
        <div className='panel-default'>
          <div className='panel panel-heading'>
            <h1>Filter & Heater Reading</h1>
          </div>
          <div className='panel pane-body'>
            <h3><Link to='/create' className='btn btn-info'>Add</Link></h3>
            <div className='table table-responsive-sm'>
              <table className='table table-striped'>

                <thead>
                  <tr>
                    <th> Name</th>
                    <th>FilterStart</th>
                    <th>FilterEnd</th>
                    <th>HeaterStart</th>
                    <th>HeaterEnd</th>
                    <th>TempIn</th>
                    <th>TempOut</th>
                  </tr>
                </thead>
                <tbody>
                  {Testing.map((val) =>
                    <tr>
                      <td key={val.id}><Link to={`/show/${val.key}`}>{val.Name}</Link></td>
                      <td>{moment(val.FilterStart).calendar()}</td>
                      <td>{moment(val.FilterEnd).calendar()}</td>
                      <td>{moment(val.HeaterStart).calendar()}</td>
                      <td>{moment(val.HeaterEnd).calendar()}</td>
                      <td>{val.TempIn}</td>
                      <td>{val.TempOut}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>



        {/* {isLoading ? "true" : "false"} */}

      </div>
    )
  }

}

export default App;
