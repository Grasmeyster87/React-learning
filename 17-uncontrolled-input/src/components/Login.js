
function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()

        const userdata = {
            username: event.target.username.value,
            password: event.target.password.value,
        }

        console.log(userdata)
        alert(JSON.stringify(userdata))
    }
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username: <input type="text" name="username" /></label>
                <label> Password: <input type="password" name="password" /> </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login