import React, {Component} from 'react';
import './Faq.css';
import axios from 'axios';

export default class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        }
    }

    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const faqs = response
                    .data
                    .slice(0, 10);

                this.setState({faqs});
            })
            .catch(e => {
                this
                    .errors
                    .push(e)
            })
    }

    render() {
        return (
            <div class="faq">
                <div class="container">
                    <section class="section">
                        <h1 class="title">FAQ</h1>
                        <h2 class="subtitle is-4">Lorum ipsum and all of that jazz.</h2>

                        <div class="columns">
                            {this
                                .state
                                .faqs
                                .map(faq => <div class="column is-one-third">
                                    <div class="card">
                                        <div class="card-content">
                                            <p class="title">{faq.title}</p>
                                            <p class="answer">{faq.body}</p>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
