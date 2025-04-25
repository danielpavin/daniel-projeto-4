const botoes = document.querySelectorAll(".botao");
 const textos = document.querySelectorAll(".aba-conteudo");
 
 for (let i = 0; i < botoes.length; i++) {
    <!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meus objetivos do ano</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <section class="conteudo-principal">
            <h2 class="titulo-principal">Meus Objetivos do ano<span>_</span></h2>
            <div class="conteudo">
            <div class="botoes">
                <button class="botao ativo">passar de ano
                <button class="botao">passar no enem
                <button class="botao">tirar titulo e eleitor
                <button class="botao">passar no vstibular
            </div>
            <div class="abas-textos">
                <div class="aba-conteudo ativo">
                    <h3 class="aba-conteudo-titulo-principal">passar e ano
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador"></div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">passar no enem
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador"></div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Criar um portfolio com os meus 3 melhores projetos</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador"></div>
                <div class="botoes">
                    <button class="botao ativo">Cursos na Alura</button>
                    <button class="botao">Criar projetos em Javascript</button>
                    <button class="botao">Criar um portfolio</button>
                    <button class="botao">Atualizar meu currículo</button>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">tirar titulo e eleitor
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador"></div>
                <div class="abas-textos">
                    <div class="aba-conteudo ativo">
                        <h3 class="aba-conteudo-titulo-principal">passar no vestibular
                        <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                        <div class="contador">
                            <div class="contador-digito">
                                <p class="contador-digito-numero">7</p>
                                <p class="contador-digito-texto">dias</p>
                            </div>
                            <div class="contador-digito">
                                <p class="contador-digito-numero">7</p>
                                <p class="contador-digito-texto">horas</p>
                            </div>
                            <div class="contador-digito">
                                <p class="contador-digito-numero">7</p>
                                <p class="contador-digito-texto">min</p>
                            </div>
                            <div class="contador-digito">
                                <p class="contador-digito-numero">7</p>
                                <p class="contador-digito-texto">seg</p>
                            </div>
                        </div>
                    </div>
                    <div class="aba-conteudo">
                        <h3 class="aba-conteudo-titulo-principal">Criar 5 projetos em Javascript</h3>
                        <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                        <div class="contador"></div>
                    </div>
                    <div class="aba-conteudo">
                        <h3 class="aba-conteudo-titulo-principal">Criar um portfolio com os meus 3 melhores projetos</h3>
                        <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                        <div class="contador"></div>
                    </div>
                    <div class="aba-conteudo">
                        <h3 class="aba-conteudo-titulo-principal">Atualizar meu curriculo com os certificados da Alura</h3>
                        <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                        <div class="contador"></div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <script src="main.js"></script>
    </body>
    
    </html>
 
         for (let j = 0; j < botoes.length; j++) {
             botoes[j].classList.remove("ativo");
             textos[j].classList.remove("ativo");
         }
 
         botoes[i].classList.add("ativo");
         textos[i].classList.add("ativo");
     }
 }
 
 const contadores = document.querySelectorAll(".contador");
 const tempoObjetivo1 = new Date("2025-12-05T00:00:00");
 const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
 const tempoObjetivo3 = new Date("2025-12-30T00:00:00");
 const tempoObjetivo4 = new Date("2025-12-01T00:00:00");
 
 const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
 
 
 function calculaTempo(tempoObjetivo) {
     let tempoAtual = new Date();
     let tempoFinal = tempoObjetivo - tempoAtual;
     let segundos = Math.floor(tempoFinal / 1000);
     let minutos = Math.floor(segundos / 60);
     let horas = Math.floor(minutos / 60);
     let dias = Math.floor(horas / 24);
 
     segundos %= 60;
     minutos %= 60;
     horas %= 24;
     if (tempoFinal > 0){
         return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
     } else {
         return "Prazo Finalizado";
     }
 }
 
 function atualizaCronometro(){
        
     for (let i=0; i<contadores.length;i++){
         contadores[i].textContent = calculaTempo(tempos[i]);   
     }
 }
 
 function comecaCronometro(){
     atualizaCronometro();
     setInterval(atualizaCronometro,1000);
 }
 
 comecaCronometro();
 //comecaCronometro();
