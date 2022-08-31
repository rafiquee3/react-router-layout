import React from "react";

class ContactPage extends React.Component {

    state = {
        value: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        }
        )
    }

    render() {
    return  (
        <>
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                <button>Wyslij</button>
            </form>
        </>
    )
    }
}

export default ContactPage;