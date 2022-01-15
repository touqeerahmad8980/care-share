import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/home/Home';
import BlogListing from './pages/blog-listing/BlogListing';
import Footer from './common/Footer';
import BlogDetail from './pages/blog-detail/BlogDetail';
import BlogDetailCategory from './pages/blog-detail-category/BlogDetailCategory';
import BlogWidget from './common/BlogWidget';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/blogs' component={BlogListing}/>
                        <Route exact path='/blog/:id' component={BlogDetail}/>
                        <Route exact path='/blog/:id/:categoryId' component={BlogDetailCategory}/>
                        <Route path="*" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
