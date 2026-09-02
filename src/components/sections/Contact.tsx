import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { budgetOptions, timelineOptions } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
  budget?: string;
  timeline?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  project: "",
  budget: "",
  timeline: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.project.trim()) {
    errors.project = "Tell us what you want to build";
  } else if (data.project.trim().length < 10) {
    errors.project = "Please provide a bit more detail";
  }

  if (!data.budget) {
    errors.budget = "Please select a budget range";
  }

  if (!data.timeline) {
    errors.timeline = "Please select a timeline";
  }

  return errors;
}

const inputClasses =
  "w-full rounded-lg border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30";

const labelClasses = "mb-2 block text-sm font-medium text-text-secondary";

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative border-t border-border/50 py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="// contact"
              index="08"
              title="Start a project"
              subtitle="Fill out the brief below and we'll get back to you within 48 hours. No spam, no sales funnel — just engineers."
            />

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@weekendcoders.dev"
                className="flex items-center gap-3 font-mono text-sm text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <Mail className="h-4 w-4" />
                hello@weekendcoders.dev
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-muted transition-colors hover:text-text-primary"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-muted transition-colors hover:text-text-primary"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-8 py-16 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle className="mb-4 h-12 w-12 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-text-primary">
                    Brief received!
                  </h3>
                  <p className="mt-2 max-w-sm text-text-secondary">
                    Thanks for reaching out. We'll review your project and get
                    back to you within 48 hours.
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                      setErrors({});
                    }}
                  >
                    Send another brief
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-border bg-surface-card/50 p-6 backdrop-blur-sm sm:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company{" "}
                      <span className="text-text-muted">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className={labelClasses}>
                      What do you want to build?{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Describe your project idea, goals, and any specific requirements..."
                      aria-invalid={!!errors.project}
                      aria-describedby={
                        errors.project ? "project-error" : undefined
                      }
                    />
                    {errors.project && (
                      <p id="project-error" className="mt-1 text-xs text-red-400">
                        {errors.project}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget range <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={inputClasses}
                        aria-invalid={!!errors.budget}
                        aria-describedby={
                          errors.budget ? "budget-error" : undefined
                        }
                      >
                        <option value="">Select budget</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p id="budget-error" className="mt-1 text-xs text-red-400">
                          {errors.budget}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="timeline" className={labelClasses}>
                        Timeline <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className={inputClasses}
                        aria-invalid={!!errors.timeline}
                        aria-describedby={
                          errors.timeline ? "timeline-error" : undefined
                        }
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.timeline && (
                        <p id="timeline-error" className="mt-1 text-xs text-red-400">
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Send Project Brief →
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
