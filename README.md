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
Para cadastrar num novo laboratório

#### [POST] em /lab/create
<br />

```json
{
	"name":"Lab1",
	"endereco":"Rua Primeira",
	"status": "ativo",
}
```
<br />
Para buscar laboratórios ativos

#### [GET] em /lab/get


```json
{
	"status": "ativo"
	
}
```
<br />
Para deletar um laboratório

#### [DELETE] em /lab/delete


```json
{
	"name": "Lab1"
	
}
```
<br />



# Teste
