import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from '@/components/ui/input'
import { Control, Controller, FieldPath } from "react-hook-form";
import { z } from 'zod';
import { authformSchema } from '@/lib/utils';

const formSchema = authformSchema('sign-Up')

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>; // Adjust "any" to your form's specific schema type if available
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomeInput = ({control,name,label,placeholder}:CustomInputProps) => {
  return (
    <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                     type={ name === "password" ? "password" : "text"}
                      placeholder={placeholder}
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

  )
}

export default CustomeInput