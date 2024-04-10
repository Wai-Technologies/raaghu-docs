---
sidebar_position: 2
---

# Criando uma nova solução

Existem duas maneiras de criar um novo projeto: ABP Suite e ABP CLI
### Usando o ABP Suite para criar um novo projeto.
ABP Suite é a forma recomendada para criar novas soluções para o ABP Comercial

Execute o Suite BP com o seguinte comando:
```bash
       abp suite
```

- Este comando inicia o ABP Suite e abre em seu navegador padrão:

![Criar uma nova ⁇](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/pt-BR/images/createANewSol.png)

Clique no botão Criar uma nova solução e preencha o formulário modal:

![Criar uma nova ⁇  para a forma modal](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/pt-BR/images/createSol.png)

Selecione o framework de IU como raaghu-react, o provedor de banco de dados e outras opções com base em suas preferências, em seguida, clique no botão OK

### usando o cli amplificador para ⁇  um novo projeto
Use o novo comando do ABP CLI para criar um novo projeto:
```bash
       abp new Acme.Bookstore -t app-pro
```

- -t argumento especifica o[](https://docs.abp.io/en/commercial/7.2/startup-templates/application/index "")[startup templateABP Módulos comerciais](https://commercial.abp.io/modules "")Nome . app-pro é o modelo de inicialização que ⁇  o essencial pré-instalado e configurado para você.
- Podemos também usar um nível diferente de espaços de nomes; por exemplo. Livraria, Acme.Bookstore ou Came.Retail.Bookstore.

## tema
### raaghu-temas
Um novo tema raaghu moderno e elegante com diferentes opções de cores, é o tema mais recente. Você pode escolher entre 3 opções: Escuro, Claro e Semi-Escuro.

### Comandos e opções do ABP CLI
[documento BP LI](https://docs.abp.io/en/abp/latest/CLI "")cobre todos os comandos e ⁇  ⁇  para o BP LI. A principal diferença para o BP Comercial é o nome do modelo. [Modelos de inicialização comercial BP](https://docs.abp.io/en/commercial/7.2/startup-templates/index "")documento para outros modelos comerciais.
### Estrutura da solução

A solução possui uma estrutura em camadas  (baseada no[Design Driven de Domínio](https://docs.abp.io/en/abp/Domain-Driven-Design "")) e contém  projetos de teste de unidade &amp; ⁇ . [documento de estrutura de ⁇](https://docs.abp.io/en/commercial/7.2/startup-templates/application/solution-structure "")para ⁇  a estrutura de ⁇  em detalhes.
### próximo passo

- [Executando a solução](Getting-Started-Running-Solution.md "")

