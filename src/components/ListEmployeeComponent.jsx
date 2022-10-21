import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService';

import { withRouter } from '../withRouter';

class ListEmployeeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {

            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);


    }

    

    componentDidMount(){
        EmployeeService.getEmployees().then(
            (resp) => {
                this.setState({ employees: resp.data});
            }
        );
    }

    addEmployee = () => {
        console.log("sono in addEmployee");
        //this.props.history.push('/add-employee');
        this.props.navigate('/add-employee/_add');
    }

    editEmployee = (id) => {
        console.log("sono in editEmployee id="+id);
        this.props.navigate('/add-employee/'+id);

    }

    deleteEmployee = (id) => {
        console.log("sono in deleteEmployee id="+id);
        EmployeeService.deleteEmployee(id).then( 
            (resp) => {
                console.log('-------DELETE---------');
                this.setState({employees: this.state.employees.filter(employee => employee.id !== id )})
                //this.props.navigate('/employees')
            });
        

    }
    viewEmployee = (id) => {
        console.log("sono in viewEmployee id="+id);
        this.props.navigate(`/view-employee/${id}`);

    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row '>
                    <div className='column'>
                        <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                        {/* <a className="btn btn-primary" href="/add-employee" role="button">Add Employee</a> */}
                    </div>
                </div>
                <div className='row mt-1'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Fist Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={ ()=> this.editEmployee(employee.id)} style={{marginRight: "10px"}}>Update</button>
                                                <button className='btn btn-danger' onClick={ ()=> this.deleteEmployee(employee.id)} style={{marginRight: "10px"}}>Delete</button>
                                                <button className='btn btn-success' onClick={ ()=> this.viewEmployee(employee.id)} >Detail</button>
                                            </td>

                                        </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


//export default WithNavigate

export default withRouter(ListEmployeeComponent) ;