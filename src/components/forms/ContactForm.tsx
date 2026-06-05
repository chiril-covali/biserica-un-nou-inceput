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
        className="bg-accent border border-border rounded-sm p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">Mesaj trimis!</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
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
              <FormLabel className="text-sm font-light tracking-wide">Nume</FormLabel>
              <FormControl>
                <Input placeholder="Numele tău complet" className="font-light" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@exemplu.com"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Tipul mesajului</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Selectează tipul mesajului" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="general" className="font-light">
                    Întrebare generală
                  </SelectItem>
                  <SelectItem value="rugaciune" className="font-light">
                    Cerere de rugăciune
                  </SelectItem>
                  <SelectItem value="implicare" className="font-light">
                    Vreau să mă implic
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Mesaj</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Spune-ne cum te putem ajuta..."
                  className="min-h-32 font-light resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm text-destructive font-light">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button
          type="submit"
          className="w-full py-6 text-base font-light tracking-wide"
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
