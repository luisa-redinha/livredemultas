"use client";
import Button from "@/components/buttons/Button";
import Section from "@/components/containers/Section";
import { Form } from "@/components/form/Form";
import CheckBox from "@/components/input/CheckBox";
import React from "react";
import { useForm } from "react-hook-form";

type ContactData = {
	name: string;
	contact: string;
	urgent: boolean;
	file?: File;
	info?: string;
};

export default function ContactUs() {
	const { register, handleSubmit, formState, reset } = useForm<ContactData>({
		// resolver: zodResolver(LoginSchema),
		defaultValues: { name: "", contact: "", urgent: false },
	});

	return (
		<Section className="contact-us">
			<h2>Como Entrar Em Contacto</h2>
			<div className="info">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestias, rem? Quod harum cupiditate, atque beatae ad
					aperiam vel dolore at quidem nisi, ea deserunt unde, natus
					maxime earum. Repudiandae, repellat.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestias, rem? Quod harum cupiditate, atque beatae ad
					aperiam vel dolore at quidem nisi, ea deserunt unde, natus
					maxime earum. Repudiandae, repellat Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Molestias, rem? Quod
					harum cupiditate, atque beatae ad aperiam vel dolore at
					quidem nisi, ea deserunt unde, natus maxime earum.
					Repudiandae, repellat.
				</p>

				<img
					src="/lawyer2.jpg"
					alt=""
				/>
			</div>

			<Form className="form">
				<h3>Formulário</h3>
				<Form.Control
					register={register}
					formState={formState}
					name="name"
					label="Nome"
				/>
				<Form.Control
					register={register}
					formState={formState}
					name="contact"
					label="Contacto (Email ou Telemóvel)"
				/>

				<Button variant="secondary">
					<i className="fa-regular fa-file" /> Anexar Ficheiro
				</Button>

				<Form.Textarea
					register={register}
					formState={formState}
					name="info"
					label="Informações adicionais"
				/>

				<span className="form__checks">
					<Form.Control
						register={register}
						formState={formState}
						name="urgent"
						label="Urgente?"
					/>
					<CheckBox label="Aceito os Termos e Condições" />
				</span>

				<Form.Submit formState={formState}>Submeter</Form.Submit>
			</Form>
		</Section>
	);
}
