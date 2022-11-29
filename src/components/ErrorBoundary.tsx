import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {

        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <div className="container text-center mt-3 pt-3">
                <div className="card p-4">
                    <h1 className="text-danger"> Opss...</h1>
                    <h3>We Have An Error!</h3>
                    <h6>Please Try Again</h6>
                </div>
            </div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;