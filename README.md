# JJKARPG db plan
Minimundo do RPG

O sistema é um site que gerencia jogadores de um jogo de RPG online. Cada jogador possui um perfil com informações pessoais, como nome, senha de acesso, foto de perfil e uma carteira virtual que armazena a quantidade de moedas fictícias do jogo.  

Cada jogador também possui um inventário, onde ficam armazenados os itens que ele comprou ou ganhou. Os itens podem ser armas, poções, armaduras ou objetos especiais. Cada item tem um nome, uma descrição, um preço, uma quantidade disponível na loja e uma foto ilustrativa.  

A loja é responsável por expor os itens disponíveis para compra. Ela mostra o nome, descrição, preço, quantidade e foto de cada item. Quando um jogador compra um item, o sistema verifica se ele tem saldo suficiente na carteira, desconta o valor e adiciona o item ao inventário do jogador.  

Além disso, cada jogador possui uma localização representada por um valor numérico (1, 2 ou 3). Dependendo do valor, o site exibirá o perfil do jogador de forma diferente.  

O sistema também possui níveis de permissão:  
- Jogadores comuns podem apenas visualizar e comprar itens.  
- Administradores têm poderes adicionais, como alterar o saldo da carteira de outros jogadores e gerenciar os itens da loja (adicionar, remover ou atualizar preços e descrições).  

---

🔑 Entidades e Relacionamentos

- Usuário:  
  - IdUser, Nome, Senha, Carteira, FotoPerfil, Localizacao, Permissao  
  - Relaciona-se 1:1 com Inventário  

- Inventário:  
  - IdInventario, IdUser  
  - Relaciona-se 1:N com InventárioItens  

- Itens:  
  - IdItem, NomeItem, Descricao, Preco, Quantidade, FotoItem  
  - Relaciona-se 1:N com InventárioItens  

- InventárioItens:  
  - IdInventarioItem, IdInventario, IdItem, Quantidade  

---

📖 Cenário de uso

- Daniela cria um perfil no site, define sua foto e recebe 15000 moedas iniciais na carteira.  
- Ela acessa a loja e compra uma espada (preço 50 moedas). O sistema desconta 50 moedas da carteira e adiciona a espada ao inventário dela.  
- Outro jogador, João, é administrador. Ele pode aumentar ou diminuir o saldo da carteira de Daniela, caso seja necessário (por exemplo, como recompensa ou punição).  
- A loja mostra todos os itens disponíveis com suas fotos, preços e descrições.  
- Dependendo da localização de cada jogador (1, 2 ou 3), o site renderiza o perfil com estilos diferentes.
Minimundo atualizado
Além das funcionalidades já descritas, o sistema terá um módulo de sorteios.  
- Cada sorteio registra os participantes.  
- Para cada participação, o sistema guarda:  
  - O IdUser (quem participou).  
  - A data da participação.  
  - O resultado (ganhou ou não, ou até o prêmio recebido).  

---

📐 Modelo Conceitual (DER atualizado)
Novas entidades/relacionamentos:  

- Sorteio (IdSorteio, Nome, DataCriacao, Descricao)  
- ParticipacaoSorteio (IdParticipacao, IdSorteio, IdUser, DataParticipacao, Resultado)  

Relacionamentos:  
- Sorteio 1:N ParticipacaoSorteio  
- Usuario 1:N ParticipacaoSorteio  

---

🗂 Modelo Lógico (tabelas)

Tabela Sorteio
- IdSorteio (PK)  
- Nome (ex: "Sorteio de Espada Lendária")  
- DataCriacao  
- Descricao  

Tabela ParticipacaoSorteio
- IdParticipacao (PK)  
- IdSorteio (FK → Sorteio)  
- IdUser (FK → Usuario)  
- DataParticipacao  
- Resultado (ex: "ganhou", "perdeu", ou até o prêmio específico)