import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./StreamCreate";
import StreamDelete from "./StreamDelete";
import StreamEdit from "./StreamEdit";
import StreamList from "./StreamList";
import StreamShow from "./StreamShow";
import Header from "./Header";

const App = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact component={StreamList} />
    <Route path="/stream/new" exact component={StreamCreate} />
    <Route path="/stream/edit" exact component={StreamEdit} />
    <Route path="/stream/delete" exact component={StreamDelete} />
    <Route path="/stream/show" exact component={StreamShow} />
  </BrowserRouter>
);

export default App;
