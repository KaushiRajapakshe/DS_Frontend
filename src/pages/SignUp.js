import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from './UserFunctions';
import axios from 'axios';
import '../jquery-3.3.1.min.js';
import '../bundle.js';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            phoneNo: '',
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);

        const user = {
            name: this.state.name,
            phoneNo: this.state.phoneNo,
            email: this.state.email,
            password: this.state.password,
            hasAgreed: this.state.hasAgreed,
        };
        axios.post()
        signUp(user).then(res => {
            this.props.history.push('/signIn')
        })
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" required value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="phoneNo">Phone Number</label>
                        <input type="text" id="phoneNo" className="FormField__Input" pattern="[0-9]{10}" placeholder="Enter your phone number" name="phoneNo" required value={this.state.phoneNo} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" required value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" required value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" required value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <Link to="/sign-in"><button className="FormField__Button mr-20">Sign Up</button></Link> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp;