import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FAQAccordion from "./components/FAQAccordion";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import "./components/FAQAccordion.css";

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>FAQ Section</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/user/1">User Profile</Link> {/* Example User ID */}
                    </nav>
                </header>
                
                <main>
                    {/* Render Routes */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/user/:userId" component={UserProfile} /> {/* Dynamic Route */}
                        <Route path="*">
                            <h2>404 Not Found</h2> {/* Handle 404 errors */}
                        </Route>
                    </Switch>
                    
                    {/* Existing FAQ Accordion */}
                    <FAQAccordion />
                </main>
            </div>
        </Router>
    );
}

export default App;
