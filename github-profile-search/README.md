# GitHub Profile Search App

Este projeto permite que os usuários busquem perfis do GitHub usando o nome de usuário e exibam informações relevantes, como nome, avatar e bio. Ele foi desenvolvido com React e implementa funcionalidades de alternância entre modo escuro e claro, além de elementos decorativos.

## Funcionalidades

- **Busca de perfil do GitHub**: Digite um nome de usuário do GitHub e veja as informações associadas a esse perfil.
- **Modo escuro e claro**: Alterna entre o modo escuro e claro para melhorar a experiência do usuário.
- **Elementos decorativos**: Imagens decorativas (camada e elipses) são usadas para dar um toque visual ao layout.
- **Feedback de erro e carregamento**: O sistema exibe um indicador de carregamento enquanto os dados são recuperados e uma mensagem de erro caso o usuário não seja encontrado.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário.
- **Tailwind CSS**: Framework de utilitários CSS para design responsivo.
- **React Icons**: Pacote de ícones para React, usado para o botão de alternância de tema.
- **GitHub API**: A API do GitHub é utilizada para buscar dados do perfil do usuário.

## Como Usar

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo de [nodejs.org](https://nodejs.org/).

### Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/github-profile-search.git
```

2. Navegue até o diretório do projeto:

```bash
cd github-profile-search
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

5. Acesse o aplicativo em seu navegador, geralmente disponível em [http://localhost:3000](http://localhost:3000).

### Alternando entre os modos

Clique no ícone de sol/lua no canto superior direito para alternar entre o modo escuro e claro.

## Contribuições

Sinta-se à vontade para abrir problemas ou pull requests. Caso queira contribuir, basta seguir as etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature:

```bash
git checkout -b minha-feature
```

3. Realize suas mudanças.
4. Commit suas alterações:

```bash
git commit -m "feat: descrição da sua feature"
```

5. Envie suas alterações para o repositório remoto:

```bash
git push origin minha-feature
```

6. Abra um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.