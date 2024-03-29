<p align="center">
	<h1 align="center">
    <span>⚓ Platiot 🚀</span>
  </h1>
  <p align="center">Sistema de Versionamento de Firmwares</p>
</p>
<p align="center">
    <img src="packages/web/src/assets/gif/preview.gif" width="fit-content" alt="Logo">
</p>

## [DEMO!!!](https://trello-clone-liv-saude.herokuapp.com)

## Design:

<p align="justify">
  O nome Platiot, fora retirado do próprio documento de requisitos. Intrigantemente Plat IOT.
</p>
<p align="justify">
  A base de inspiração fora o OCEANO, em sua imensidão de possibilidades, ancorando todos os firmwares.
</p>
<p align="justify">
  Segue abaixo as cores principais do projeto.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/17098382/107158366-45977080-6968-11eb-8601-5d1185421846.png" width="400" alt="Logo">
</p>

#### Links no Figma:

Preview: https://www.figma.com/proto/tLffijQFskMjUcsEAFokKt/Platiot?node-id=1%3A4&scaling=min-zoom

Projeto: https://www.figma.com/file/tLffijQFskMjUcsEAFokKt/Platiot?node-id=0%3A1

## User Stories:

- Eu, como engenheiro, gostaria de manter (CRUD) _firmware_ com **nome do projeto**, **versão** e **nome da placa compatível**;
- Eu, como engenheiro, gostaria de ter a garantia que somente usuários autorizados podem fazer upload e download dos arquivos de _firmware_;
- Eu, como engenheiro, gostaria de **garantir a integridade** do arquivo de firmware, a fim de impedir que alguém não autorizado tenha acesso às informações contidas na imagem (.bin);
- Eu, como engenheiro, gostaria que ao abrir a plataforma de controle de versão de firmware, o sistema listasse para mim todos os arquivos (.bin ou .zip) por **projeto** e **placa compatível**.

## Regras de Negócio:

- O nome do arquivo de firmware deve ser salvo no seguinte formato: **nome_do_projeto_v0_0_1.bin**;
- O sistema não deve aceitar o upload de um arquivo em formatos diferente de **.bin** ou **.zip** (ou formatos resultantes de um processo de criptografia);
- A versão do arquivo deve refletir a versão Maior (MAJOR), Menor (MINOR) e de Correção (PATCH).

## Hosting:

### Backend

<p align="justify">
  The application is hosted on Heroku.
</p>

##### Docker

`sudo docker ps`

`sudo docker stop "hash"`

`sudo docker build -t platiot .`

`docker run -p 3333:3333 -d platiot`

##### Heroku

`heroku login`

`heroku container:login`

`heroku container:push web -a platiot`

`heroku container:release web -a platiot`

### Frontend

<p align="justify">
  The application is hosted on Heroku.
</p>

### Storage

<p align="justify">
  A aplicação, storage encontra-se hospedada na AWS S3.
</p>

## Repository:

<p align="justify">
O projeto foi inicialmente pensado como "monorepo". Desse modo fora criado esse repositório para unificar os diretórios e os diretórios backend e frontend foram dividos em outros dois repositórios.
</p>

Link Repositório Backend e Frontend: https://github.com/julioflima/platiot

## Deploy

Link Backend: https://platiot.herokuapp.com/

Link Frontend: https://platiot.vercel.app/

## Back End:

<p align="justify">
Na aplicação não fora utilizado scripts SQL puros, e sim uma tecnologia chamada Query Builder que possibilita por meio de código em JS, fazer uma chamada a scripts de maneira mais natural. A principal vantagem do Query Builder, é na verdade a portabilidade para qualquer banco de dados em SQL, seja ele, Oracle, MySQL ou PostgreSQL. O Query Builder, utilizado fora o Sequelize. Segue abaixo uma breve comparação entre as duas tecnologias:
</p>

## Front End

<p align="justify">
The aplication was developed in NextJS using the most possible otimizations tha the NextJS provides, follow in below more. This aplication has a good responsivity, but that part is not completed (just missed the header to be more responsive, in this version was really easy and fast to implement it).
</p>

### NEXT TS:

<p align="justify">
Acreditando que há uma forte tendência de aplicaçes em Next, sevivo a uma série de tecnologias que garatem performace como o SSG (Static Site Generetion)... Portanto Next fora bastante utilizado, para gerar páginas dinâmicas, sendo elas pre-renderizadas no build.
<p align="justify">

- [Repositório Original;](https://github.com/BiscuiTech/i18n-typescript-app)
- [I - Pull Request;](https://github.com/BiscuiTech/i18n-typescript-app/pull/2)
- [II - Pull Request;](https://github.com/BiscuiTech/i18n-typescript-app/pull/4)
- [Demonstração - Deployed by Julio Lima;](https://i18n-typescript-app.vercel.app/)
- [Tutorial.](https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih)
