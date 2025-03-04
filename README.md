# Calculadora iPhone com Autenticação

Este projeto é uma **calculadora imitando a calculadora do iPhone** com funcionalidades de **autenticação** de usuário. A interface foi construída utilizando **Sass** para o estilo, e o backend foi desenvolvido com **Express**. O projeto possui autenticação simples para garantir que o usuário esteja logado antes de acessar a aplicação de cálculo.

## Funcionalidades

- Interface de **calculadora** que replica a do iPhone.
- **Autenticação de usuário** para acessar a calculadora.
- **Backend com Express** para gerenciar autenticação e dados.
- **Estilos com Sass** para uma aparência moderna e organizada.
- Suporte para **responsive design** (funciona bem em dispositivos móveis e desktop).

## Tecnologias Usadas

- **Frontend**:
  - HTML, CSS (Sass)
  - JavaScript (para a lógica da calculadora)
- **Backend**:
  - Node.js
  - Express (para gerenciar as rotas e autenticação)
- **Autenticação**:
  - Utilização de sessões ou JWT (JSON Web Token) para controlar login/logout
- **Pacotes**:
  - **Sass** para pré-processamento de CSS
  - **Express** para criar o servidor e rotas de autenticação

## Requisitos

- **Node.js**: Versão 14.x ou superior
- **npm**: Versão 6.x ou superior

## Como Rodar a Aplicação

### Passo 1: Clonar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/gabrieltech88/calculadora-iphone.git
cd calculadora-iphone
```

### Passo 2: Instalar Dependências

Instale as dependências do projeto
```bash
npm install
```

### Passo 3: Instalar MySql

Instalar o MySql para persistir dados
```bash
#Para Linux
sudo apt-install mysql-server
#Para macOS
brew install mysql
```

### Passo 4: Configurar MySql

Configurar o MySql para persistir dados
```bash
mysql -u root
#Caso não consiga, de o seguinte comando, com a senha que você usa para acessar o seu sistema operacional
mysql -u root -p
#Após acessar, criar o banco de dados
mysql > CREATE DATABASE calculadora_iphone;
````

### Passo 5: Rodar Aplicação

Rodar aplicação na sua máquina local
```bash
npm run dev
```
