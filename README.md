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

## Rotas e exemplos: laboratorios

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
	"_id": "123456789"
	
}
```
<br />
Para atualizar um laboratório

#### [PUT] em /lab/update


```json
{
	"_id": "61e1a8801df2f8fb610dd66e",
	"nameUp": "Lab1",
	"enderecoUp": "Novo endereço",
	"statusUp": "ativo"
	
}
```
<br />
Para criar lote de laboratórios

#### [POST] em /lab/createLot


```json
	
		{
			"name": "Lab1",
			"endereco": "Avenida1",
			"status": "ativo"
		},

		{
			"name": "Lab2",
			"endereco": "Avenida1",
			"status": "ativo"
		},

		{
			"name": "Lab3",
			"endereco": "Avenida1",
			"status": "ativo"
		},

		{
			"name": "Lab4",
			"endereco": "Avenida1",
			"status": "ativo"
		}
```
<br />



<br />

## Rotas e exemplos: exames

<br />
Para cadastrar num novo exame

#### [POST] em /exame/create
<br />

```json
{	
	"name": "Ressonância",
	"tipo": "Imagem",
	"status": "ativo",
	"lab": [{
	"Lab1": true
}]
}
```
<br />
Para buscar exames ativos

#### [GET] em /exame/get


```json
{
	"status": "ativo"
	
}
```
<br />
Para deletar um exame

#### [DELETE] em /exame/delete


```json
{
	"_id": "123456789"
	
}
```
<br />
Para atualizar um exame

#### [PUT] em /exame/update


```json
{
	
	"_id": "61e1aadc63dd270aad5861b9",
	"nameUp": "Ressonância",
	"tipoUp": "Imagem",
	"statusUp": "inativo",
	"labUp": [{
	"Lab1": true,
	"Lab2": true
}]
	
}
```
<br />
Para criar lote de exames

#### [POST] em /exame/createLot


```json
	
			{
	"name": "Urina",
	"tipo": "Análise clínica",
	"status": "inativo",
	"lab": [{
	"Lab1": true
}]
},
	
	{
	"name": "Ressonância",
	"tipo": "Imagem",
	"status": "ativo",
	"lab": [{
	"Lab1": true
}]
},
	
	{
	"name": "Colonoscopia",
	"tipo": "Análise clínica",
	"status": "ativo",
	"lab": [{
	"Lab1": true,
	"Lab2": true
}]
},
	
	{
	"name": "Urina",
	"tipo": "Análise clínica",
	"status": "ativo"

}
```
<br />
Para buscar laboratorios associados a exames

#### [GET] em /exameAss/get


```json
{

	"_id": "61e1aadc63dd270aad5861b9"
}
```
<br />








# Teste
