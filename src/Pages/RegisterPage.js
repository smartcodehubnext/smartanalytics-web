import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_REGISTER } from "../store/Actions";
export default function RegisterPage() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.authState);

  const [userModel, setuserModel] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",

    isTermAggred: false
  });
  if (user && user.email) {
    if (!user.emailConfirmed) return <Redirect to="/verify-email" />;
    else return <Redirect to="/" />;
  }
  const handleChange = e => {
    e.persist();
    setuserModel({ ...userModel, [e.target.name]: e.target.value });
  };
  const registeruserModel = () => {
    const uModel = _.pick(userModel, [
      "name",
      "email",
      "password",
      "isTermAggred"
    ]);
    dispatch({ type: AUTH_REGISTER, payload: uModel });
  };
  return (
    <div class="register">
      <div class="login-bg"></div>
      <div class="login-content">
        <div class="login-box">
          <div class="login-header">
            <h3>Create New Account</h3>
            <p>Complete this simple form to register.</p>
          </div>
          <div class="login-body">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  value={userModel.name}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Your Name "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="email"
                  value={userModel.email}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Your Email "
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  value={userModel.password}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Your password "
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="cpassword"
                  value={userModel.cpassword}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Repeat Your password "
                />
              </div>
              <div class="custom-control custom-checkbox form-group">
                <input
                  type="checkbox"
                  name="isTermAggred"
                  onChange={e => {
                    e.persist();
                    setuserModel({
                      ...userModel,
                      isTermAggred: e.target.checked
                    });
                  }}
                  checked={userModel.isTermAggred}
                  class="custom-control-input"
                  id="exampleCheck1"
                />
                <label class="custom-control-label" for="exampleCheck1">
                  I agree to
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Terms &amp; Conditions
                  </a>
                </label>
              </div>
              {loading ? (
                <h3>Loading</h3>
              ) : (
                <button
                  onClick={registeruserModel}
                  type="button"
                  class="btn btn-primary"
                >
                  Register
                </button>
              )}
            </form>
            <p class="m-t-sm">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div class="login-footer">
            <p>Copyright @Code hub online education LLP</p>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Terms &amp; Conditions
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Praesent cursus pretium urna, sit amet condimentum dui dignissim
              non. Pellentesque laoreet velit sollicitudin enim dignissim, vitae
              imperdiet mauris facilisis. Integer eget diam pellentesque,
              placerat metus at, placerat tellus. Morbi a lacus arcu. Ut urna
              orci, varius ac sem in, eleifend vehicula purus. Aenean egestas
              nibh non porttitor vestibulum. Donec imperdiet, risus at
              vestibulum interdum, erat sem commodo mauris, et dignissim quam
              libero in ipsum. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Nam porta consequat
              lorem, et fermentum justo ullamcorper non. In quis rutrum ante,
              quis mattis erat. Maecenas in odio tortor. Sed ut viverra sem.
              Pellentesque purus ipsum, aliquet bibendum risus vitae, elementum
              vestibulum nunc. Cras porttitor, quam ut sodales consequat, neque
              nibh aliquam tellus, a venenatis enim urna vel dolor. Suspendisse
              tincidunt, justo et finibus eleifend, nunc libero fringilla
              turpis, eu egestas neque dui quis nulla. Proin eu efficitur elit.
              Curabitur nulla nulla, scelerisque nec molestie ac, consectetur
              rhoncus lectus. Integer pulvinar nisl purus, auctor placerat leo
              euismod ut. In tempor ante a varius ultrices. Fusce pretium tortor
              in mauris mollis faucibus.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
