# Teste

## Ferramentas utilizadas:

- express de framework;
- axios para requisicoes http;
- pino para logs da aplicação;
- jsonwebtoken para autenticação via jwt;
- mongoose para ODM;

<br />

## Como executar a aplicação:

### Criar arquivo .env com configurações baseado no .env_exemple
- Definir string de conexão com o mongodb
- Definir SECRET_HASH da aplicação


<br />

### No diretorio do projeto, rode:

### Usando Yarn:

#### `yarn` para instalação das dependencias

#### `yarn start` para executar a aplicação

### Usando NPM:

#### `npm install` para instalação das dependencias

#### `npm start` para executar a aplicação



<br />

## Rotas e exemplos:

<br />
Para cadastrar num novo contato

#### [POST] em /contact/create
<br />

```json
{
	"name":"Leonardo",
	"telefone": "75991922332",
	"endereco":"Rua L, 405"
}
```
<br />
Para buscar o contato

#### [GET] em /contact/get


```json
{
	"telefone": "75991922332"
	
}
```
<br />
Para deletar um contato

#### [DELETE] em /contact/delete


```json
{
	"telefone": "75991922332"
	
}
```
<br />



# Teste
