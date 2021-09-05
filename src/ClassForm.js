import React,{Component} from 'react'

class Classform extends React.Component {
    constructor(){
        super();
        this.state = {
            firstname: "", 
            lastname: "",
            email: "",
            password: "",
            bio: ""
    };
    }

    handleFirstname(e) {
        this.setState({firstname: e.target.value})
    }

    handleLastname(e) {
        this.setState({lastname: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleBio(e) {
        this.setState({bio: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            firstname: "", 
            lastname: "",
            email: "",
            password: "",
            bio: ""
        })
    }

    render(){
        return(
            <>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input name="firstname" type="firstname" value={this.state.firstname} onChange={(e) => this.handleFirstname(e)} className="funcinput"/>
                <br/>
                <input name="lastname" type="text" value={this.state.lastname} onChange={(e) => this.handleLastname(e)} className="funcinput"/>
                <br/>
                <input name="email" type="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} className="funcinput"/>
                <br/>
                <input name="password" type="password" value={this.state.password} onChange={(e) => this.handlePassword(e)} className="funcinput"/>
                <br/>
                <input name="bio" type="text" value={this.state.bio} onChange={(e) => this.handleBio(e)} className="funcinput"/>
                <br/>
                <br/>
                <input type="submit" className="classBTN"/>
                 <h1 className="form">Class Form</h1>
            </form>
            </>
        )
    }


}

export default Classform;