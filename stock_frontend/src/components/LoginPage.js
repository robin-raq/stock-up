import React, { Component } from 'react';

export default class LoginPage extends Component {
    state ={
        email: '',
        password: ''
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.token = data.token
                this.props.history.push('/portfolio')
            }
            else{
                alert("Incorrect credentials, please try again!")
            }
        })
    }

    render() {
        return (
            <main className = "pa4 black-80">
                <form className = "measure center" onSubmit={this.handleSubmit}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Login</legend>
                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-100" 
                                onChange={this.handleChange} 
                                value={this.state.email} 
                                type="email" 
                                name="email" 
                                placeholder= "email"
                            />
                        </div>
                        <div className="mv3">
                            <input 
                                className ="b pa2 input-reset ba  hover-bg-black hover-white w-100" 
                                onChange={this.handleChange} 
                                value={this.state.password} 
                                type="password" 
                                name="password" 
                                placeholder="password"/>
                        </div>
                    </fieldset>
                    <div>
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Login"
                        />
                    </div>
                </form>
            </main>
        )
    }
}
