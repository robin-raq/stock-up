import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SignUpPage extends Component {
    state ={
        name: '',
        email: '',
        password: ''
    }
    render() {
        return (
            <main className = "pa4 black-80">
                <form className = "measure center" onSubmit={this.handleSubmit}>
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                    <div class="mt3">
                        <input className="pa2 input-reset ba hover-bg-black hover-white w-100" onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder= "name"/>
                    </div>
                    <div class="mt3">
                        <input className="pa2 input-reset ba  hover-bg-black hover-white w-100" onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder= "email"/>
                    </div>
                    <div class="mv3">
                        <input className ="b pa2 input-reset ba  hover-bg-black hover-white w-100" onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="password"/>
                    </div>
                    </fieldset>
                    <div>
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
                    </div>
                </form>
            </main>
            


            // <div>
            //     <h1>Signup please!</h1>
            //         <form>
            //             <input type="text" name="name" placeholder="name"/>
            //             <input type="email" name="email" placeholder="email"/>
            //             <input type="password" name="password" placeholder="password"/>
            //             <input type="submit" value="Signup"/>
            //         </form>
            // </div>
        )
    }
}
