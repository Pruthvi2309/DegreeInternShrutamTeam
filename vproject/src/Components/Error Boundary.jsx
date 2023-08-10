import React, { component } from 'react'
class ErrorBoundary extends component {
    constructor(props) {
        super(props)
        this.this.state = {
            hasError: false

        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1> somthing went wrong </h1>
        }
        return this.props.children



    }


}

export default ErrorBoundary