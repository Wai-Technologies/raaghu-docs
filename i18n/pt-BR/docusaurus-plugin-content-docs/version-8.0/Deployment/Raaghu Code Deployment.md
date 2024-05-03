
# Implantação do Código Raaghu

#### Pré-requisitos
- Node.js instalado em seu sistema
- Acesso ao servidor web de destino para implantação
- Uma aplicação ABP implantada que atue como backend
- Alterações no Arquivo de Ambiente (.env)
- Certifique-se de substituir as URLs da aplicação backend e frontend:

````json 
NODE_ENV=production
REACT_APP_URL=<Web_App_URL>
REACT_APP_API_URL=<Swagger_URL>
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=<Your_Client_ID>
REACT_APP_SCOPE=address openid email phone profile roles offline_access <Backend_application_name>
REACT_APP_REPLACE_URL=true
REACT_APP_Version=8.0
````

## Etapas de Implantação
#### 1. Instalar Dependências
Certifique-se de que todas as dependências necessárias estejam instaladas executando o seguinte comando:

````json
npm run install-all
````

#### 2. Construir o Código
Construa o código React usando o seguinte comando:

````json
npm run build
````
Este comando compila o código React e gera uma compilação pronta para produção no diretório raaghu-mfe/rds_pages/host/dist.

#### 3. Copiar Arquivos 
Copie arquivos específicos para o local designado após o processo de construção. Use os seguintes comandos:

````json
cp raaghu-mfe/web.config raaghu-mfe/rds_pages/host/dist   
cp raaghu-mfe/rds_pages/host/public/favicon.ico raaghu-mfe/rds_pages/host/dist
````

Esses comandos copiam os arquivos web.config e favicon.ico para o diretório raaghu-mfe/rds_pages/host/dist, garantindo que eles estejam incluídos no pacote de implantação.

#### 4. Carregar o Pacote para Aplicativos Web
Finalmente, carregue o conteúdo do diretório 'raaghu-mfe/rds_pages/host/dist' para o seu servidor de Aplicativos Web para implantação.

#### Conclusão
Ao seguir esses passos, você pode implantar com sucesso seu código Ragghu em um servidor web. Certifique-se de incluir todos os arquivos necessários no pacote de implantação para uma execução tranquila no servidor de destino.