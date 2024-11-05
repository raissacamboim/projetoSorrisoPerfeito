document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = contactForm.nome.value;
        const email = contactForm.email.value;
        const telefone = contactForm.telefone.value;
        const assunto = contactForm.assunto.value;
        const mensagem = contactForm.mensagem.value;

        // Exibe uma mensagem de confirmação
        alert(`Obrigado, ${nome}!\n\nSua mensagem foi enviada com sucesso.\n\nDetalhes:\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);

        // Limpa o formulário após o envio
        contactForm.reset();
    });
});
