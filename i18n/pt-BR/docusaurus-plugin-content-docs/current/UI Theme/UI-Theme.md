
# Tema da IU

# Tema de reação Raaghu
O tema **Raaghu React** está pré-instalado no código-fonte. Portanto, não há necessidade de instalá-lo manualmente. O pacote npm é instalado diretamente no nível do projeto, como você pode ver no arquivo **package.json** de nível raiz e dentro da pasta raaghumfe.
```bash
    npm i raaghu-react-themes
```
![⁇](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-react-theme-package.png)
# customize raaghu reage tema
### como usar raaghu-react-temas
obtenha o código-fonte do repositório e coloque-o no diretório raiz do projeto.

Na pasta seguinte, você vai encontrar todo o Raghu React Theme.

![estrutura da pasta](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-theme-folder.png)
### nível do projeto
Passos a seguir se você deseja customizar css, color-variables, adicionando novas classes de acordo com seu tema customizado.

No nível da raiz você vai ver a pasta raaghu-me dentro que ir para
```json
    rds-pages &gt; host &gt; src &gt; App.scss
```
você vai conseguir ver a linha abaixo
```json
    @import "../../../../raaghu-react-themes/src/styles/default.scss";
```
![arquivo de aplicativo](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-react-theme-app.png)
usando a linha acima, você pode acessar a pasta raaghu-react-themes enquanto aplica todas as coisas relacionadas aos temas por meio do arquivo default.scss no tema, é por isso que estamos apontando para o arquivo default.scss.

Dentro de raaghu-react-temas você vai conseguir ver duas pastas como Public e src![estrutura da pasta](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-theme-folder.png)

Se você quiser fazer alterações nas fontes, você pode ir para a pasta de fontes dentro da pasta pública -

![⁇  de ⁇](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-react-public.png)

Se você deseja personalizar o elemento css para o aplicativo, você pode ir para a pasta estilos dentro da pasta src -

![projeto css](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-theme-style.png)

