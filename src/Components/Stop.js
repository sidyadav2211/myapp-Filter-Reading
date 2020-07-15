import React, { Component } from 'react'
import { db } from '../Firebase'
import moment from 'moment'


// import Pagination from 'react-js-pagination'


class Stop extends Component {
    state = {
        Stop: [],
        activePage: 1,




    }
    ShowData = () => {
        db.collection('Stop').limit(6).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())
                console.log(stop)
                this.setState({
                    Stop: stop,
                    activePage: this.state.activePage

                })


            })

    }

    componentDidMount() {
        this.ShowData()

    }
    handleChangePages = (pageNumber) => {
        db.collection('Stop').orderBy('Name').limit(7).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())

                console.log(stop)
                console.log('Page number is', pageNumber)
                this.setState({
                    Stop: stop,
                    activePage: pageNumber
                })
            })
    }
    //Change page while clcik a button
    handleChangePages1 = (p) => {
        db.collection('Stop').limit(20).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())
                if (stop) {
                    this.setState({
                        Stop: stop,
                        activePage: p
                    })
                } else {
                    console.log('Not found ')
                }
            })
    }
    //Second button chnage
    handleChangePages2 = (p) => {
        db.collection('Stop').limit(40).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())
                if (stop) {
                    this.setState({
                        Stop: stop,
                        activePage: p
                    })
                } else {
                    console.log('Not found ')
                }
            })
    }
    //THird button change
    handleChangePages3 = (p) => {
        db.collection('Stop').limit(60).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())
                if (stop) {
                    this.setState({
                        Stop: stop,
                        activePage: p
                    })
                } else {
                    console.log('Not found ')
                }
            })
    }
    //Change button four
    handleChangePages4 = (p) => {
        db.collection('Stop').limit(20).get()
            .then(querysnapShot => {
                const stop = querysnapShot.docs.map(doc => doc.data())
                if (stop) {
                    this.setState({
                        Stop: stop,
                        activePage: p
                    })
                } else {
                    console.log('Not found ')
                }
            })
    }
    render() {
        const { Stop } = this.state
        // const styles = {
        //     backgroundColor: 'White',
        //     color: 'Red',

        // }

        return (
            <div className='container'>
                <h3>End Reading</h3>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>FilterEnd</th>
                            <th>HeaterEnd</th>
                            <th>TempIn</th>
                            <th>TempOut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Stop.map(res =>
                            <tr>
                                <td key={res}>{res.Name}</td>
                                <td>{moment(res.FilterEnd).format("MMMM Do YYYY, h:mm:ss a")}</td>
                                <td>{moment(res.HeaterEnd).format("MMMM Do YYYY, h:mm:ss a")}</td>
                                <td>{res.TempIn}</td>
                                <td>{res.TempOut}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* List Group */}
                {/* {Stop.map(res =>

                    <ul key={res.id} className='list-group'>
                        <li className='list-group-item active'>{res.Name}</li>
                        <li className='list-group-item'>{moment(res.FilterEnd).format("MMMM Do YYYY, h:mm:ss a")}</li>
                        <li className='list-group-item'>{moment(res.HeaterEnd).format("MMMM Do YYYY, h:mm:ss a")}</li>
                        <li className='list-group-item'>{res.TempIn}</li>
                        <li className='list-group-item'>{res.TempOut}</li>
                        <br />
                    </ul>

                )

                } */}


                {/* <nav className='Page navigation '>
                    <ul className='pagination justify-content-end'>
                        <li className='page-item disabled'>
                            <Link to='#' className='page-link'>Previous</Link>
                        </li>
                        <li className='page-item'><Link to='#' className='page-link'>1</Link></li>

                        <li className='page-item'><Link to='#' className='page-link'>2</Link></li>

                        <li className='page-item'><Link to='#' className='page-link'>3</Link></li>
                        <li className='page-item'><Link to='#' className='page-link'>Next</Link></li>
                    </ul>
                </nav> */}

                {/* <div >
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={2}

                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handleChangePages.bind(this)}
                    />
                </div>
                <h3>SId</h3> */}
                <button onClick={this.handleChangePages} value={this.state.activePage} className="btn btn-outline-primary">1</button>
                <button onClick={this.handleChangePages1} value={this.state.activePage} className="btn btn-outline-primary">2</button>
                <button onClick={this.handleChangePages2} value={this.state.activePage} className="btn btn-outline-primary">3</button>
                <button onClick={this.handleChangePages3} value={this.state.activePage} className="btn btn-outline-primary">4</button>
                <button onClick={this.handleChangePages4} value={this.state.activePage} className="btn btn-outline-primary">5</button>
            </div >
        )
    }


}
export default Stop;