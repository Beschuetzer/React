import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import translate from './translate/Translate';
import history from '../history';

// import "../css/style.css";

const App = () => {
	return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Route path="/" component={Header}/>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
          <Route path='/translate' exact component={translate}/>
        </div>
      </Router>
    </div>
	);
};

export default App;
