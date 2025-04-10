'use client';

import { Button } from '@/components/button';
import { InputRoot, InputIcon, InputField } from '@/components/input';
import { User, Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const subscriptionSchema = z.object({
  name: z.string().min(2, { message: 'Digite um nome valido' }),
  email: z.string().email({ message: 'Digite um email valido' })
});

type SubscritionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SubscritionSchema>({
    resolver: zodResolver(subscriptionSchema)
  });

  const onSubscribe = (data: SubscritionSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className=" bg-grey-700 border border-grey-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-grey-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome Completo"
              {...register('name')}
            />
          </InputRoot>
        </div>
        {errors.name && (
          <p className="text-danger text-xs font-semibold">
            {errors.name.message}
          </p>
        )}
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
