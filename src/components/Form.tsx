import React, { useState } from "react";
import UploadPhoto from "./UploadPhoto";
import FormElement from "./FormElement";
import ErrorText from "./ErrorText";

interface FormEntry {
  avatar: string;
  fullName: string;
  email: string;
  github: string;
}

interface FormProps {
  onSubmit: (data: FormEntry) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormEntry>({
    avatar: "",
    fullName: "",
    email: "",
    github: "",
  });

  const [errors, setErrors] = useState<Partial<FormEntry>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData({ ...formData, avatar: imageUrl });
  };

  const validateForm = (): boolean => {
    let newErrors: Partial<FormEntry> = {};

    if (!formData.avatar) {
      newErrors.avatar = "Please upload a photo.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const githubRegex =
      /\B@([a-z0-9](?:-(?=[a-z0-9])|[a-z0-9]){0,38}(?<=[a-z0-9]))/gi;
    if (!formData.github.trim()) {
      newErrors.github = "GitHub username is required.";
    } else if (!githubRegex.test(formData.github)) {
      newErrors.github = "Please enter a valid GitHub username.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="z-1 flex flex-col items-start md:w-6/12 lg:w-3/12 w-11/12 pt-4 xl:pt-2"
    
    >
      <UploadPhoto
        title="Upload Avatar"
        name="avatar"
        onImageUpload={handleImageUpload}
      />
      <FormElement
        value={formData.fullName}
        name="fullName"
        title="Full Name"
        type="text"
        onChange={handleChange}
      />
      {errors.fullName && <ErrorText errorText={errors.fullName} />}
      <FormElement
        value={formData.email}
        name="email"
        title="Email Address"
        type="text"
        onChange={handleChange}
        placeholder="example@email.com"
      />
      {errors.email && <ErrorText errorText={errors.email} />}
      <FormElement
        value={formData.github}
        name="github"
        title="Github Username"
        type="text"
        onChange={handleChange}
        placeholder="@yourusername"
      />
      {errors.github && <ErrorText errorText={errors.github} />}
      <button className="cursor-pointer w-full py-3 rounded-2xl mt-4 bg-[#f57261]  border border-[#f57261] text-[#0c082b] text-[1.2em] font-bold ">
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
