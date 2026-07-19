"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/ProgressBar";

interface StepProps {
  data: any;
  updateData: (fields: any) => void;
  onNext?: () => void;
  onBack?: () => void;
}

function PersonalInfo({ data, updateData, onNext }: StepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!data.fullName?.trim()) errs.fullName = "Required";
    if (!data.email?.trim()) errs.email = "Required";
    if (!data.phone?.trim()) errs.phone = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Full Name" error={errors.fullName}>
        <input
          type="text"
          value={data.fullName || ""}
          onChange={(e) => updateData({ fullName: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="Your full name"
        />
      </Field>
      <Field label="Email Address" error={errors.email}>
        <input
          type="email"
          value={data.email || ""}
          onChange={(e) => updateData({ email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="your@email.com"
        />
      </Field>
      <Field label="Phone Number" error={errors.phone}>
        <input
          type="tel"
          value={data.phone || ""}
          onChange={(e) => updateData({ phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="+91 98765 43210"
        />
      </Field>
      <div className="pt-2">
        <button type="submit" className="w-full py-3.5 gradient-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]">
          Next
        </button>
      </div>
    </form>
  );
}

function AcademicInfo({ data, updateData, onNext, onBack }: StepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!data.college?.trim()) errs.college = "Required";
    if (!data.course?.trim()) errs.course = "Required";
    if (!data.year?.trim()) errs.year = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="College Name" error={errors.college}>
          <input type="text" value={data.college || ""} onChange={(e) => updateData({ college: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="College name" />
        </Field>
        <Field label="University">
          <input type="text" value={data.university || ""} onChange={(e) => updateData({ university: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="University name" />
        </Field>
        <Field label="Course" error={errors.course}>
          <input type="text" value={data.course || ""} onChange={(e) => updateData({ course: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. B.Tech" />
        </Field>
        <Field label="Year / Class" error={errors.year}>
          <select value={data.year || ""} onChange={(e) => updateData({ year: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
            <option value="">Select year</option>
            {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Postgraduate", "PhD"].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </Field>
        <Field label="Application Number">
          <input type="text" value={data.applicationNo || ""} onChange={(e) => updateData({ applicationNo: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="App no." />
        </Field>
        <Field label="Roll Number">
          <input type="text" value={data.rollNo || ""} onChange={(e) => updateData({ rollNo: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Roll no." />
        </Field>
        <Field label="Enrollment Number">
          <input type="text" value={data.enrollmentNo || ""} onChange={(e) => updateData({ enrollmentNo: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Enrollment no." />
        </Field>
        <Field label="City">
          <input type="text" value={data.city || ""} onChange={(e) => updateData({ city: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="City" />
        </Field>
      </div>
      <Field label="State">
        <input type="text" value={data.state || ""} onChange={(e) => updateData({ state: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="State" />
      </Field>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className="flex-1 py-3.5 border border-border font-semibold rounded-2xl hover:bg-gray-50 transition-all">Back</button>
        <button type="submit" className="flex-1 py-3.5 gradient-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]">Next</button>
      </div>
    </form>
  );
}

function DocumentUpload({ data, updateData, onNext, onBack }: StepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!data.studentId) errs.studentId = "Please upload your Student ID";
    if (!data.confirmCorrect) errs.confirmCorrect = "Please confirm";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <UploadField
        label="Student ID *"
        error={errors.studentId}
        file={data.studentId}
        onFile={(f) => updateData({ studentId: f })}
      />
      <UploadField
        label="Fee Receipt (Optional)"
        file={data.feeReceipt}
        onFile={(f) => updateData({ feeReceipt: f })}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.confirmCorrect || false}
          onChange={(e) => updateData({ confirmCorrect: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-muted">I confirm all details are correct.</span>
      </label>
      {errors.confirmCorrect && <p className="text-xs text-red-500">{errors.confirmCorrect}</p>}
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className="flex-1 py-3.5 border border-border font-semibold rounded-2xl hover:bg-gray-50 transition-all">Back</button>
        <button type="submit" className="flex-1 py-3.5 gradient-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]">Submit</button>
      </div>
    </form>
  );
}

function SuccessStep({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, delay: 0.2 }}
        className="w-20 h-20 rounded-full gradient-blue flex items-center justify-center mx-auto mb-6 shadow-lg"
      >
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <h2 className="text-2xl font-bold mb-3">Application Submitted Successfully</h2>
      <p className="text-muted mb-2">Thank you.</p>
      <p className="text-muted text-sm max-w-md mx-auto leading-relaxed mb-8">
        Your student verification request has been received successfully. Once your application is reviewed, you can continue to the final redemption step.
      </p>
      <button
        onClick={onContinue}
        className="px-8 py-3.5 gradient-orange text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-500/25 transition-all active:scale-[0.98]"
      >
        Continue
      </button>
    </motion.div>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function UploadField({
  label,
  error,
  file,
  onFile,
}: {
  label: string;
  error?: string;
  file: File | null;
  onFile: (f: File | null) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
        {file ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">{file.name}</span>
            <button type="button" onClick={() => onFile(null)} className="text-xs text-red-500 hover:text-red-600">Remove</button>
          </div>
        ) : (
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onFile(f);
              }}
            />
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0L8 8m4-4l4 4m-8 8v2a2 2 0 002 2h4a2 2 0 002-2v-2" />
              </svg>
              <span className="text-sm text-muted">Click to upload</span>
            </div>
          </label>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const updateData = useCallback((fields: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  }, []);

  const steps = [
    <PersonalInfo key="p" data={formData} updateData={updateData} onNext={() => setStep(1)} />,
    <AcademicInfo key="a" data={formData} updateData={updateData} onNext={() => setStep(2)} onBack={() => setStep(0)} />,
    <DocumentUpload key="d" data={formData} updateData={updateData} onNext={() => setStep(3)} onBack={() => setStep(1)} />,
    <SuccessStep key="s" onContinue={() => window.location.href = "/coupon-redemption"} />,
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {step < 4 && (
        <div className="mb-8">
          <ProgressBar current={step} total={4} />
        </div>
      )}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {steps[step]}
      </motion.div>
    </div>
  );
}
