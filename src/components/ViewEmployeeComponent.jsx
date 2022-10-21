import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';

class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        const id = this.state.id;
        console.log('VewEmployeeComponent id='+id);
        EmployeeService.getEmployeeById(id).then( resp => {
            this.setState({employee: resp.data});
            console.log(this.state.employee);
        })
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>view employee detail</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col'>
                                 <label>Fist Name : </label>
                            </div> 
                            <div className='col'>
                                 {this.state.employee.firstName}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                 <label>Last Name : </label>
                            </div> 
                            <div className='col'>
                                 {this.state.employee.lastName}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                 <label>Email : </label>
                            </div> 
                            <div className='col'>
                                 {this.state.employee.email}
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent) ;