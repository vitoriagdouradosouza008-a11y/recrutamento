// O nosso "Banco de Dados" temporário
let bancoDeCandidatos = [];

// Capturando o evento de envio do formulário
document.getElementById('formCandidato').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que a página recarregue

    // Coletando os valores do formulário
    const nome = document.getElementById('nome').value;
    const tecnologia = document.getElementById('tecnologia').value;
    const experiencia = Number(document.getElementById('experiencia').value);

    // Criando o objeto do candidato
    const novoCandidato = {
        nome: nome,
        tecnologia: tecnologia,
        experiencia: experiencia
    };

    // 🚀 INSERINDO NO ARRAY COM .push()
    bancoDeCandidatos.push(novoCandidato);

    alert(`${nome} foi cadastrado(a) com sucesso!`);
    this.reset(); // Limpa o formulário

    console.log('Candidatos cadastrados:', bancoDeCandidatos);
});

function listarTodos() {
    const divResultado = document.getElementById('resultado');
    
    if (bancoDeCandidatos.length === 0) {
        divResultado.innerHTML = "<p>Nenhum candidato cadastrado.</p>";
        return;
    }

    // 🚀 TRANSFORMANDO DADOS EM HTML COM .map()
    const htmlCandidatos = bancoDeCandidatos.map(candidato => {
        return `
            <div class="card">
                <strong>Nome:</strong> ${candidato.nome} <br>
                <strong>Stack:</strong> ${candidato.tecnologia} <br>
                <strong>XP:</strong> ${candidato.experiencia} anos
            </div>
        `;
    });

    // O .join('') tira as vírgulas que separam os itens do array
    divResultado.innerHTML = htmlCandidatos.join(''); 
}