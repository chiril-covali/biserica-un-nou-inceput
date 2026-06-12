import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Numele trebuie să aibă cel puțin 2 caractere' })
    .max(100, { message: 'Numele trebuie să aibă mai puțin de 100 de caractere' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Te rugăm să introduci o adresă de email validă' })
    .max(255, { message: 'Emailul trebuie să aibă mai puțin de 255 de caractere' }),
  projectType: z.enum(['general', 'rugaciune', 'implicare'], {
    required_error: 'Te rugăm să selectezi tipul mesajului',
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Mesajul trebuie să aibă cel puțin 10 caractere' })
    .max(1000, { message: 'Mesajul trebuie să aibă mai puțin de 1000 de caractere' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          message: data.message,
          _subject: `Mesaj nou (${data.projectType}) de la ${data.name}`,
        }),
      });

      if (!response.ok) throw new Error('Trimiterea a eșuat');

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      form.setError('root', {
        message: 'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="rounded-2xl bg-white border border-slate-200 p-8 text-center space-y-4 shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-emerald-600" />
        </motion.div>
        <h3 className="text-2xl font-bold tracking-tight text-[#0F1E36]">Mesaj trimis!</h3>
        <p className="text-slate-600 font-light leading-relaxed">
          Îți mulțumim că ne-ai scris. Îți vom răspunde cât mai curând posibil.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold tracking-wide text-slate-700">Nume</FormLabel>
              <FormControl>
                <Input placeholder="Numele tău complet" className="font-light bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold tracking-wide text-slate-700">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@exemplu.com"
                  className="font-light bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold tracking-wide text-slate-700">Tipul mesajului</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light bg-white border-slate-200 text-slate-800 [&>span]:text-slate-400 [&[data-state=open]>span]:text-slate-800 focus:ring-sky-500/30">
                    <SelectValue placeholder="Selectează tipul mesajului" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-slate-200 shadow-lg z-50">
                  <SelectItem value="general" className="font-light text-slate-800 focus:bg-slate-100 focus:text-slate-900 cursor-pointer">
                    Întrebare generală
                  </SelectItem>
                  <SelectItem value="rugaciune" className="font-light text-slate-800 focus:bg-slate-100 focus:text-slate-900 cursor-pointer">
                    Cerere de rugăciune
                  </SelectItem>
                  <SelectItem value="implicare" className="font-light text-slate-800 focus:bg-slate-100 focus:text-slate-900 cursor-pointer">
                    Vreau să mă implic
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold tracking-wide text-slate-700">Mesaj</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Spune-ne cum te putem ajuta..."
                  className="min-h-32 font-light resize-none bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light text-red-600" />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm text-red-600 font-light">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button
          type="submit"
          className="w-full py-6 text-base font-semibold tracking-wide bg-[#0F1E36] text-white hover:bg-slate-800 rounded-full cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Se trimite...
            </>
          ) : (
            'Trimite mesajul'
          )}
        </Button>
      </form>
    </Form>
  );
}
