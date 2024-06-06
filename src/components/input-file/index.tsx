"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import defaultImage from "@/../public/img/upload-file-preview.png";
import { InputFileProps } from "@/types";

export function InputFile({ field, value, removeOptions }: InputFileProps) {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [inputFile, setInputFile] = useState<HTMLInputElement>();
  const [currentValue, setCurrentValue] = useState<string>(value);

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setInputFile(e.target);
    }
  };

  const removeImage = () => {
    setSelectedImage(undefined);
    setCurrentValue("");

    if (inputFile !== undefined) {
      inputFile.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <Input
        accept="image/*"
        {...field}
        type="file"
        onChange={imageChange}
        className="file:bg-secondary file:rounded-sm file:cursor-pointer file:h-full file:mr-2 p-0"
      />
      <Image
        src={
          selectedImage
            ? URL.createObjectURL(selectedImage)
            : currentValue.length > 0
            ? currentValue
            : defaultImage
        }
        width="150"
        height="150"
        className="max-w-[200px] min-w-[200px] min-h-[150px] max-h-[150px] xsm:max-w-[300px] xsm:min-w-[300px] xsm:min-h-[200px] xsm:max-h-[200px] object-contain"
        alt="Preview"
      />
      {removeOptions && (
        <Button variant="destructive" type="button" onClick={removeImage}>
          Remover Imagem
        </Button>
      )}
    </div>
  );
}
