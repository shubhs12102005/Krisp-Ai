import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { ArrowLeft, CheckCircle2, KeyRound, Loader2, Mail } from "lucide-react";

/**
 * High-fidelity replica of the Krisp Forgot Password page.
 * Provides frontend demo simulation without external redirects.
 */
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  };

  return (
    <AuthLayout
      headerActionText="Remember your password?"
      headerActionLink="/signin"
      headerActionLabel="Sign in"
    >
      <div className="bg-white rounded-[24px] border border-[#e7e7ea] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-7 sm:p-9 transition-all">
        {sent ? (
          /* Sent Confirmation State */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#eefbf3] text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-[24px] font-bold text-[#131032] mb-2">
              Check your email
            </h2>
            <p className="text-[14px] text-[#525069] mb-6 leading-relaxed">
              We've sent a password reset link to <strong className="text-[#131032]">{email}</strong>.
              In this frontend demo, you can directly proceed to the reset screen below.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/reset-password")}
                className="w-full h-[46px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <KeyRound size={16} />
                <span>Set New Password (Demo)</span>
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="w-full h-[46px] bg-[#f4f4f5] hover:bg-[#e7e7ea] text-[#131032] font-semibold rounded-[12px] text-[15px] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>Return to Sign in</span>
              </button>
            </div>
          </div>
        ) : (
          /* Forgot Password Form */
          <div>
            <div className="w-12 h-12 bg-[#f4f2ff] text-[#614efa] rounded-[16px] flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <div className="text-center mb-7">
              <h1 className="text-[26px] sm:text-[28px] font-bold tracking-tight text-[#131032] mb-2">
                Reset your password
              </h1>
              <p className="text-[14px] text-[#525069] leading-relaxed">
                Enter the email address associated with your account and we’ll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[48px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending reset link...</span>
                  </>
                ) : (
                  <span>Send reset link</span>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#f0f0f4] text-center">
              <Link
                to="/signin"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#525069] hover:text-[#131032] transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Sign in</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
