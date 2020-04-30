
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css'

import { Container, Row, Col } from 'react-bootstrap'

import Login               from './components/users/Login';
import Register            from './components/users/Register';
import RecordList          from './components/records/List';
import RecordEditor        from './components/records/Editor'
import RecordViewer        from './components/records/Viewer'
import UserEditor          from './components/users/Editor';
import UserList            from './components/users/List';
import FrontpageRecordList from './components/records/FrontpageList';

import { IfAdmin } from './auth'

function App() {
  return <Container fluid className='bg-container'>
    <div class="backdrop">&nbsp;</div>

    <Row className='row-custom'>
      <Col className='d-flex flex-row justify-content-center'>
        <Link className='link' to="/admin/records/" ><div className='link col-custom'>Records</div></Link>
        <Link className='link' to="/admin/users/" ><div className='link col-custom'>Users</div></Link>
      </Col>
    </Row>

    <IfAdmin>
      <h1>Godmode</h1>
    </IfAdmin>

    <Switch>
      <Route path="/login"             component={Login} />
      <Route path="/register"          component={Register} />
      <Route path="/admin/records/:id" component={RecordEditor} />
      <Route path="/admin/records/"    component={RecordList} />
      <Route path="/admin/users/:id"   component={UserEditor} />
      <Route path="/admin/users/"      component={UserList} />
      <Route path="/records/:id"       component={RecordViewer} />
      <Route path="/"                  component={FrontpageRecordList} />
    </Switch>

  </Container>;
}

export default App;
