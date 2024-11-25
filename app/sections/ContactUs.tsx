"use client";
import Dialog from "@/components/alerts/Dialog";
import Section from "@/components/containers/Section";
import { Form } from "@/components/form/Form";
import CheckBox from "@/components/input/CheckBox";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export type ContactData = {
	name: string;
	mobile: string;
	email: string;
	urgent: boolean;
	info: string;
	files?: FileList;
};

export default function ContactUs() {
	const [show, setShow] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	const onShowDialogHandler = (isChecked: boolean) => {
		if (!isChecked) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	const { register, formState, handleSubmit, reset } = useForm<ContactData>({
		defaultValues: {
			name: "",
			mobile: "",
			email: "",
			urgent: false,
			info: "",
		},
	});

	const onSubmitHandler = async (data: ContactData) => {
		if (!ref.current?.checked) {
			alert("Tem de aceitar os termos e condições");
			return;
		}
		const { ...info } = data;

		if (!info.email || !info.mobile) {
			alert("Tem de preencher ou o email, ou o telemóvel");
			return;
		}

		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("mobile", data.mobile);
		formData.append("email", data.email);
		formData.append("info", data.info);
		formData.append("urgent", data.urgent + "");

		fetch("api/sendEmail/", {
			method: "POST",
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				alert("Email enviado! Será contactado em breve.");
				reset();
			} else {
				alert(
					"Ocorreu um problema, por favor tente outra vez, ou se o erro persistir, contacte-nos pelos meios alternativos"
				);
			}
		});
		return;
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
					src="/lawyer3.webp"
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
				{TC}
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
					required
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
					tabIndex={7}
				/>

				{/* <Form.Files
					register={register}
					name="files"
					tabIndex={8}
				/> */}

				<Form.Textarea
					register={register}
					formState={formState}
					name="info"
					label="Informações adicionais"
					tabIndex={9}
				/>

				<span className="form__checks">
					<Form.Control
						register={register}
						formState={formState}
						name="urgent"
						label="Urgente?"
						tabIndex={10}
					/>

					<CheckBox
						ref={ref}
						label="Termos e Condições"
						onChange={(e) => onShowDialogHandler(e.target.checked)}
						tabIndex={11}
					/>
				</span>

				<Form.Submit
					formState={formState}
					tabIndex={12}
				>
					Submeter
				</Form.Submit>
			</Form>
		</Section>
	);
}

const TC = (
	<div className="terms-conditions">
		<h4>Aviso</h4>
		<p>
			Este aviso de privacidade aplica-se apenas aos dados recolhidas por
			este site. Ele irá informá-lo sobre o seguinte:
		</p>
		<ul>
			<li>
				Quais os dados pessoais que são recolhidos através do site, como
				são usados e com quem podem ser partilhados;
			</li>
			<li>Como pode gerir os seus dados pessoais;</li>
			<li>
				Os procedimentos de segurança em vigor para proteger o uso
				indevido dos seus dados;
			</li>
			<li>Como pode corrigir quaisquer imprecisões nos dados.</li> 
		</ul>
		<h4>Recolha, uso e partilha de dados</h4>
		<p>
			Somos os únicos proprietários dos dados recolhidos neste site. Nós
			só temos acesso aos dados que nos fornece voluntariamente via e-mail
			ou outro contacto direto. Nós não iremos vender ou ceder estes dados
			para ninguém.
		</p>
		 <h4>O seu acesso e controlo da informação</h4>
		<p>
			Pode a qualquer momento entrar em contacto connosco por email
			(geral@advogados-leiria.pt) ou telefone (+351 91 378 53 52) a
			qualquer momento para:
		</p>
		<ul>
			<li>Ver quais os seus dados que dispomos guardados;</li>
			<li>Alterar / corrigir os dados;</li>
			<li>Apagar todos os dados;</li>
			<li>
				Expressar qualquer preocupação que tenha sobre o uso dos seus
				dados
			</li>
		</ul>
		 <h4>Segurança</h4>
		<p>
			Nós tomamos precauções para proteger a sua informação. Quando envia
			dados confidenciais através do site, os mesmos são protegidos online
			e offline.
		</p>
		<p>
			Embora usemos criptografia para proteger dados confidenciais
			transmitidos online, também protegemos os seus dados offline.
			Somente os nossos colaboradores que precisam dos seus dados pessoais
			para realizar um trabalho específico (por exemplo, faturação ou
			atendimento ao cliente) têm acesso aos mesmos.
		</p>
		<p>
			Os computadores/servidores nos quais armazenamos dados pessoais são
			mantidos num ambiente seguro.
		</p>
		<p>
			Terceiros podem usar cookies, web beacons e outras tecnologias de
			armazenamento para recolher ou receber informações deste site e usar
			essas informações para fornecer serviços de medição e segmentar
			anúncios.
		</p>
		<p>
			Se a sua opinião é no sentido de que não estamos a cumprir esta
			política de privacidade, deve contactar-nos imediatamente para
			geral@advogados-leiria.pt.
		</p>
	</div>
);
