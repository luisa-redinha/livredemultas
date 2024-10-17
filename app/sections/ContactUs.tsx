"use client";
import Button from "@/components/buttons/Button";
import Section from "@/components/containers/Section";
import { Form } from "@/components/form/Form";
import CheckBox from "@/components/input/CheckBox";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
type ContactData = {
	name: string;
	mobile: string;
	email: string;
	urgent: boolean;
	file?: File;
	info?: string;
};

export default function ContactUs() {
	const { register, handleSubmit, formState, reset } = useForm<ContactData>({
		defaultValues: {
			name: "",
			mobile: "",
			email: "",
			urgent: false,
			info: "",
		},
	});

	return (
		<Section className="contact-us">
			<h2>Envie-nos Os Detalhes</h2>
			<div className="info">
				<p>
					A nossa equipa de advogados possui uma vasta experiência,
					acumulada ao longo de mais de três décadas, na área das
					contraordenações e coimas, com uma especialização particular
					nas contraordenações rodoviárias.
				</p>

				<p>
					Contestamos todo o tipo de multas rodoviárias, tratando de
					todo o procedimento, com segurança e acompanhamento
					personalizado, através de meios de comunicação à distância.
					Após o contacto e envio da multa digitalizada, responderemos
					com a maior brevidade, apresentando-lhe uma proposta para
					apresentar a sua Defesa/Contestação, elaborando o tipo de
					defesa adequado ao seu caso, honorários e custos processuais
					(se os houver).
				</p>

				<motion.img
					src="/lawyer2.webp"
					alt=""
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0, transitionDelay: "unset" }}
					transition={{
						ease: "easeInOut",
						duration: 1.5,
					}}
				/>
			</div>

			<Form className="form">
				<h3>Formulário</h3>
				<Form.Control
					register={register}
					formState={formState}
					name="name"
					label="Nome*"
					tabIndex={5}
				/>
				<Form.Control
					register={register}
					formState={formState}
					name="email"
					label="Email"
					tabIndex={6}
				/>

				<Form.Control
					register={register}
					formState={formState}
					name="mobile"
					label="Telemóvel"
					tabIndex={6}
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
					<CheckBox label="Termos e Condições" />
				</span>

				<Form.Submit formState={formState}>Submeter</Form.Submit>
			</Form>
		</Section>
	);
}
