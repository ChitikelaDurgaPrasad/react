
export const Login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
        <div className="d-flex flex-column gap-4 p-4 border rounded-2">
            <div className="d-flex flex-column gap-2">
                <h3>LogIn</h3>
            </div>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="userId">UserId:</label>
                <input type="text" placeholder="Email or Mobile Number" id="userId"/>
            </div>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="Password">Password:</label>
                <input type="password" placeholder="Password" id="Password"/>
            </div>
            <div className="justify-content-end">
                <button type="button" className="border rounded-2 p-1 px-2">LogIn</button>
            </div>
        </div>
    </div>
  )
}