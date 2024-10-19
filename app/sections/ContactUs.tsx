"use client";
import Dialog from "@/components/alerts/Dialog";
import Section from "@/components/containers/Section";
import { Form } from "@/components/form/Form";
import CheckBox from "@/components/input/CheckBox";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TC from "./termos-condicoes.json";

type ContactData = {
	name: string;
	mobile: string;
	email: string;
	urgent: boolean;
	info: string;
	files?: FileList;
};

export default function ContactUs() {
	const [show, setShow] = useState(false);

	const onShowDialogHandler = (isChecked: boolean) => {
		if (!isChecked) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	const { register, formState, handleSubmit } = useForm<ContactData>({
		defaultValues: {
			name: "",
			mobile: "",
			email: "",
			urgent: false,
			info: "",
			files: undefined,
		},
	});

	const onSubmitHandler = (data: ContactData) => {
		console.log(data);
		const { files, ...info } = data;

		const content = Object.entries(info);
		console.log(content);

		if (!files?.length) {
			fetch("app/api/sendMail/");

			return;
		}

		// sendMail({ content, attachments: [] });
	};

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

			<Dialog
				title="Termos e Condições"
				show={show}
				toggle={() => setShow((e) => !e)}
			>
				{TC.map((e, i) => (
					<p key={`tc-p${i}`}>{e}</p>
				))}
			</Dialog>

			<Form
				className="form"
				onSubmit={handleSubmit(onSubmitHandler)}
			>
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

				<Form.Files
					register={register}
					name="files"
				/>

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

					<CheckBox
						label="Termos e Condições"
						onChange={(e) => onShowDialogHandler(e.target.checked)}
					/>
				</span>

				<Form.Submit formState={formState}>Submeter</Form.Submit>
			</Form>
		</Section>
	);
}
