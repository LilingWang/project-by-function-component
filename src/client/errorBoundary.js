import React from "react";
import {MdOutlineErrorOutline} from "react-icons/md";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    goHome() {
        window.location.href = "/createNewUser";
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (<div style={{ marginTop: "15%", marginLeft: "8%" }}>
                
                <h1><MdOutlineErrorOutline style={{width:"40px", height:"40px", marginRight:"30px"}}/> Opps! Something went wrong.</h1>
                <button style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}} onClick={this.goHome}>Go Home</button>

            </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;