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
            console.log('[LOGIN-PAGE] Submitting login form');
            const result = await submitAdminLogin({ email, password });
            console.log('[LOGIN-PAGE] Login successful, received result:', result);
            setSuccess(`Welcome ${result.admin?.name || "Admin"}!`);

            if (result.token) {
                console.log('[LOGIN-PAGE] Token found in result, storing...');
                setAdminToken(result.token);
                console.log('[LOGIN-PAGE] Token stored, verifying...');
                const storedToken = localStorage.getItem('adminToken');
                console.log('[LOGIN-PAGE] Verification - Token in localStorage:', storedToken ? 'YES' : 'NO');
                // notify other components in this tab
                try { window.dispatchEvent(new Event('admin-login')); } catch { }
                setTimeout(() => {
                    navigate("/upload-image");
                }, 400);
            } else {
                console.log('[LOGIN-PAGE] Warning: No token in response');
                setError("Login succeeded but no token received");
            }
        } catch (err) {
            console.log('[LOGIN-PAGE] Login error:', err.message);
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
        <div className="min-h-screen bg-white">
            <section>
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

                    {/* LEFT: illustration & info - Hidden on mobile */}
                    <div className="hidden md:flex min-h-screen bg-amber-50 items-start md:items-center">
                        <div className="w-full max-w-2xl mx-auto px-6 md:px-12 py-8 md:py-12 text-center">
                            <img
                                src="/img/login.svg"
                                alt="Login Illustration"
                                className="mx-auto mb-4 md:mb-6 w-64 md:w-96 h-64 md:h-96 object-contain"
                            />
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">Welcome Back</h2>
                            <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                                Sign in to access your reports and services.
                            </p>
                            <p className="text-sm md:text-base text-gray-700">
                                Access your certificates, service requests, and verification history in one secure place.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: login form */}
                    <div className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-8 md:py-0">
                        <div className="w-full max-w-sm md:max-w-lg">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-600 text-center mb-2">Sign In</h1>
                            <p className="text-center text-sm md:text-base text-gray-600 mb-6 md:mb-8">Enter your details to continue.</p>

                            {error && (
                                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-xs sm:text-sm font-medium">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-xs sm:text-sm font-medium">
                                    {success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 bg-white text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 bg-white text-sm"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-amber-600" />
                                        <span>Remember me</span>
                                    </label>
                                    <button type="button" className="text-amber-600 hover:underline">Forgot password?</button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-2 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base transition ${isLoading ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'}`}
                                >
                                    {isLoading ? "Signing in..." : "Sign In"}
                                </button>
                            </form>

                            <div className="mt-4 md:mt-6 text-xs sm:text-sm text-center text-gray-600">
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