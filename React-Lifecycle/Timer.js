import React from 'react';

class Timer extends React.Component {
    state = {
        error: false
    };

    componentDidMount() {
        console.log("Timer is mounted.");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.interval !== this.props.interval) {
            console.log(`Interval changed from ${prevProps.interval} to ${this.props.interval}`);
        }
    }

    componentWillUnmount() {
        console.log("Timer is being unmounted.");
    }

    render() {
        if (this.state.error) {
            throw new Error('An intentional error occurred!');
        }
        return <h1>Timer Interval: {this.props.interval} seconds</h1>;
    }
}

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        console.log("Error caught in Error Boundary:", error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTimer: true,
            interval: 1
        };
    }

    toggleTimer = () => {
        this.setState(prevState => ({
            showTimer: !prevState.showTimer
        }));
    }

    changeInterval = () => {
        this.setState({ interval: this.state.interval + 1 });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleTimer}>
                    {this.state.showTimer ? 'Hide Timer' : 'Show Timer'}
                </button>
                <button onClick={this.changeInterval}>Change Interval</button>
                <ErrorBoundary>
                    {this.state.showTimer ? <Timer interval={this.state.interval} /> : null}
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
