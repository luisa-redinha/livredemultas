import React from "react";
import keywords from "./keywords.json";

export default function IndexableContent() {
	return (
		<div id="indexable-content">
			{keywords.map((e, i) => (
				<p key={"indexable keywords " + i}>{e}</p>
			))}
			<h1>Livre de Multas</h1>
			<p>
				Se recebeu uma multa e quer contestar, conte connosco. A nossa
				equipa analisará o seu caso e poderá orientá-lo sobre os
				procedimentos adequados. A nossa experiência permite-nos uma
				abordagem abrangente das diferentes etapas que um processo de
				contraordenação pode implicar. Desde a fase inicial de análise
				do auto de contraordenação até à eventual audiência de discussão
				e julgamento, oferecemos um acompanhamento jurídico contínuo e
				rigoroso.
			</p>
		</div>
	);
}
