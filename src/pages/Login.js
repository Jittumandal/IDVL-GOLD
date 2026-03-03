import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitAdminLogin } from "../utils/api";
import { setAdminToken } from "../utils/auth";
import { isAdminAuthenticated } from "../utils/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        setIsLoading(true);

        if (!email || !password) {
            setError("Please enter your email and password.");
            setIsLoading(false);
            return;
        }

        try {
            const result = await submitAdminLogin({ email, password });
            setSuccess(`Welcome ${result.admin?.name || "Admin"}!`);

            if (result.token) {
                setAdminToken(result.token);
                // notify other components in this tab
                try { window.dispatchEvent(new Event('admin-login')); } catch { }
                setTimeout(() => {
                    navigate("/upload-image");
                }, 400);
            }
        } catch (err) {
            setError(err.message || "Invalid credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isAdminAuthenticated()) {
            navigate('/upload-image');
        }
    }, [navigate]);

    return (
        <div className="min-h-screen">
            <section>
                <div className="min-h-screen grid md:grid-cols-2">

                    {/* LEFT: illustration & info (like VerifyReport) */}
                    <div className="min-h-screen bg-amber-50 flex items-start md:items-center">
                        <div className="w-full max-w-2xl mx-auto p-12 text-center">
                            <img
                                src="/img/login.svg"
                                alt="Login Illustration"
                                className="mx-auto mb-4 w-96 h-100 object-contain"
                            />
                            <h2 className="text-5xl font-extrabold mb-6">Welcome Back</h2>
                            <p className="text-gray-700 mb-4">
                                Sign in to access your reports and services.
                            </p>
                            <p className="text-gray-700">
                                Access your certificates, service requests, and verification history in one secure place.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: login form styled like VerifyReport form */}
                    <div className="flex items-center justify-center p-12">
                        <div className="w-full max-w-lg">
                            <h1 className="text-3xl md:text-5xl font-bold text-amber-600 text-center mb-2">Sign In</h1>
                            <p className="text-center text-gray-600 mb-8">Enter your details to continue.</p>

                            {error && (
                                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-sm font-medium">
                                    {success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-amber-600" />
                                        Remember me
                                    </label>
                                    <button type="button" className="text-amber-600 hover:underline">Forgot password?</button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 rounded-lg text-white font-semibold ${isLoading ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'}`}
                                >
                                    {isLoading ? "Signing in..." : "Sign In"}
                                </button>
                            </form>

                            <div className="mt-6 text-sm text-center text-gray-600">
                                Don’t have an account? <span className="text-amber-600 font-medium">Contact support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;