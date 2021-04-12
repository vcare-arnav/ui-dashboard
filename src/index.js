import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// ----------------------Login/Sinup Integration-------------------------------------
// import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
// import LoginForm from "./components/Login/LoginForm.js";
// import "./assets/css/styles.css";
// -------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
// import "assets/css/login.css";
import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Route path="/" render={(props) => <LoginForm {...props}/>}/> */}
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// Injecting Login

// function Login() {
//   return (
//     <div className="App">
//       <Container>
//         <Row>
//           <Col />
//           <Col lg="8">
//             <Jumbotron>
//               <h3>
//                 Login
//               </h3>
//               <hr />
//               <Card>
//                 <CardBody>
//                   <LoginForm />
//                 </CardBody>
//               </Card>
//             </Jumbotron>
//           </Col>
//           <Col />
//         </Row>
//       </Container>
//     </div>
//   );
// }

// ReactDOM.render(<Login />, document.getElementById("root"));
