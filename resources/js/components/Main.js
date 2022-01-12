import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/home/Home';
import BlogListing from './pages/blog-listing/BlogListing';
import Footer from './common/Footer';
import BlogDetail from './pages/blog-detail/BlogDetail';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/blogs' component={BlogListing}/>
                        <Route path='/blog/:id' component={BlogDetail}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
