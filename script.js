	function but1Act() {
		alert("Sumário: A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1], ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.")
		document.getElementById("txt1").textContent = "O número secreto foi gerado. Boa sorte!"
		document.getElementById("but1").disabled = false;
		document.getElementById("but1").style.display = "none"
		document.getElementById("ipt1").hidden = false;
		document.getElementById("lbl1").hidden = false;
		document.getElementById("but2").hidden = false;
	}
	function chute() {
		let palpite = parseInt(document.getElementById("ipt1").value);
		
		if (palpite === rng) {
			document.getElementById("boxPar").hidden = false;
		} else {
			if (palpite < rng) {
				alert("Número muito pequeno")
			} else {
				alert("Número muito grande")
			}
		}
	}
	let rng = Math.floor(Math.random() * 100) + 1;
	console.log(rng);