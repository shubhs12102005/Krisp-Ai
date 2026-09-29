import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { ArrowLeft, CheckCircle2, Eye, EyeOff, KeyRound, Loader2 } from "lucide-react";

/**
 * High-fidelity replica of the Krisp Reset Password page.
 */
export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResetSuccess(true);
    }, 700);
  };

  return (
    <AuthLayout
      headerActionText="Remember your password?"
      headerActionLink="/signin"
      headerActionLabel="Sign in"
    >
      <div className="bg-white rounded-[24px] border border-[#e7e7ea] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-7 sm:p-9 transition-all">
        {resetSuccess ? (
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#eefbf3] text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-[24px] font-bold text-[#131032] mb-2">
              Password updated!
            </h2>
            <p className="text-[14px] text-[#525069] mb-6 leading-relaxed">
              Your password has been successfully reset. You can now use your new password to sign in.
            </p>

            <button
              onClick={() => navigate("/signin")}
              className="w-full h-[46px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] text-[15px] transition-all shadow-sm cursor-pointer"
            >
              Sign in with new password
            </button>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 bg-[#f4f2ff] text-[#614efa] rounded-[16px] flex items-center justify-center mx-auto mb-4">
              <KeyRound size={24} />
            </div>
            <div className="text-center mb-7">
              <h1 className="text-[26px] sm:text-[28px] font-bold tracking-tight text-[#131032] mb-2">
                Set new password
              </h1>
              <p className="text-[14px] text-[#525069]">
                Your new password must be at least 8 characters.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-[10px] text-[13px] font-medium border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#1a1a22] mb-1.5">
                  New password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full h-[46px] px-3.5 pr-11 rounded-[10px] border border-[#d6d6dc] bg-[#fafafc] text-[14px] text-[#131032] placeholder-[#8f8e9d] focus:bg-white focus:border-[#614efa] focus:ring-4 focus:ring-[#614efa]/15 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f8e9d] hover:text-[#131032] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1a1a22] mb-1.5">
                  Confirm new password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your new password"
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
                    <span>Resetting password...</span>
                  </>
                ) : (
                  <span>Reset password</span>
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
