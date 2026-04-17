import Section from "@/components/containers/Section";
export default function About() {
	return (
		<Section className="about">
			<h2>Sobre Nós</h2>

			<div className="intro">
				<p>
					A nossa equipa de advogados possui uma vasta experiência,
					acumulada ao longo de mais de três décadas, na área das
					contraordenações e coimas, com uma especialização particular
					nas contraordenações rodoviárias. A nossa especialização
					inclui uma abordagem abrangente às diferentes etapas que um
					processo de contraordenação pode implicar.
				</p>

				<p>
					Desde a fase inicial de análise do auto de contraordenação
					até à eventual audiência de discussão e julgamento,
					oferecemos um acompanhamento jurídico contínuo e rigoroso.O
					nosso serviço começa com a análise detalhada do processo, em
					que verificamos se a contraordenação foi devidamente
					fundamentada e se os direitos dos nossos clientes foram
					respeitados ao longo de todo o procedimento administrativo.
					A nossa vasta experiência permite identificar rapidamente
					qualquer irregularidade ou falha de procedimento que possa
					ser explorada para anular ou atenuar a infração em questão.
				</p>
			</div>

			<img
				src="/lawyer4.png"
				alt=""
				className="lawyer"
			/>

			<div className="links">
				<img
					src="/ansr.webp"
					alt="ansr"
				/>
				<img
					src="/ip.webp"
					alt="ip"
				/>
				<img
					src="/imt.webp"
					alt="imt"
				/>
			</div>

			<p className="note">
				Procedimento integralmente tratado, com segurança e
				acompanhamento personalizado, através de meios de comunicação à
				distância. Após o contacto e envio da multa digitalizada,
				responderemos com a maior brevidade, apresentado-lhe uma
				proposta para apresentar a sua Defesa/Contestação, contendo o
				tipo de Defesa para o seu caso, honorários e custos processuais
				(se os houver).
			</p>
			<div className="address">
				<i className="fa-solid fa-location-dot" />
				<div>
					<p>Luisa Redinha</p>
					<p>Advogada - C.P. 3.716 - C</p>
					<p>
						Rua Dr. Vasco da Gama Fernandes, Lote 4, R/C Dt.,
						2410-191 Leiria
					</p>
				</div>
			</div>

			<div className="socials">
				<a href="https://www.instagram.com/luisaredinha.pt/" target="_blank" rel="noopener noreferrer">
					<i className="fa-brands fa-instagram" />
				</a>
				<a href="https://www.facebook.com/LuisaRedinhaadvogadosassociados/?locale=pt_PT" target="_blank" rel="noopener noreferrer">
					<i className="fa-brands fa-facebook" />
				</a>
				<a href="https://www.tiktok.com/@luisaredinha.pt?_r=1&_t=ZG-95cjqh2pzV2" target="_blank" rel="noopener noreferrer">
					<i className="fa-brands fa-tiktok" />
				</a>
				<a href="https://www.linkedin.com/in/luisa-redinha-81aa1821/" target="_blank" rel="noopener noreferrer">
					<i className="fa-brands fa-linkedin" />
				</a>
			</div>
		</Section>
	);
}
