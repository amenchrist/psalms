import React from 'react';

const SignUpForm = ({display, toggleDisplay}) => {
    const style = {
        display: display
    }
    return (
        <div className='ba bg-light-green' style={style}>
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 tc">Join the Community</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"></input>
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db" id='linkToSignInForm' onClick={toggleDisplay}>Already in? Sign In</a>
                    </div>
                </form>
                </main>
        </div>
    );
}

export default SignUpForm;