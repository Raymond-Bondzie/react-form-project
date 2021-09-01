import React,{useState} from 'react'

function Fform() {
    const [firstname , setFirstname]= useState("")
    const [lastname , setLastname]= useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [bio , setBio] = useState("")


    function handleFirstname(e) {
        setFirstname(e.target.value)
    }

    function handleLastname(e) {
        setLastname(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleBio(e) {
        setBio(e.target.value)
    }

    

    function handleSubmit(e) {
        e.preventDefualt()
    }

    return(
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input name="firstname" type="firstname" value={firstname} onChange={(e) => handleFirstname(e)} className="funcinput"  />
            <br/>
            <input name="lastname" type="lastname" value={lastname} onChange={(e) => handleLastname(e)}  className="funcinput" />
            <br/>
            <input name="email" type="email" value={email} onChange={(e) => handleEmail(e)} className="funcinput"  />
            <br/>
            <input name="password" type="password" value={password} onChange={(e) => handlePassword(e)}  className="funcinput" />
            <br/>
            <input name="bio" type="text" value={bio} onChange={(e) => handleBio(e)}  className="funcinput" />
            <br/>
            <input type="submit" className="funcsubmit" />   
        </form>

        <h1 className="form">Functional Form</h1>

        </>
    )
     
}

export default Fform;