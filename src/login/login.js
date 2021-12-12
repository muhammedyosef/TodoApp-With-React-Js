import { useState } from "react";

export default function Login() {
    const mailreg=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const pwreg=/^[0-9]{8,20}$/;
  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });
  const [userErrors, setUserErrors] = useState({
    emailAddress: null,
    password: null,
  });

const handleInputChange=(e)=>{
// console.log(e.target.value, e.target.name);
   if (e.target.name === "emailAddress") {
      setUser({
        ...user,
        emailAddress: e.target.value,
      });
      if (mailreg.test(user.emailAddress)) {
        // console.log(user.emailAddress);
        console.log("your mail valid");
      } else {
        console.log("im here");
        setUserErrors({
          ...userErrors,
          emailAddress: "please enter valid Mail",
        });
      }
    } else if (e.target.name === "password") {
      setUser({
        ...user,
        password: e.target.value,
      });
      if (pwreg.test(e.target.value)) {
        setUserErrors({
          ...userErrors,
          password: null,
        });
      } else {
        setUserErrors({
          ...userErrors,
          password: "please enter 8 digits",
        });
      }

    }
console.log(user);
    




    // switch (e.target.name) {
    //     case "emailAddress":
            
    //       setUserErrors({
    //         ...userErrors,
    //         emailAddress: mailreg.test(e.target.value)===false
    //             ? "enter valid mail"
    //             : null,
    //       });
    //       break;
    //     case "password":
    //       setUserErrors({
    //         ...userErrors,
    //         password: pwreg.test(e.target.value)===false ? "This field is required" : null,
    //       });
    //       break;
    //     default:
    //       break;
    //   }

    };

    const submitLogin = (e) => {
        e.preventDefault();
        // if(mailreg.test(user.emailAddress)){
        // console.log("your mail valid");
        // }else{
        //    setUserErrors({
        //        ...userErrors,
        //        emailAddress:"please enter valid Mail"
        //    }) 
        // };
        // if(pwreg.test(user.password)){
        //     setUserErrors({
        //         ...userErrors,
        //         password:null
        //     }) 
        // }else{
        //     setUserErrors({
        //         ...userErrors,
        //         password:"please enter 8 digits"
        //     }) 
            
        // }
        // if(!userErrors.emailAddress &&!userErrors.password){
        //     console.log(user);
        // }
      };

      const [passwordShown, setPasswordShown] = useState(false);
      const shownPassword = () => {
        setPasswordShown(!passwordShown);
      };
    
  return (
    <>
      <h2> Login</h2>
      <br />
      <form onSubmit={(e) => submitLogin(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            // id="exampleInputEmail1"
           
            name="emailAddress"
            value={user.emailAddress}
            onChange={(e) => handleInputChange(e)}
          />
          <small className="text-danger">{userErrors.emailAddress}</small>
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"} 
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleInputChange(e)}
            name="password"
            value={user.password}
          />
          <small className="text-danger">{userErrors.password}</small>

        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="button" className="btn btn-danger" onClick={shownPassword}>
            show 
        </button>
      </form>
    </>
  );
}
