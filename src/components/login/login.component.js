import React, {Component} from 'react';

class LoginComponent extends Component {


  htmlForm() {
    return (
      <form>
        <div className="col-md-12 m_b_03">
          <i className="icon-user"></i>
          <input placeholder="Email" type="text" name="email" />
        </div>
        <div className="col-md-12 m_b_01">
          <i className="icon-lock"></i>
          <input placeholder="Password" type="password" name="password" />
        </div>
        <div className="col-md-12">
          <p className="color_error"></p>
        </div>
        <div className="col-md-12">
          <input type="submit" value="SIGN IN" className="button button_03 "/>
        </div>
      </form>
    );
  }

  socialMedia(name, classname) {
    const classData = `button button_rs ${classname}`
    return (
      <div className="col-md-12">
        <div className={classData}>
        <i className="icon-facebook"></i>{name}</div>
      </div>
    );
  }

  render() {
    const styleRemenber = {
      marginTop:'-20px !important'
    }
    return(
      <div>
        <div className="box-image text-center">
          <div className="logo-ir "></div>
        </div>
        <div className="box-form">
          <div className="row">
            <div className="col-md-12 m_b_02">
                <h2>Sign in</h2>
            </div>

            { this.htmlForm() }

            <div className="col-md-12">
              <div className="inf pull-left">
                <input type="checkbox" className="filled-in" id="now1" />
                <label htmlFor="now1"></label>
                <p className=" font_check fs12" style={styleRemenber}>Remember</p>
              </div>
              <div className="inf pull-left text-right">
                <p className="font1 fs12">Forgot password?</p>
              </div>
            </div>

            {this.socialMedia('FaceBook', 'bg_facebook')}
            {this.socialMedia('Google', 'bg_google')}

            <div className="col-md-12 text-center m_b_01">
              <p className="font2">Are you new? <a href="#"><span className="text_b">Create an account</span></a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginComponent;