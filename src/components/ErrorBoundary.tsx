import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error caught by ErrorBoundary:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-text-pure px-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-display font-medium mb-3">
              কিছু একটা ভুল হয়েছে
            </h1>
            <p className="text-text-soft mb-6 text-sm">
              পেজ লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করার জন্য নিচের বাটনে ক্লিক করুন।
            </p>
            <button
              onClick={this.handleReload}
              className="bg-accent hover:bg-accent-hover text-primary font-bold px-6 py-3 rounded-full transition-all duration-300"
            >
              রিলোড করুন
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
