       // Filtro de produtos
        const filtrosBtns = document.querySelectorAll('.filtro-btn');
        const produtos = document.querySelectorAll('.produto');
        const pesquisaInput = document.getElementById('pesquisa-input');

        filtrosBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove classe 'ativo' de todos os botões
                filtrosBtns.forEach(b => b.classList.remove('ativo'));
                
                // Adiciona classe 'ativo' ao botão clicado
                btn.classList.add('ativo');
                
                const filtro = btn.getAttribute('data-filtro');
                
                produtos.forEach(produto => {
                    if (filtro === 'todos' || produto.getAttribute('data-categoria') === filtro) {
                        produto.style.display = 'block';
                    } else {
                        produto.style.display = 'none';
                    }
                });
            });
        });

        // Função de pesquisa
        function pesquisarProdutos() {
            const termoPesquisa = pesquisaInput.value.toLowerCase();
            
            produtos.forEach(produto => {
                const nome = produto.querySelector('h3').textContent.toLowerCase();
                const descricao = produto.querySelector('p').textContent.toLowerCase();
                
                if (nome.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        }
