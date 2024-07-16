# 🏆 TierDark

Bem-vindo ao **TierDark**! Um aplicativo de votação online onde qualquer pessoa pode classificar itens em uma TierDark de S (melhor) a F (pior)! 🎉

## 📋 Visão Geral

Este projeto permite que os usuários votem em uma TierDark de forma fácil e interativa. As votações ficam abertas por 3 dias e são arquivadas para consulta posterior. 

### Funcionalidades

- 🌐 **Acesso Online:** Qualquer pessoa com o link pode acessar a votação.
- 📝 **Entrada de Nome:** Todos os participantes devem inserir seus nomes antes de votar.
- 🗳️ **Classificação Completa:** Os participantes devem classificar todas as opções antes de enviar seus votos.
- ⏳ **Duração da Votação:** As votações ficam abertas por 3 dias.

## 🚀 Começando

Siga estas etapas para configurar e executar o projeto localmente.

### Pré-requisitos

- Node.js
- MongoDB

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/polabiel/TierDark.git
   cd TierDark
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a variável de ambiente no arquivo `.env.local`:
   ```bash
   DATABASE_URL=sua_url_do_prisma

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### 📄 Descrição dos Arquivos

- **pages/index.js:** Página inicial do aplicativo com o formulário de votação.
- **pages/api/vote.js:** API para registrar os votos no banco de dados.
- **pages/api/results.js:** API para recuperar os resultados das votações.
- **components/VotingForm.js:** Componente do formulário de votação.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. 💡