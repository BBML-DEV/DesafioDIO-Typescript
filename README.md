![banner-type](https://user-images.githubusercontent.com/66692202/180026876-f85689fe-c669-4b6c-bb8e-8233dc250b94.png)

# Desafios TypeScript - DIO

Após a conclusão do módulo de TypeScript foi solicitado a conclusão de quatro desafios para testar os conhecimentos adquiridos



## Do que você vai precisar

**Ferramentas necessárias:**

- Do Node instalado na sua máquina

- Instalar o typescript utilizando o npm (npm install -g typescript)

  - É interessante que ele seja instalado de forma global, para que o usuário possa usar a biblioteca a qualquer momento e em qualquer projeto para fazer testes rápidos com TS.

- De uma IDE como visual studio code

  

  **Requisitos técnicos:**

- Lógica de programação

- Conhecimento básico em Javascript



## Estrutura do repositório

- **src**
  - Contém arquivos com exemplos de uso de TS e JS com comentários sobre cada desafio.
- **desafios**
  - Contém os arquivos javascript com comentários demonstrando cada desafio proposto e logo abaixo o javascript com resultado após a compilação do TS.
- **respostas**
  - Contém o código em typescript de cada desafio proposto.
- **index.html**
  - É onde está a chamada para o arquivo app.js e pode ser manipulado a vontade para testarem seus scripts
- **tsconfig.json**
  - O coração do TS que configura suas funcionalidades.
- **package.json**
  - Nesse arquivo foram colocados alguns scripts com o propósito de facilitar a vida de quem usar esse repositório
    - start
      - Inicia o *lite-server*, que vai escutar modificações no index.html e em seus arquivos importados. É útil caso queira fazer testes no browser. A porta disposta normalmente é a localhost:3000
    - watch
      - Roda o *tsc --watch* com o propósito de compilar constantemente qualquer coisa que for editada nos arquivos TS para sua contraparte em JS. Esse comando evita que *tsc* tenha que ser digitado constantemente para fazer a compilação
