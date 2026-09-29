import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { CheckCircle2, Eye, EyeOff, Loader2, Sparkles } from "lucide-react";

/**
 * High-fidelity replica of the Krisp Sign In page.
 * Frontend-only authentication with interactive feedback and local navigation.
 */
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSSO, setIsSSO] = useState(false);
  const [ssoDomain, setSsoDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authProvider, setAuthProvider] = useState("");

  const handleSignIn = (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setAuthProvider("email");

    setTimeout(() => {
      setLoading(false);
      setAuthSuccess(true);
      // Persist frontend demo session
      try {
        localStorage.setItem(
          "krisp_auth_session",
          JSON.stringify({
            email: email || "demo.user@silgate.com",
            provider: "email",
            timestamp: new Date().toISOString()
          })
        );
      } catch {
        // ignore localStorage errors
      }
    }, 700);
  };

  const handleSocialLogin = (provider) => {
    setLoading(true);
    setAuthProvider(provider);

    setTimeout(() => {
      setLoading(false);
      setAuthSuccess(true);
      const socialEmail = `${provider.toLowerCase()}.user@silgate.com`;
      setEmail(socialEmail);
      try {
        localStorage.setItem(
          "krisp_auth_session",
          JSON.stringify({
            email: socialEmail,
            provider,
            timestamp: new Date().toISOString()
          })
        );
      } catch {
        // ignore
      }
    }, 600);
  };

  const handleFillDemo = () => {
    setEmail("demo@silgate.com");
    setPassword("krisp2026!demo");
  };

  return (
    <AuthLayout
      headerActionText="Don't have an account?"
      headerActionLink="/signup"
      headerActionLabel="Sign up"
    >
      <div className="bg-white rounded-[24px] border border-[#e7e7ea] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-7 sm:p-9 transition-all">
        {authSuccess ? (
          /* Interactive Demo Success State */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#eefbf3] text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-[24px] font-bold text-[#131032] mb-2">
              Signed in successfully!
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f4f2ff] text-[#614efa] rounded-full text-[13px] font-semibold mb-4">
              <Sparkles size={14} /> Frontend Demo Session Active
            </div>
            <p className="text-[14px] text-[#525069] mb-6 leading-relaxed">
              Logged in as <strong className="text-[#131032]">{email || "demo@silgate.com"}</strong>
              {authProvider && authProvider !== "email" && ` via ${authProvider}`}.
              No external credentials were required.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/ai-meeting-assistant")}
                className="w-full h-[46px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] transition-all shadow-sm cursor-pointer"
              >
                Go to AI Meeting Assistant
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full h-[46px] bg-[#f4f4f5] hover:bg-[#e7e7ea] text-[#131032] font-semibold rounded-[12px] text-[15px] transition-all cursor-pointer"
              >
                Return to Home
              </button>
              <button
                onClick={() => {
                  setAuthSuccess(false);
                  setEmail("");
                  setPassword("");
                }}
                className="text-[13px] text-[#757585] hover:text-[#131032] underline pt-2 cursor-pointer"
              >
                Sign in with another account
              </button>
            </div>
          </div>
        ) : (
          /* Normal Sign In Screen */
          <div>
            {/* Header Titles */}
            <div className="text-center mb-8">
              <h1 className="text-[28px] sm:text-[30px] font-bold tracking-tight text-[#131032] mb-2">
                Sign in to Krisp
              </h1>
              <p className="text-[15px] text-[#525069]">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Quick Demo Fill Pill */}
            <div className="mb-6 flex justify-center">
              <button
                type="button"
                onClick={handleFillDemo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f2ff] hover:bg-[#eae6ff] border border-[#d8d2fc] text-[#614efa] text-[12px] font-bold transition-all cursor-pointer shadow-2xs"
              >
                <Sparkles size={13} />
                <span>Quick demo credentials</span>
              </button>
            </div>

            {/* Social Logins */}
            <div className="space-y-3 mb-6">
              {/* Google Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                disabled={loading}
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#e5e5ea] hover:border-[#b8b8c5] hover:bg-[#fafafc] bg-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 shadow-2xs"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Microsoft Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin("Microsoft")}
                disabled={loading}
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#e5e5ea] hover:border-[#b8b8c5] hover:bg-[#fafafc] bg-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 shadow-2xs"
              >
                <svg width="20" height="20" viewBox="0 0 23 23" className="flex-shrink-0">
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                <span>Continue with Microsoft</span>
              </button>

              {/* Apple Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin("Apple")}
                disabled={loading}
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#e5e5ea] hover:border-[#b8b8c5] hover:bg-[#fafafc] bg-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 shadow-2xs"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#131032] flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.4c.65-.79 1.1-1.89.98-3-.95.04-2.1.64-2.77 1.43-.59.68-1.11 1.79-.97 2.87 1.06.08 2.11-.53 2.76-1.3z" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="w-full border-t border-[#e7e7ea]"></div>
              <span className="bg-white px-3 text-[13px] font-semibold text-[#8f8e9d] uppercase tracking-wider absolute">
                or
              </span>
            </div>

            {/* Email Form */}
            {!isSSO ? (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#1a1a22] mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#d6d6dc] bg-[#fafafc] text-[14px] text-[#131032] placeholder-[#8f8e9d] focus:bg-white focus:border-[#614efa] focus:ring-4 focus:ring-[#614efa]/15 outline-none transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[13px] font-bold text-[#1a1a22]">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-[13px] text-[#614efa] hover:text-[#4a3bbe] font-semibold hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full h-[46px] px-3.5 pr-11 rounded-[10px] border border-[#d6d6dc] bg-[#fafafc] text-[14px] text-[#131032] placeholder-[#8f8e9d] focus:bg-white focus:border-[#614efa] focus:ring-4 focus:ring-[#614efa]/15 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f8e9d] hover:text-[#131032] transition-colors cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[48px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <span>Sign in with Email</span>
                  )}
                </button>
              </form>
            ) : (
              /* SSO Form */
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#1a1a22] mb-1.5">
                    Company SSO Domain
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={ssoDomain}
                      onChange={(e) => setSsoDomain(e.target.value)}
                      placeholder="company.com"
                      className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#d6d6dc] bg-[#fafafc] text-[14px] text-[#131032] placeholder-[#8f8e9d] focus:bg-white focus:border-[#614efa] focus:ring-4 focus:ring-[#614efa]/15 outline-none transition-all"
                    />
                  </div>
                  <p className="text-[12px] text-[#757585] mt-1.5">
                    Enter your organization domain or workspace address.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[48px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Connecting to SSO...</span>
                    </>
                  ) : (
                    <span>Continue with SSO</span>
                  )}
                </button>
              </form>
            )}

            {/* Toggle SSO */}
            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => setIsSSO(!isSSO)}
                className="text-[13px] font-bold text-[#525069] hover:text-[#131032] hover:underline cursor-pointer"
              >
                {isSSO ? "← Back to standard login" : "Continue with Single Sign-On (SSO)"}
              </button>
            </div>

            {/* Terms and Privacy Footer */}
            <div className="mt-8 pt-6 border-t border-[#f0f0f4] text-center">
              <p className="text-[12px] text-[#757585] leading-relaxed">
                By signing in, you agree to Krisp's{" "}
                <Link to="/pricing" className="text-[#614efa] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/contact-sales" className="text-[#614efa] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Switch to Sign Up */}
      <div className="mt-6 text-center text-[14px] text-[#525069]">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-bold text-[#614efa] hover:text-[#4a3bbe] hover:underline ml-1"
        >
          Sign up for free
        </Link>
      </div>
    </AuthLayout>
  );
}
