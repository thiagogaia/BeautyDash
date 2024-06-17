"use client";

import { FormDateField } from "@/components/form-fileds/form-date-field";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { formTaskSchema } from "@/schemas/tools";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  openForm?: boolean;
  setOpenForm?: (e: boolean) => void;
}

export function TaskForm() {
  const form = useForm<z.infer<typeof formTaskSchema>>({
    resolver: zodResolver(formTaskSchema),
  });

  const onSubmit = (values: z.infer<typeof formTaskSchema>) => console.log(values);

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button className="gap-x-2 font-medium bg-purple-900 text-white hover:bg-purple-800">
          <Plus className="w-5 h-5" /> Criar tarefa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4">
          <DialogTitle>Criar Tarefa</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputField formData={form} name="subject" placeholder="Assunto" />
            <FormSelectField
              formData={form}
              name="opportunity"
              placeholder="Selecionar oportunidade"
              data={["jorge silva", "ambrósio figueiredo"]}
            />
            <FormSelectField
              formData={form}
              name="type"
              placeholder="Tipo de tarefa"
              data={["Ligação", "Email", "Visita", "Tarefa", "Almoço", "Reunião", "Whatsapp"]}
            />
            <FormDateField formData={form} name="date" />

            <DialogFooter className="pt-8 gap-y-4">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" className="save-form-button">
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
