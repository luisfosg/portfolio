'use client';

import { useState, useCallback, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FieldErrors = {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
};

type FormData = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
};

const initialData: FormData = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

const MESSAGE_MAX = 500;

const validate = (data: FormData): FieldErrors => {
  const errors: FieldErrors = {};

  if (!data.from_name.trim()) {
    errors.from_name = 'El nombre es requerido';
  }

  if (!data.from_email.trim()) {
    errors.from_email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
    errors.from_email = 'Ingresa un email válido';
  }

  if (!data.subject.trim()) {
    errors.subject = 'El asunto es requerido';
  }

  if (!data.message.trim()) {
    errors.message = 'El mensaje es requerido';
  } else if (data.message.length > MESSAGE_MAX) {
    errors.message = `Máximo ${MESSAGE_MAX} caracteres`;
  }

  return errors;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name as keyof FieldErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const fieldData = { ...formData, [name]: formData[name as keyof FormData] };
      const fieldErrors = validate(fieldData);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FieldErrors] }));
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validate(formData);
      setErrors(validationErrors);
      setTouched({ from_name: true, from_email: true, subject: true, message: true });

      if (Object.keys(validationErrors).length > 0) return;

      setStatus('sending');

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY })
        .then(() => {
          setStatus('success');
          setFormData(initialData);
          setTouched({});
          setErrors({});
        })
        .catch(() => {
          setStatus('error');
        });
    },
    [formData]
  );

  const fieldClass = (name: keyof FormData) => {
    const hasError = touched[name] && errors[name];
    const base =
      'w-full px-4 py-3 rounded-lg border bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors duration-200';
    const border = hasError
      ? 'border-red-400 dark:border-red-500 focus:ring-red-500'
      : 'border-slate-300 dark:border-zinc-600 focus:ring-blue-500 focus:border-transparent';
    return `${base} ${border}`;
  };

  const RequiredDot = () => (
    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
  );

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Nombre<RequiredDot />
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu nombre"
              className={fieldClass('from_name')}
            />
            {touched.from_name && errors.from_name && (
              <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.from_name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Email<RequiredDot />
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tu@email.com"
              className={fieldClass('from_email')}
            />
            {touched.from_email && errors.from_email && (
              <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.from_email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Asunto<RequiredDot />
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="¿En qué puedo ayudarte?"
            className={fieldClass('subject')}
          />
          {touched.subject && errors.subject && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Mensaje<RequiredDot />
            </label>
            <span
              className={`text-xs tabular-nums ${formData.message.length > MESSAGE_MAX ? 'text-red-500 font-medium' : 'text-slate-400 dark:text-zinc-500'}`}
            >
              {formData.message.length}/{MESSAGE_MAX}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            className={`${fieldClass('message')} resize-none`}
          />
          {touched.message && errors.message && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          {status === 'sending' ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar mensaje
            </>
          )}
        </button>

        {status === 'success' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 fade-in">
            <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-300">Mensaje enviado</p>
              <p className="text-xs text-green-600 dark:text-green-400">Te responderé lo antes posible.</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 fade-in">
            <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-red-800 dark:text-red-300">Error al enviar</p>
              <p className="text-xs text-red-600 dark:text-red-400">Intenta de nuevo o contáctame por redes sociales.</p>
            </div>
          </div>
        )}
      </form>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-700">
        <p className="text-sm text-slate-500 dark:text-zinc-400 text-center mb-4">O también puedes encontrarme en</p>
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/luisfosg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <span className="icon-[ph--github-logo] text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/luisfosg/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <span className="icon-[bi--linkedin] text-xl" />
          </a>
          <a
            href="https://x.com/luisfosg_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="X / Twitter"
          >
            <span className="icon-[akar-icons--x-fill] text-xl" />
          </a>
          <a
            href="mailto:luisfosgdev@gmail.com"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <span className="icon-[mdi-light--email] text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
