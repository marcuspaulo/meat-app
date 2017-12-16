# Meat - Angular App Starter

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/cod3rcursos/meat-app-starter.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json`

## Goodies

Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

##Formatar JSON
{{form.valid}} {{form.value | json}}

## Créditos

Todas as imagens usadas na aplicação são pertencentes a freepik.com


## Instalando os componentes de animações
`npm install --save @angular/animations@4.0.0`

`npm install --save web-animations-js ## Compatibilidade com outros Navegadores (IE, Safari)`

`Depois Adiciona no Pollyfil.js`
`import 'web-animations-js/web-animations.min.js'`

`Adiciona no app.modules.ts`

`import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`

`Adiciona nos Imports: `
 `imports: [`
    `BrowserModule,`
    `HttpModule,`
    `BrowserAnimationsModule,`

## Build
`se rodar só o ng-build (igual ao Desenv)`

#Produção
`ng build --prod`

`Quando o app está em outra pasta`
`ng build --prod --bh=/meat/`

Não há essa opção, apenas com o parâmetro do build no angular-cli. Você pode minimizar essa falta com configurações de build na seção "scripts" do package.json. Exemplo:

"scripts": {
    "ng": "ng",
    ...
    "build:dev":"ng build",
    "build:prod":"ng build --prod --bh /my-app"
  }
E executar:

npm run build:prod  ou com outro nome/configuração.

## Para testar (Não recomendado para produção)
`Ir até a pasta dist`
`python -m SimpleHTTPServer 8000`

#Se quiser a navegação com o Hash # - Evitar problemas da URL não ser encontrada
`app.module`
`importa: import { LocationStrategy, HashLocationStrategy } from '@angular/common';`
`providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'} ],`


## Compilar os Arquivos em TypeScript
`tsc -w`

## Servidor NodeJS
`nodemon --watch backend backend/dist/server.js`
