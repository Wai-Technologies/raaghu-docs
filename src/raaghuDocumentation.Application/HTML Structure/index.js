

document.addEventListener('DOMContentLoaded', function () {
        var languageDropdown = document.getElementById('language-dropdown');
        languageDropdown.addEventListener('change', function () {
            var selectedLanguage = languageDropdown.value;
            if (selectedLanguage === 'pt') {
              // Sidebar 
              document.getElementById('tableOfContent').textContent = 'Índice';
              document.getElementById('downloadSource').textContent = 'Fonte de download';
              document.getElementById('version').textContent = 'Versão';
              // =============================================================
              document.getElementById('Getting').textContent = 'Recebendo';
              document.getElementById('setupDev').innerHTML = 'Configure seu desenvolvimento ambiente';
              document.getElementById('creatingNewSol').textContent = 'Criando uma nova solução';
              document.getElementById('runningTheSol').textContent = 'Executando a Solução';
              document.getElementById('tut').textContent = 'Tutoriais';
              document.getElementById('webAppDev').textContent = 'Desenvolvimento de Aplicativos Web';
              document.getElementById('creatingServer').textContent = 'Criando o servidor Lado';
              document.getElementById('bookList').textContent = 'A página da lista de livros';
              document.getElementById('creatingUpdating').textContent = 'Criando, Atualizando E Excluindo livro';
              document.getElementById('guides').textContent = 'Guias';
              document.getElementById('customizingTheModules').textContent = 'Personalizando os Módulos';
              document.getElementById('identityServerDeploy').textContent = 'Implantação do servidor de identidade';
              document.getElementById('samples').textContent = 'Amostras';
              document.getElementById('allSamples').textContent = 'Todas as amostras';
              document.getElementById('startupTemplate').textContent = 'Modelo de inicialização';
              document.getElementById('applicationTemplate').textContent = 'Modelos de aplicativos';
              document.getElementById('creatingSolution').textContent = 'Criando Solução';
              document.getElementById('solutionStruct').textContent = 'Estrutura da Solução';
              document.getElementById('appModules').textContent = 'Módulos de aplicativos';
              document.getElementById('overall').textContent = 'Geral';
              document.getElementById('ac').textContent = 'Conta';
              document.getElementById('auditLogging').textContent = 'Log de auditoria';
              document.getElementById('chat').textContent = 'Bater papo';
              document.getElementById('CMS').textContent = 'CMS Kit Profissional';
              document.getElementById('fileMgt').textContent = 'Gerenciamento de arquivos';
              document.getElementById('forms').textContent = 'Formulários';
              document.getElementById('identity').textContent = 'Identidade';
              document.getElementById('OpenIddict').textContent = 'OpenIddict';
              document.getElementById('languageMgt').textContent = 'Gerenciamento de idiomas';
              document.getElementById('payment').textContent = 'Pagamento';
              document.getElementById('saas').textContent = 'SaaS';
              document.getElementById('ttm').textContent = 'Gerenciamento de modelo de texto';
              document.getElementById('ui').textContent = 'Temas de IU';
              document.getElementById('reactUI').textContent = 'IU de reação';
              document.getElementById('custom').textContent = 'costumização';
              document.getElementById('compo').textContent = 'Componentes';
                // Body Content
              
               
            }
            else if (selectedLanguage === 'spanish') {
                
            } else {
                
            }
        });
    });

