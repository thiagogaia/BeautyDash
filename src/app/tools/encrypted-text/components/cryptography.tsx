import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formEncryptedTextSchema } from "@/schemas/tools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function Cryptography() {
  const [encryptionType, setEncryptionType] = useState<string>("");
  const form = useForm<z.infer<typeof formEncryptedTextSchema>>({
    resolver: zodResolver(formEncryptedTextSchema),
  });

  const onSubmit = (values: z.infer<typeof formEncryptedTextSchema>) =>
    console.log({ ...values, encryptionType });

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormTextareaField
            formData={form}
            name="text"
            title="Texto"
            placeholder="Texto original"
          />

          <div className="flex flex-wrap gap-4">
            <Button
              type="submit"
              onClick={() => setEncryptionType("Criptografafar tipo 1")}
              className="gap-x-2 save-form-button"
            >
              <Copy className="w-5 h-5" /> Criptografafar tipo 1
            </Button>
            <Button
              type="submit"
              onClick={() => setEncryptionType("Criptografafar tipo 2")}
              className="gap-x-2 save-form-button"
            >
              <Copy className="w-5 h-5" /> Criptografafar tipo 2
            </Button>
            <Button
              type="submit"
              onClick={() => setEncryptionType("Criptografafar tipo 3")}
              className="gap-x-2 save-form-button"
            >
              <Copy className="w-5 h-5" /> Criptografafar tipo 3
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
