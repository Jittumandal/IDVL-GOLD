import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, info) {
        // You can log error details to an error reporting service here
        // console.error(error, info);
    }

    handleReload = () => {
        // Hard reload to attempt to fetch missing chunks again.
        window.location.reload();
    };

    render() {
        const { error } = this.state;
        if (!error) return this.props.children || null;

        const isChunkError =
            error && (error.name === "ChunkLoadError" || /Loading chunk/i.test(error.message));

        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
                <p className="mb-4">{isChunkError ? "A part of the app failed to load (offline?)." : error.message}</p>
                {isChunkError ? (
                    <>
                        <button
                            onClick={this.handleReload}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Retry to Reload
                        </button>
                        <p className="mt-2 text-sm text-gray-500">Try again when you have network access.</p>
                    </>
                ) : (
                    <button
                        onClick={this.handleReload}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Reload
                    </button>
                )}
            </div>
        );
    }
}
