import React, { Component } from 'react';
import { Homepage } from '../constants';
import { Button } from 'react-bootstrap';

class HomePage extends Component {

    loadHomePage = () => {
        window.location.href = Homepage;
    }

    handleClick = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className){
            case "Beginner":
                return (
                <div>
                  <form>
                        Beginner Questions Here
                  </form>
                </div>)
            break;
            case "Intermediate":
            return (
                <div>
                  <form>
                    Intermediate Questions Here
                  </form>
                </div>)
            break;
            case "Expert":
            return (
                <div>
                  <form>
                    Expert Questions Here
                  </form>
                </div>)
            break;
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Question Sheet</h1>
                <br />

                Interviewee: <input className='name' type='text' required /> REF: 00001 <br /><br />
                <div className="technical">
                    <div className="options">
                        <form>
                            <input type="radio" className="Beginner" name="technicallvl" value="Beginner" onChange={this.handleClick}/>Beginner&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="Intermediate" name="technicallvl" value="Intermediate" onChange={this.handleClick}/>Intermediate&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="Expert" name="technicallvl" value="Expert" onChange={this.handleClick}/>Expert&nbsp;&nbsp;&nbsp;
                        </form>
                    </div>
                </div>
                <br /><br /><br />
                <Button bsStyle="primary" onClick={(event) => { this.loadHomePage(); }}>Logout</Button>
            </div>

        );

    }
}

export default HomePage;