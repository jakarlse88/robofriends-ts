import * as React from 'react';

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false
        };
    };

    public componentDidCatch(err: Error, info: any): void {
        this.setState({ hasError: true });
    };

    public render(): JSX.Element | any {
        if (this.state.hasError) {
            return <h1>An error has occurred.</h1>;
        } 
        return this.props.children;
    };
};

export default ErrorBoundary;