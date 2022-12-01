function jojofav(){
    var nome = (document.getElementById("jojofav").value);
    //if (nome == "Jonathan Joestar" || nome == "jonathan" || nome =="1"|| nome == "jonathan joestar" || nome =="Jonathan" || nome =="Jonathan joestar"){
        if(nome.toLowerCase() == "jonathan" || nome.toLowerCase() == "jonathan joestar") {    
    document.getElementById("td").innerHTML = ("O primeiro Jojo, o mais bondoso e musculoso, usuario de hamon, irmão de Dio. Apesar de ser bem carismatico, não e o favorito da comunidade."); 
       //document.write("<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsGHEktrrgLNVcp5lalDx50Fjndb2EiKBlg&usqp=CAU'>");
      document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/30/2c/5e/302c5e9ca27dcd4cc6b9a0611079c876.jpg'>";
      document.getElementById("h1").innerHTML = ("Jonathan Joestar");
    }//imgdp = imagem de pesquisa
    
    else if (nome.toLowerCase() == "joseph" || nome.toLowerCase() == "joseph joestar"){
        document.getElementById("td").innerHTML = ("O meu jojo favorito, apareceu em 3 partes diferentes, é usuario de hamon e stand, é muito inteligente e é gato.");
        document.getElementById("h1").innerHTML = ("Joseph Joestar");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/474x/6f/90/18/6f90188ea60cfd0cb290d16561b11335.jpg'>";
    }
    else if (nome.toLowerCase() == "jotaro" || nome.toLowerCase() == "jotaro kujo"){
        document.getElementById("td").innerHTML = ("Talvez o jojo mais icônico, apareceu em 4 partes, usuario de stand ");
        document.getElementById("h1").innerHTML = ("Jotaro Kujo");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/65/09/a5/6509a5402e1851dc52544fb8d6c08cd2.jpg'>";
    }
    else if (nome.toLowerCase() == "josuke" || nome.toLowerCase() == "josuke higashikata"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 4, usuario de stand, muito bondoso mas se irrita quando falam de seu cabelo");
        document.getElementById("h1").innerHTML = ("Josuke Higashikata");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/originals/13/71/eb/1371eb67fd81018fe69d4cd26b51cf16.jpg'>";
    }
    else if (nome.toLowerCase() == "giorno" || nome.toLowerCase() == "giorno giovanna"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 5, apesar de ser filho do Dio, tambem tem sangue Joestar em seu corpo. Ele tem um sonho");
        document.getElementById("h1").innerHTML = ("Giorno Giovanna");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/originals/9b/00/76/9b0076a948af90c99b3b8e536e06be81.jpg'>";
    }
    else if (nome.toLowerCase() == "jolyne" || nome.toLowerCase() == "jolyne kujo" || nome.toLowerCase() == "jolyne cujo" || nome.toLowerCase() == "jolyne cujoh"){
        document.getElementById("td").innerHTML = ("A protagonista da parte 6, a primeira jojo mulher, filha negligenciada do Jotaro, foi presa injustamente na penitenciária Green Dolphin Street e arrisca sua vida para salvar seu pai mesmo após ter sido abandonada por ele");
        document.getElementById("h1").innerHTML = ("Jolyne Cujoh");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEtAjXnnoGhTjYibpiMyb7O1EEYdpKWgEvQ&usqp=CAU'>";
    }
    else if (nome.toLowerCase() == "johnny" || nome.toLowerCase() == "johnny joestar"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 7, no começo era um garoto arrogante e por causa dessa arrogancia ficou paraplégico, um ex joquei famoso. Entrou na corrida para aprender os segredos das bolas giratorias de Gyro e poder voltar a andar");
        document.getElementById("h1").innerHTML = ("Johnny Joestar");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/c9/68/dc/c968dc85d1c20a9743d1e30860192e4d.jpg'>";
    }
    else if (nome == "8" || nome == "Josuke 8"  || nome == "josuke 8" || nome == "Josuke parte 8" || nome == "josuke parte 8" || nome == "Josuke Higashikata 8" || nome == "josuke Higashikata 8" || nome == "josuke higashikata 8"|| nome == "Josuke Higashikata  parte 8" || nome == "Gappy" || nome == "gappy"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 8, um homem que foi achado nas paredes oculares após o terremoto em Morioh. Ele não se lembra de nada e quer descobrir quem é ");
        document.getElementById("h1").innerHTML = ("Josuke Higashikata");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://images.8tracks.com/cover/i/012/004/832/gappy_mix_cover-3983.jpg?rect=0,0,1804,1804&q=98&fm=jpg&fit=max'>";
    }
    else if (nome == "Jojo" || nome == "jojo" || nome == "JoJo" || nome == "joJo"){
        document.getElementById("td").innerHTML = ("O nome dado aos protagonistas da obra! São eles: Jonathan Joestar, Joseph Joestar, Jotaro Kujo, Josuke Higashikata, Giorno Giovanna, Jolyne Cujoh, Johnny Joestar e Josuke Higashikata(Gappy)");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/34/fd/11/34fd11dad742450f3a779d6a27c3c646.jpg'>";
    }

    else if(nome == "Irene" || nome == "irene"){
        document.getElementById("td").innerHTML = ("No fundo, ainda é a Jolyne")
        document.getElementById("img").innerHTML = " <img class = 'imgdp' src = 'https://static.zerochan.net/Kuujou.Jolyne.full.3232211.png'>";
        document.getElementById("h1").innerHTML = ("Irene");
    }

    else{
        document.getElementById("td").innerHTML = ("Jojo não encontrado! Tente pesquisar por : Jonathan Joestar, Joseph Joestar, Jotaro Kujo, Josuke Higashikata, Giorno Giovanna, Jolyne Cujoh, Johnny Joestar e Josuke Higashikata(Gappy)")
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://64.media.tumblr.com/74edba61f8b0fa24a52146128d5b75a0/tumblr_pccjkauiAV1tvruuuo5_1280.jpg'>";
        alert("Erro! Jojo não encontrado :´(")
        document.getElementById("h1").innerHTML = ("Erro!")
    }
    
    }

    function jobrofav(){
        var nome = (document.getElementById("jobrofav").value);
        if (nome.toLowerCase() == "Speedwagon" ||nome.toLowerCase() == "speedwagon" || nome.toLowerCase()== "Robert E. O. Speedwagon" || nome.toLowerCase() =="Robert e. o. speedwagon" ||nome.toLowerCase()=="Robert Speedwagon" ||nome.toLowerCase() =="melhor waifu" || nome =="Melhor waifu"){
            document.getElementById("td").innerHTML = ("O jobro de Jonathan, ele não foi util apenas na parte 1 mas sim em todas as outras partes graças a sua fundação de pesquisas que sempre ajudou a familia Joestar")
            document.getElementById("h1").innerHTML = ("Robert E. O. Speedwagon");
            document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'http://pm1.narvii.com/6381/83c4982b2e18322b3da190ab473c90f1deb279d1_00.jpg'>";
    }
        else if (nome.toLowerCase()== "William Zeppeli" || nome.toLowerCase() == "william zeppeli" || nome.toLowerCase() == "william" || nome.toLowerCase() == "William zeppeli" || nome.toLowerCase() == "William Anthonio Zeppeli"){
            document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gNjBXrO2FC1P_urPLr8-UsPR85snd3E2iA&usqp=CAU'>";
            document.getElementById("td").innerHTML = ("Podemos dizer que ele foi um professor para o Jonathna, ensinou o hamon ao Jonathan e deu a sua vida pelo jovem leão acorrentado")
            document.getElementById("h1").innerHTML = ("William Anthonio Zeppeli");
        }  
        
        else if ( nome.toLowerCase() == "smokey" || nome.toLowerCase() == "smokey brown") {
            document.getElementById("td").innerHTML = ("Em sua primeira aparição roubou a carteira do Joseph, mas logo em seguida foi salvo pelo mesmo. Foi adotado pela Erina e mais tarde, ele se tornaria o primeiro prefeito afro-americano de sua cidade natal no estado da Geórgia. De fato o jobro que se deu melhor na vida")
            document.getElementById("img").innerHTML = "<img class ='imgdp' src = 'https://i.pinimg.com/originals/d8/1e/66/d81e6661896038f3c0a71551bbcd2aea.jpg'>";
            document.getElementById("h1").innerHTML = ("Smokey Brown");
        }

        else if (nome.toLowerCase() == "caesar"|| nome.toLowerCase() == "caesar zeppeli" || nome.toLowerCase() == "cesar" || nome.toLowerCase() == "cesar zeppeli" || nome.toLowerCase() == "cezar" || nome.toLowerCase() == "cezar zeppeli") {
            document.getElementById("td").innerHTML = ("Neto de Willian Zeppeli, herdou as habilidades de hamon de seu avô e busca vingança contra os homens do pliar por mataren seu pai. Em sua primeira aparição provoca Joseph, o que faz com que os dois se tornem rivais.")
            document.getElementById("img").innerHTML ="<img class ='imgdp' src = 'https://i.pinimg.com/474x/14/c7/65/14c765824375ad4a3064bb86e88a3034.jpg'>";
            document.getElementById("h1").innerHTML = ("Caesar Anthonio Zeppeli");
        }

        else if (nome.toLowerCase() == "kakyoin" || nome.toLowerCase() == "noriaki kakyoin"){
            document.getElementById("h1").innerHTML = ("Noriaki Kakyoin")
            document.getElementById("td").innerHTML = ("Um dos jobros de Jotaro, em sua primeira aparição estava sob o controle de Dio e tentou matar o Jotaro")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/80/96/89/809689b660de2c5452b9c47a28e51fa4.jpg'>";
        }

        else if (nome.toLowerCase() == "avdol" || nome.toLowerCase() == "muhammad avdol"){
            document.getElementById("h1").innerHTML = ("Muhammad Avdol") 
            document.getElementById("td").innerHTML = ("Chamado pelo velho Joseph para enfrentar Dio. Sua primeira tarefa foi tirar Jotaro da cela da prisão. Ele foi a primeira pessoa a utilizar um stand de forma consciente na serie")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQ7U3JvSLrNNc90sWwhCi3Mhv-reyzqwWU9DT4sU2OwEtdQOj1dQMRfbRjv5eFzoB0kQ&usqp=CAU'>";
        }

        else if (nome.toLowerCase() == "polnareff" || nome.toLowerCase() == "p"){
            document.getElementById("h1").innerHTML = ("Jean Pierre Polnareff") 
            document.getElementById("td").innerHTML = ("Um frances que se aliou ao Dio no começo para se vingar de um um homem que matou sua irmã, após ter a semente de carne retirada de sua testa, se juntou aos crusaders ainda buscando vingança")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/736x/93/d2/b9/93d2b98345cb92667c846493a368bfd0.jpg'>";
        }
        
        else if (nome.toLowerCase() == "iggy"){
            document.getElementById("h1").innerHTML = ("Iggy") 
            document.getElementById("td").innerHTML = ("Um cachorro usuario de stand que foi forçado a se juntar aos cursaders.Ele gosta de bala de café e de peidar na cara das pessoas.Só aparece na metade da parte 3 mas tem uma luta épica contra Petshop e encontra o esconderijo de Dio")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/564x/9c/23/fb/9c23fb3fea95ce560ed99eb44ac99041.jpg'>";
        }

        else if (nome.toLowerCase() == "okuyasu"){
            document.getElementById("h1").innerHTML = ("Okuyasu Nijimura") 
            document.getElementById("td").innerHTML = ("Após tentar matar Josuke, o ajuda e então no dia seguinte aparece na casa do jojo como se nada tivesse acontecido.Tem um stand muito forte mas não tem a inteligencia necessaria para utilizar bem")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i1.sndcdn.com/avatars-c8jMegiCMzkv4PiP-aqgy5w-t500x500.jpg'>";
        }

        else if (nome.toLowerCase() == "koichi"){
            document.getElementById("h1").innerHTML = ("Koichi Hirose") 
            document.getElementById("td").innerHTML = ("Um personagem que se desenvolve muito durante a obra, isso é refletido no seu stand que evolui.Um personagem que é muito bondoso e inocente.Conquistou o respeito de Jotaro ao revelar a identidade de Kira")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-0-kRuSQ1C8mMng1O4bdLeJqTtJ0p9mWX8WyxhGJ1mLF3gkZRN4dJejh1YMnl2x8WPI&usqp=CAU'>";
        }

        else if (nome.toLowerCase() == "bucciarati"){
            document.getElementById("h1").innerHTML = ("Bruno Bucciarati ") 
            document.getElementById("td").innerHTML = ("Um dos jobros do Giorno, em sua primeira aparição tentou matar o protagonista, mas após ver que Giorno tem um coração puro, decide aceita-lo em sua gangue")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDy_KN58W3cWCwZ7xxLG0NaGCuH808bSty2PZ7_kWzq38N9Azsj6-q8hiMmp469gwbhA&usqp=CAU'>";
        }

        else if(nome.toLowerCase() == "fugo"){
            document.getElementById("h1").innerHTML = ("Pannacotta Fugo") 
            document.getElementById("td").innerHTML = ("Um personagem com muito potencial, com um stand muito forte mas que não teve muito aproveitamento")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/4/4b/Pannacotta_Fugo_Anime.png/revision/latest?cb=20181213225942&path-prefix=pt-br'>";
        }

        else if (nome.toLowerCase() == "abbacchio"){
            document.getElementById("h1").innerHTML = ("Leone Abbacchio")
            document.getElementById("td").innerHTML = ("Um dos melhores personagens da parte 5. De primeira vista pode parecer apenas um emo revoltado, mas conforme a historia passa, percebemos o motivo dele ser assim. Ele não gosta de Giorno pois o protagonista o lembra de si quando era jovem e tinha um enorme senso de justiça")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://s11.favim.com/orig/7/773/7737/77378/jojos-bizarre-adventure-leone-abbacchio-anime-icons-Favim.com-7737862.jpg'>";

        }

        else if (nome.toLowerCase() == "shigechi"){
            document.getElementById("h1").innerHTML = ("Shigekiyo Yangu")
            document.getElementById("td").innerHTML = ("Ele pode ser considerado um jobro? Sim, ele deu a vida para ajudar josuke e em seu ultimo suspiro ajudou os moçinhos. É engraçado pensar que tudo isso começou por um sanduiche")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/5/59/Shigechi_diu_color_v8_042.png/revision/latest?cb=20150215153249&path-prefix=pt-br'>";

        }

        else if (nome.toLowerCase() == "mista"){
            document.getElementById("h1").innerHTML = ("Guido Mista")
            document.getElementById("td").innerHTML = ("Um jovem que odeia o numero 4. Seu stand é numerado do 1 ao 7 mas pula do 3 para o 5. Foi um dos poucos sobreviventes da parte 5")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/5/59/Shigechi_diu_color_v8_042.png/revision/latest?cb=20150215153249&path-prefix=pt-br'>";

        }

        else if (nome.toLowerCase() == "narancia"){
            document.getElementById("h1").innerHTML = ("Narancia Ghirga")
            document.getElementById("td").innerHTML = ("Narancia é um adolescente de média estatura e figura desajeitada.Na infancia foi salvo por Bucciarati e anos mais tarde entrou para sua guangue")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'http://pm1.narvii.com/7435/18d31ae3a1017dcfd3095e00232b36095d571c7ar1-640-624v2_uhq.jpg'>";

        }

        else if (nome.toLowerCase() == "hermes"){
            document.getElementById("h1").innerHTML = ("Hermes Costello")
            document.getElementById("td").innerHTML = ("Conheceu e ajudou Jolyne na prisão. Apesar de estar disposta a ajudar jolyne, tem seus proprios objetivos. Infelizmente passou grande parte de Stone ocean na enfermaria ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/474x/fc/56/83/fc5683cade5fb5158770aed7e2e32f61.jpg'>";

        }

        else if (nome.toLowerCase() == "foo fighters"){
            document.getElementById("h1").innerHTML = ("Foo Fighters")
            document.getElementById("td").innerHTML = ("A jobro de Jolyne, no começo trabalha para o whitesnake mas após lutar com a jolyne e ser poupada por ela, decidiu se juntar ao grupo")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/b/bc/Ffanime.jpg/revision/latest?cb=20210921120528&path-prefix=pt-br'>";

        }

        else if (nome.toLowerCase() == "weather report"){
            document.getElementById("h1").innerHTML = ("Weather Report")
            document.getElementById("td").innerHTML = ("Irmão de Pucci, foi roubado na maternidade.Quando cresceu teve um caso com sua irmã.Após alguns aconteimentos, teve sua memoria roubada e busca vingança contra seu irmão")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/c8/94/b8/c894b8d09be728a8c9d1bd3b4bbae4a8.jpg'>";

        }

        else if (nome.toLowerCase() == "anasui"){
            document.getElementById("h1").innerHTML = ("Narciso Anasui ")
            document.getElementById("td").innerHTML = ("Foi preso por 'desmontar' sua namorada. Se apaixonou por Jolyne no instante em que a viu e esta disposto a fazer qualquer coisa por ela. Em sua primeira aparição no manga era uma mulher, mas mudou nos capitulos seguintes")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://images.8tracks.com/cover/i/012/408/854/tumblr_olh8caZ7ZL1rkd3u1o1_540-8215.png?rect=0,197,415,415&q=98&fm=jpg&fit=max&w=960&h=960'>";

        }

        else if (nome.toLowerCase() == "emporio"){
            document.getElementById("h1").innerHTML = ("Emporio Alnino ")
            document.getElementById("td").innerHTML = ("Responsavel por alertar Jolyne dos problemas que estão por vir. Nasceu e cresceu na prisão, se escondendo em seu stand 'Burning Down the House' que é um quarto fantasma. Foi o responsavel pela vitoria dos herois na parte 6")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/8b/ea/cd/8beacd080893981f266a7802ceee5401.jpg'>";

        }


        else if (nome.toLowerCase() == "gyro"){
            document.getElementById("h1").innerHTML = ("Gyro Zeppeli")
            document.getElementById("td").innerHTML = ("No começo atua como o protagonista, tendo mais destaque do que o proprio jojo. Entrou na corrida para salvar uma criança da execução. Até certa parte do manga, não possui stand mas isso não o impede de ser um exelente lutador com suas 'stell balls'. ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/736x/21/c2/a1/21c2a18dfade216e57f0163a737da609.jpg'>";

        }

        else if (nome.toLowerCase() == "lucy"){
            document.getElementById("h1").innerHTML = ("Lucy Steel")
            document.getElementById("td").innerHTML = ("A versão alternativa de Erina Pendleton. Casada com Stephen Steel, se juntou aos protagonistas para derrotar o presidente e salvar seu marido das constantes ameaças. Retorna na parte 8 como uma idosa")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://64.media.tumblr.com/689fa653ae58d93ab620d2e2407a35a5/c19a7d8fece565fb-93/s1280x1920/84a14bdd08b76f7ae21d256ae79655356eefaa63.jpg'>";

        }


        else if (nome.toLowerCase() == "yasuho"){
            document.getElementById("h1").innerHTML = ("Yasuho Hirose")
            document.getElementById("td").innerHTML = ("A jobro e interesse amoroso do josuke da parte 8. A jornada dos dois juntos começa quando ela o acha soterrado nas paredes oculares após o terremoto")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJV5LPhYtUrkJtFsTro_KlAfc910yR-ASJQ&usqp=CAU'>";

        }


        else if (nome.toLowerCase() == "joshu"){
            document.getElementById("h1").innerHTML = ("Joshu Higashikata")
            document.getElementById("td").innerHTML = ("Não importa o quanto tente, ele nunca vai ser um jobro")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://pm1.narvii.com/6958/403284957df784c0b3f254d18cce19354b810b74r1-320-320v2_hq.jpg'>";

        }

        else if (nome.toLowerCase() == "tsurugi"){
            document.getElementById("h1").innerHTML = ("Tsurugi Higashikata")
            document.getElementById("td").innerHTML = ("Filho de Jobin, esta em busca de uma cura para sua doença.Apesar de ser um menino, se veste como mulher para evitar uma maldição ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/564x/04/a7/dd/04a7dd57598fbe2120f9dfa87defa27e.jpg'>";

        }


        else if (nome.toLowerCase() == "mamezuku rai" || nome.toLowerCase() =="mamezuku" || nome.toLowerCase() =="rai" || nome.toLowerCase == "rai mamezuku"){

            document.getElementById("h1").innerHTML = ("Rai Mamezuku")
            document.getElementById("td").innerHTML = ("O avaliador de plantas pessoal da familia higashikata, vive em um teleferico nas montanhas. É um personagem fundamental para o desenrolar da obra, ele é o responsavel por encontrar o ramo da rokakaka no jardim higashikata")
            document.getElementById("img").innerHTML = "<img class='imgdp' src='https://static.wikia.nocookie.net/jojo/images/3/31/Rai_infobox.jpg/revision/latest?cb=20210122172346&path-prefix=es'>";

        }


        else if(nome.toLowerCase() == "amongus"){
            document.getElementById("img").innerHTML = "<img class='imgdp' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaY2C95TqmqnYeqFCyWgX4Wb6DM_HeJDRsc0tW884VYQ&s'>";
            document.getElementById("h1").innerHTML = ("DRIP AMONGUS")
        }


        

    else{
        document.getElementById("td").innerHTML = ("Jobro não encontrado!");
        document.getElementById("img").innerHTML = "<img class ='imgdp' src = 'https://i.pinimg.com/474x/9b/e7/93/9be7930083adfe193ed6818c9f4a7511.jpg'>";
        document.getElementById("h1").innerHTML = ("Erro!")
        alert("Erro! Jobro não encontrado :´(")
        
    }
}

function vilfav(){

    var nome = (document.getElementById("vilfav").value);
    if (nome.toLowerCase() == "dio" || nome.toLowerCase() == "dio brando"){
        document.getElementById("h1").innerHTML = ("Dio Brando")
        document.getElementById("td").innerHTML = ("O vilão mais iconico da obra. Sem ele, a maioria dos eventos da obra não aconteceriam.")
        document.getElementById("img").innerHTML = "<img class='imgdp' src ='https://taverna42.files.wordpress.com/2018/09/maxresdefault-1.jpg?w=1280&h=720&crop=1'>";
    } 


    else if (nome.toLowerCase() == "kars"){
        document.getElementById("h1").innerHTML = ("Kars")
        document.getElementById("td").innerHTML = ("O homem pilar que deseja acabar com a raça humana. Após usar a pedra Aja, se tornou a criatura perfeita")
        document.getElementById("img").innerHTML = "<img class='imgdp' src ='https://taverna42.files.wordpress.com/2018/09/maxresdefault-1.jpg?w=1280&h=720&crop=1'>";
    } 
        
    else{
        document.getElementById("td").innerHTML = ("Vilão não encontrado")
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEPwNk_pc5NoJEQbnh0dh7STRLDTK8zrb8A&usqp=CAU'>";
        document.getElementById("h1").innerHTML = ("Erro!")
        alert("Erro! Vilão não encontrado :´(")
    }

}

function jojofavs(){
    var nome = (document.getElementById("jojofavs").value);
    //if (nome == "Jonathan Joestar" || nome == "jonathan" || nome =="1"|| nome == "jonathan joestar" || nome =="Jonathan" || nome =="Jonathan joestar"){
        if(nome.toLowerCase() == "jonathan" || nome.toLowerCase() == "jonathan joestar") {    
    document.getElementById("td").innerHTML = ("O primeiro Jojo, o mais bondoso e musculoso, usuario de hamon, irmão de Dio. Apesar de ser bem carismatico, não e o favorito da comunidade."); 
       //document.write("<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsGHEktrrgLNVcp5lalDx50Fjndb2EiKBlg&usqp=CAU'>");
      document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/30/2c/5e/302c5e9ca27dcd4cc6b9a0611079c876.jpg'>";
      document.getElementById("h1").innerHTML = ("Jonathan Joestar");
    }//imgdp = imagem de pesquisa
    
    else if (nome.toLowerCase() == "joseph" || nome.toLowerCase() == "joseph joestar"){
        document.getElementById("td").innerHTML = ("O meu jojo favorito, apareceu em 3 partes diferentes, é usuario de hamon e stand, é muito inteligente e é gato.");
        document.getElementById("h1").innerHTML = ("Joseph Joestar");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/474x/6f/90/18/6f90188ea60cfd0cb290d16561b11335.jpg'>";
    }
    else if (nome.toLowerCase() == "jotaro" || nome.toLowerCase() == "jotaro kujo"){
        document.getElementById("td").innerHTML = ("Talvez o jojo mais icônico, apareceu em 4 partes, usuario de stand ");
        document.getElementById("h1").innerHTML = ("Jotaro Kujo");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/65/09/a5/6509a5402e1851dc52544fb8d6c08cd2.jpg'>";
    }
    else if (nome.toLowerCase() == "josuke" || nome.toLowerCase() == "josuke higashikata"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 4, usuario de stand, muito bondoso mas se irrita quando falam de seu cabelo");
        document.getElementById("h1").innerHTML = ("Josuke Higashikata");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/originals/13/71/eb/1371eb67fd81018fe69d4cd26b51cf16.jpg'>";
    }
    else if (nome.toLowerCase() == "giorno" || nome.toLowerCase() == "giorno giovanna"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 5, apesar de ser filho do Dio, tambem tem sangue Joestar em seu corpo. Ele tem um sonho");
        document.getElementById("h1").innerHTML = ("Giorno Giovanna");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/originals/9b/00/76/9b0076a948af90c99b3b8e536e06be81.jpg'>";
    }
    else if (nome.toLowerCase() == "jolyne" || nome.toLowerCase() == "jolyne kujo" || nome.toLowerCase() == "jolyne cujo" || nome.toLowerCase() == "jolyne cujoh"){
        document.getElementById("td").innerHTML = ("A protagonista da parte 6, a primeira jojo mulher, filha negligenciada do Jotaro, foi presa injustamente na penitenciária Green Dolphin Street e arrisca sua vida para salvar seu pai mesmo após ter sido abandonada por ele");
        document.getElementById("h1").innerHTML = ("Jolyne Cujoh");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEtAjXnnoGhTjYibpiMyb7O1EEYdpKWgEvQ&usqp=CAU'>";
    }
    else if (nome.toLowerCase() == "johnny" || nome.toLowerCase() == "johnny joestar"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 7, no começo era um garoto arrogante e por causa dessa arrogancia ficou paraplégico, um ex joquei famoso. Entrou na corrida para aprender os segredos das bolas giratorias de Gyro e poder voltar a andar");
        document.getElementById("h1").innerHTML = ("Johnny Joestar");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/c9/68/dc/c968dc85d1c20a9743d1e30860192e4d.jpg'>";
    }
    else if (nome == "8" || nome == "Josuke Higashikata(parte 8)"  || nome == "josuke 8" || nome == "Josuke parte 8" || nome == "josuke parte 8" || nome == "Josuke Higashikata 8" || nome == "josuke Higashikata 8" || nome == "josuke higashikata 8"|| nome == "Josuke Higashikata  parte 8" || nome == "Gappy" || nome == "gappy"){
        document.getElementById("td").innerHTML = ("O protagonista da parte 8, um homem que foi achado nas paredes oculares após o terremoto em Morioh. Ele não se lembra de nada e quer descobrir quem é ");
        document.getElementById("h1").innerHTML = ("Josuke Higashikata");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://images.8tracks.com/cover/i/012/004/832/gappy_mix_cover-3983.jpg?rect=0,0,1804,1804&q=98&fm=jpg&fit=max'>";
    }
    else if (nome == "Jojo" || nome == "jojo" || nome == "JoJo" || nome == "joJo"){
        document.getElementById("td").innerHTML = ("O nome dado aos protagonistas da obra! São eles: Jonathan Joestar, Joseph Joestar, Jotaro Kujo, Josuke Higashikata, Giorno Giovanna, Jolyne Cujoh, Johnny Joestar e Josuke Higashikata(Gappy)");
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://i.pinimg.com/736x/34/fd/11/34fd11dad742450f3a779d6a27c3c646.jpg'>";
    }

    else if(nome == "Irene" || nome == "irene"){
        document.getElementById("td").innerHTML = ("No fundo, ainda é a Jolyne")
        document.getElementById("img").innerHTML = " <img class = 'imgdp' src = 'https://static.zerochan.net/Kuujou.Jolyne.full.3232211.png'>";
        document.getElementById("h1").innerHTML = ("Irene");
    }

    else{
        document.getElementById("td").innerHTML = ("Jojo não encontrado! Tente pesquisar por : Jonathan Joestar, Joseph Joestar, Jotaro Kujo, Josuke Higashikata, Giorno Giovanna, Jolyne Cujoh, Johnny Joestar e Josuke Higashikata(Gappy)")
        document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://64.media.tumblr.com/74edba61f8b0fa24a52146128d5b75a0/tumblr_pccjkauiAV1tvruuuo5_1280.jpg'>";
        alert("Erro! Jojo não encontrado :´(")
        document.getElementById("h1").innerHTML = ("Erro!")
    }
    
    }

    function jobrofavs(){
        var nome = (document.getElementById("jobrofavs").value);
        if (nome.toLowerCase() == "Speedwagon" ||nome.toLowerCase() == "speedwagon" || nome.toLowerCase()== "Robert E. O. Speedwagon" || nome.toLowerCase() =="Robert e. o. speedwagon" ||nome.toLowerCase()=="Robert Speedwagon" ||nome.toLowerCase() =="melhor waifu" || nome =="Melhor waifu"){
            document.getElementById("td").innerHTML = ("O jobro de Jonathan, ele não foi util apenas na parte 1 mas sim em todas as outras partes graças a sua fundação de pesquisas que sempre ajudou a familia Joestar")
            document.getElementById("h1").innerHTML = ("Robert E. O. Speedwagon");
            document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'http://pm1.narvii.com/6381/83c4982b2e18322b3da190ab473c90f1deb279d1_00.jpg'>";
    }
        else if (nome.toLowerCase()== "William Zeppeli" || nome.toLowerCase() == "william zeppeli" || nome.toLowerCase() == "william" || nome.toLowerCase() == "William zeppeli" || nome.toLowerCase() == "William Anthonio Zeppeli"){
            document.getElementById("img").innerHTML = " <img  class ='imgdp'src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gNjBXrO2FC1P_urPLr8-UsPR85snd3E2iA&usqp=CAU'>";
            document.getElementById("td").innerHTML = ("Podemos dizer que ele foi um professor para o Jonathna, ensinou o hamon ao Jonathan e deu a sua vida pelo jovem leão acorrentado")
            document.getElementById("h1").innerHTML = ("William Anthonio Zeppeli");
        }  
        
        else if ( nome.toLowerCase() == "smokey" || nome.toLowerCase() == "smokey brown") {
            document.getElementById("td").innerHTML = ("Em sua primeira aparição roubou a carteira do Joseph, mas logo em seguida foi salvo pelo mesmo. Foi adotado pela Erina e mais tarde, ele se tornaria o primeiro prefeito afro-americano de sua cidade natal no estado da Geórgia. De fato o jobro que se deu melhor na vida")
            document.getElementById("img").innerHTML = "<img class ='imgdp' src = 'https://i.pinimg.com/originals/d8/1e/66/d81e6661896038f3c0a71551bbcd2aea.jpg'>";
            document.getElementById("h1").innerHTML = ("Smokey Brown");
        }

        else if (nome.toLowerCase() == "caesar"|| nome.toLowerCase() == "caesar zeppeli" || nome.toLowerCase() == "cesar" || nome.toLowerCase() == "cesar zeppeli" || nome.toLowerCase() == "cezar" || nome.toLowerCase() == "cezar zeppeli") {
            document.getElementById("td").innerHTML = ("Neto de Willian Zeppeli, herdou as habilidades de hamon de seu avô e busca vingança contra os homens do pliar por mataren seu pai. Em sua primeira aparição provoca Joseph, o que faz com que os dois se tornem rivais.")
            document.getElementById("img").innerHTML ="<img class ='imgdp' src = 'https://i.pinimg.com/474x/14/c7/65/14c765824375ad4a3064bb86e88a3034.jpg'>";
            document.getElementById("h1").innerHTML = ("Caesar Anthonio Zeppeli");
        }

        else if (nome.toLowerCase() == "kakyoin" || nome.toLowerCase() == "noriaki kakyoin"){
            document.getElementById("h1").innerHTML = ("Noriaki Kakyoin")
            document.getElementById("td").innerHTML = ("Um dos jobros de Jotaro, em sua primeira aparição estava sob o controle de Dio e tentou matar o Jotaro")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/80/96/89/809689b660de2c5452b9c47a28e51fa4.jpg'>";
        }

        else if (nome.toLowerCase() == "avdol" || nome.toLowerCase() == "muhammad avdol"){
            document.getElementById("h1").innerHTML = ("Muhammad Avdol") 
            document.getElementById("td").innerHTML = ("Chamado pelo velho Joseph para enfrentar Dio. Sua primeira tarefa foi tirar Jotaro da cela da prisão. Ele foi a primeira pessoa a utilizar um stand de forma consciente na serie")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQ7U3JvSLrNNc90sWwhCi3Mhv-reyzqwWU9DT4sU2OwEtdQOj1dQMRfbRjv5eFzoB0kQ&usqp=CAU'>";
        }

        else if (nome.toLowerCase() == "polnareff" || nome.toLowerCase() == "jean pierre polnareff"){
            document.getElementById("h1").innerHTML = ("Jean Pierre Polnareff") 
            document.getElementById("td").innerHTML = ("Um frances que se aliou ao Dio no começo para se vingar de um um homem que matou sua irmã, após ter a semente de carne retirada de sua testa, se juntou aos crusaders ainda buscando vingança")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/736x/93/d2/b9/93d2b98345cb92667c846493a368bfd0.jpg'>";
        }
        
        else if (nome.toLowerCase() == "iggy"){
            document.getElementById("h1").innerHTML = ("Iggy") 
            document.getElementById("td").innerHTML = ("Um cachorro usuario de stand que foi forçado a se juntar aos cursaders.Ele gosta de bala de café e de peidar na cara das pessoas.Só aparece na metade da parte 3 mas tem uma luta épica contra Petshop e encontra o esconderijo de Dio")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/564x/9c/23/fb/9c23fb3fea95ce560ed99eb44ac99041.jpg'>";
        }

        else if (nome.toLowerCase() == "okuyasu nijimura"){
            document.getElementById("h1").innerHTML = ("Okuyasu Nijimura") 
            document.getElementById("td").innerHTML = ("Após tentar matar Josuke, o ajuda e então no dia seguinte aparece na casa do jojo como se nada tivesse acontecido.Tem um stand muito forte mas não tem a inteligencia necessaria para utilizar bem")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i1.sndcdn.com/avatars-c8jMegiCMzkv4PiP-aqgy5w-t500x500.jpg'>";
        }

        else if (nome.toLowerCase() == "koichi hirose"){
            document.getElementById("h1").innerHTML = ("Koichi Hirose") 
            document.getElementById("td").innerHTML = ("Um personagem que se desenvolve muito durante a obra, isso é refletido no seu stand que evolui.Um personagem que é muito bondoso e inocente.Conquistou o respeito de Jotaro ao revelar a identidade de Kira")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-0-kRuSQ1C8mMng1O4bdLeJqTtJ0p9mWX8WyxhGJ1mLF3gkZRN4dJejh1YMnl2x8WPI&usqp=CAU'>";
        }

        else if (nome.toLowerCase() == "bruno bucciarati"){
            document.getElementById("h1").innerHTML = ("Bruno Bucciarati ") 
            document.getElementById("td").innerHTML = ("Um dos jobros do Giorno, em sua primeira aparição tentou matar o protagonista, mas após ver que Giorno tem um coração puro, decide aceita-lo em sua gangue")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDy_KN58W3cWCwZ7xxLG0NaGCuH808bSty2PZ7_kWzq38N9Azsj6-q8hiMmp469gwbhA&usqp=CAU'>";
        }

        else if(nome.toLowerCase() == "pannacotta fugo"){
            document.getElementById("h1").innerHTML = ("Pannacotta Fugo") 
            document.getElementById("td").innerHTML = ("Um personagem com muito potencial, com um stand muito forte mas que não teve muito aproveitamento")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/4/4b/Pannacotta_Fugo_Anime.png/revision/latest?cb=20181213225942&path-prefix=pt-br'>";
        }

        else if (nome.toLowerCase() == "leone abbacchio"){
            document.getElementById("h1").innerHTML = ("Leone Abbacchio")
            document.getElementById("td").innerHTML = ("Um dos melhores personagens da parte 5. De primeira vista pode parecer apenas um emo revoltado, mas conforme a historia passa, percebemos o motivo dele ser assim. Ele não gosta de Giorno pois o protagonista o lembra de si quando era jovem e tinha um enorme senso de justiça")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://s11.favim.com/orig/7/773/7737/77378/jojos-bizarre-adventure-leone-abbacchio-anime-icons-Favim.com-7737862.jpg'>";

        }

        else if (nome.toLowerCase() == "shigechi"){
            document.getElementById("h1").innerHTML = ("Shigekiyo Yangu")
            document.getElementById("td").innerHTML = ("Ele pode ser considerado um jobro? Sim, ele deu a vida para ajudar josuke e em seu ultimo suspiro ajudou os moçinhos. É engraçado pensar que tudo isso começou por um sanduiche")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/5/59/Shigechi_diu_color_v8_042.png/revision/latest?cb=20150215153249&path-prefix=pt-br'>";

        }

        else if (nome.toLowerCase() == "guido mista"){
            document.getElementById("h1").innerHTML = ("Guido Mista")
            document.getElementById("td").innerHTML = ("Um jovem que odeia o numero 4. Seu stand é numerado do 1 ao 7 mas pula do 3 para o 5. Foi um dos poucos sobreviventes da parte 5")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://pbs.twimg.com/media/ELy925_XUAA6yAz.jpg'>";

        }

        else if (nome == "Narancia Ghirga"){
            document.getElementById("h1").innerHTML = ("Narancia Ghirga")
            document.getElementById("td").innerHTML = ("Narancia é um adolescente de média estatura e figura desajeitada.Na infancia foi salvo por Bucciarati e anos mais tarde entrou para sua guangue")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'http://pm1.narvii.com/7435/18d31ae3a1017dcfd3095e00232b36095d571c7ar1-640-624v2_uhq.jpg'>";

        }

        else if (nome.toLowerCase() == "hermes costello"){
            document.getElementById("h1").innerHTML = ("Hermes Costello")
            document.getElementById("td").innerHTML = ("Conheceu e ajudou Jolyne na prisão. Apesar de estar disposta a ajudar jolyne, tem seus proprios objetivos. Infelizmente passou grande parte de Stone ocean na enfermaria ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/474x/fc/56/83/fc5683cade5fb5158770aed7e2e32f61.jpg'>";

        }

        else if (nome.toLowerCase() == "foo fighters"){
            document.getElementById("h1").innerHTML = ("Foo Fighters")
            document.getElementById("td").innerHTML = ("A jobro de Jolyne, no começo trabalha para o whitesnake mas após lutar com a jolyne e ser poupada por ela, decidiu se juntar ao grupo")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/b/bc/Ffanime.jpg/revision/latest?cb=20210921120528&path-prefix=pt-br'>";

        }

        else if (nome.toLowerCase() == "weather report"){
            document.getElementById("h1").innerHTML = ("Weather Report")
            document.getElementById("td").innerHTML = ("Irmão de Pucci, foi roubado na maternidade.Quando cresceu teve um caso com sua irmã.Após alguns aconteimentos, teve sua memoria roubada e busca vingança contra seu irmão")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/c8/94/b8/c894b8d09be728a8c9d1bd3b4bbae4a8.jpg'>";

        }

        else if (nome.toLowerCase() == "narciso anasui"){
            document.getElementById("h1").innerHTML = ("Narciso Anasui ")
            document.getElementById("td").innerHTML = ("Foi preso por 'desmontar' sua namorada. Se apaixonou por Jolyne no instante em que a viu e esta disposto a fazer qualquer coisa por ela. Em sua primeira aparição no manga era uma mulher, mas mudou nos capitulos seguintes")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://images.8tracks.com/cover/i/012/408/854/tumblr_olh8caZ7ZL1rkd3u1o1_540-8215.png?rect=0,197,415,415&q=98&fm=jpg&fit=max&w=960&h=960'>";

        }

        else if (nome.toLowerCase() == "emporio alnino"){
            document.getElementById("h1").innerHTML = ("Emporio Alnino ")
            document.getElementById("td").innerHTML = ("Responsavel por alertar Jolyne dos problemas que estão por vir. Nasceu e cresceu na prisão, se escondendo em seu stand 'Burning Down the House' que é um quarto fantasma. Foi o responsavel pela vitoria dos herois na parte 6")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/originals/8b/ea/cd/8beacd080893981f266a7802ceee5401.jpg'>";

        }


        else if (nome.toLowerCase() == "gyro zeppeli"){
            document.getElementById("h1").innerHTML = ("Gyro Zeppeli")
            document.getElementById("td").innerHTML = ("No começo atua como o protagonista, tendo mais destaque do que o proprio jojo. Entrou na corrida para salvar uma criança da execução. Até certa parte do manga, não possui stand mas isso não o impede de ser um exelente lutador com suas 'stell balls'. ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/736x/21/c2/a1/21c2a18dfade216e57f0163a737da609.jpg'>";

        }

        else if (nome.toLowerCase() == "lucy steel"){
            document.getElementById("h1").innerHTML = ("Lucy Steel")
            document.getElementById("td").innerHTML = ("A versão alternativa de Erina Pendleton. Casada com Stephen Steel, se juntou aos protagonistas para derrotar o presidente e salvar seu marido das constantes ameaças. Retorna na parte 8 como uma idosa")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://64.media.tumblr.com/689fa653ae58d93ab620d2e2407a35a5/c19a7d8fece565fb-93/s1280x1920/84a14bdd08b76f7ae21d256ae79655356eefaa63.jpg'>";

        }


        else if (nome.toLowerCase() == "yasuho hirose"){
            document.getElementById("h1").innerHTML = ("Yasuho Hirose")
            document.getElementById("td").innerHTML = ("A jobro e interesse amoroso do josuke da parte 8. A jornada dos dois juntos começa quando ela o acha soterrado nas paredes oculares após o terremoto")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJV5LPhYtUrkJtFsTro_KlAfc910yR-ASJQ&usqp=CAU'>";

        }


        else if (nome.toLowerCase() == "joshu higashikata"){
            document.getElementById("h1").innerHTML = ("Joshu Higashikata")
            document.getElementById("td").innerHTML = ("Não importa o quanto tente, ele nunca vai ser um jobro")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://pm1.narvii.com/6958/403284957df784c0b3f254d18cce19354b810b74r1-320-320v2_hq.jpg'>";

        }

        else if (nome.toLowerCase() == "tsurugi higashikata"){
            document.getElementById("h1").innerHTML = ("Tsurugi Higashikata")
            document.getElementById("td").innerHTML = ("Filho de Jobin, esta em busca de uma cura para sua doença.Apesar de ser um menino, se veste como mulher para evitar uma maldição ")
            document.getElementById("img").innerHTML = "<img class='imgdp' src = 'https://i.pinimg.com/564x/04/a7/dd/04a7dd57598fbe2120f9dfa87defa27e.jpg'>";

        }


        else if (nome.toLowerCase() == "rai mamezuku" || nome.toLowerCase() =="mamezuku" || nome.toLowerCase() =="rai" || nome.toLowerCase == "rai mamezuku"){

            document.getElementById("h1").innerHTML = ("Rai Mamezuku")
            document.getElementById("td").innerHTML = ("O avaliador de plantas pessoal da familia higashikata, vive em um teleferico nas montanhas. É um personagem fundamental para o desenrolar da obra, ele é o responsavel por encontrar o ramo da rokakaka no jardim higashikata")
            document.getElementById("img").innerHTML = "<img class='imgdp' src='https://static.wikia.nocookie.net/jojo/images/3/31/Rai_infobox.jpg/revision/latest?cb=20210122172346&path-prefix=es'>";

        }


        

    else{
        document.getElementById("td").innerHTML = ("Jobro não encontrado!");
        document.getElementById("img").innerHTML = "<img class ='imgdp' src = 'https://i.pinimg.com/474x/9b/e7/93/9be7930083adfe193ed6818c9f4a7511.jpg'>";
        document.getElementById("h1").innerHTML = ("Erro!")
        alert("Erro! Jobro não encontrado :´(")
        
    }

    }

    function stand() {


       var stand =(document.getElementById("standname").value);

       if (stand == "Hermit Purple"){
        document.getElementById("td").innerHTML = ("Clarividência: A principal habilidade de Hermit Purple é criar imagens utilizando-se de objetos reais. Ao custo de uma máquina fotográfica, ele consegue tirar uma foto do que quer que Joseph queira ver, não importa onde esteja. Utilizando-se de uma TV, ele faz com que os canais passem rapidamente de forma a criar uma mensagem audível do que quer que Joseph queira saber. Ele também pode criar mapas a partir de areia e até mesmo ler a mente de alguém.");
        document.getElementById("td2").innerHTML = ("Transmissão de Hamon: Como Hermit Purple funciona como uma extensão do corpo de Joseph, ele consegue transmitir Hamon através do stand, podendo inclusive se enrolar no próprio stand criando assim uma barreira de Hamon pelo corpo.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/1/1e/Hermit.png/revision/latest?cb=20170420164045&path-prefix=pt-br'>";
       }

       else if (stand == "Star Platinum"){
        document.getElementById("td").innerHTML = ("Star Finger : Star Platinum usando Star Finger em Dark Blue Moon no mangá. Na Parte III: Stardust Crusaders, Jotaro usa a habilidade Star Finger diversas vezes. Esta Habilidade consiste em esticar seu dedo indicador e o dedo do meio, como se fosse uma lâmina. Ele usa essa habilidade pela primeira vez na batalha contra Dark Blue Moon, vencendo-o quando estica seus dedos e destrói o rosto do Stand, perfurando-o. Usa também na batalha contra Forever, o gorila. Jotaro também usa essa habilidade na luta contra Polnareff que está possuído pelo Stand Anubis. (Alguns dizem que essa habilidade é esquecida por Araki, porém, foi explicado no Mangá que algumas habilidades são inutilizadas depois de certo tempo.");
        document.getElementById("td2").innerHTML = ("Na Parte IV: Diamond is Unbreakable, uma distinção é feita na nomeação de Stand de Jotaro Star Platinum: The World (スタープラチナ・ザ・ワールド Sutā Purachina: Za Wārudo). Essa nova nomeação é feita em referência à The World, o Stand de DIO, vilão da parte 3, cujo poder era parar o tempo. Star Platinum: The World agora possui a mesma habilidade. Como é visto em JoJo, é necessário que o usuário pratique parar o tempo para que ele consiga parar o tempo... por mais tempo.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/1/19/Ddfs.png/revision/latest?cb=20170520195652&path-prefix=pt-br'>";
       }

       else if (stand == "Magician’s Red"){
        document.getElementById("td").innerHTML = ("Todos os poderes de Magician’s Red involvem manipulação de fogo. Não só ele é capaz de criar chamas artificiais que se movem de acordo com a vontade de Avdol, como ele também pode aumentar a temperatura ambiente..");
        document.getElementById("td2").innerHTML = ("")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/3/31/Red.png/revision/latest?cb=20170306180252&path-prefix=pt-br'>";
      }

      else if (stand == "Hierophant Green"){
        document.getElementById("td").innerHTML = ("Longo Alcançe: Hierophant Green pode se esticar por longas distâncias, sendo remotamente controlado por Kakyoin. Por isso ele não é fisicamente forte. Ele pode se esticar e desfazer rapidamente, tanto para atacar quanto para evitar dano.");
        document.getElementById("td2").innerHTML = ("Emerald Splash: A principal técnica decombate de Hierophant Green. Ele forma uma substância viscosa em suas mãos, que se solidifica em forma de esmeraldas, e então as dispara. Essa técnica possui longo alcance e dispersã")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://pa1.narvii.com/6400/cc3030ca9f74700f74651f06432e5bc4f8e6d5bc_hq.gif'>";
      }

      else if (stand == "Silver Chariot"){
        document.getElementById("td").innerHTML = ("Silver Chariot é um Stand muito poderoso focado em combate: Todas as suas habilidades são de natureza destrutiva ou tem como objetivo ajudar ele em combate. Ele é um Stand incrivelmente ágil, capaz de atacar inimigos com incontáveis ataques e cortes de espada antes do oponente conseguir reagir. Ele também pode usar sua agilidade junto com sua força para defender e refletir ataques direcionados contra seu usuário.");
        document.getElementById("td2").innerHTML = ("Armadura: Silver Chariot retira sua armadura.A habilidade mais estranha de Silver Chariot talvez seja sua veste medieval pesada. Essa armadura diminui a velocidade de Chariot, mas também impede que ele seja machucado, já que Polnareff não recebe o mesmo dano que a armadura recebe. A armadura se mostra capaz de agüentar grandes temperaturas sem derreter. A retirada dessa armadura, além de deixar seu Stand mais veloz, também dá a Polnareff a habilidade de ver através dos olhos de seu Stand.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://media.tenor.com/jP_IG5gFrrUAAAAC/silver-chariot-polnareff.gif'>";
      }

      else if (stand == "The Fool"){
        document.getElementById("td").innerHTML = ("Controle sobre areia: O Louco possui controle sobre areia. Apesar de simples, isso o torna um Stand bastante versátil, podendo assumir diversas formas dependendo da necessidade, assim como alterar sua densidade. Por ser composto de areia, é praticamente impossível causar dano a ele..");
        document.getElementById("td2").innerHTML = ("")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://static.wikia.nocookie.net/powerlisting/images/3/3b/Iggy%27s_The_Fool_JoJo.gif/revision/latest?cb=20190607205855'>";
      }


      else if (stand == "The World/Za Warudo"){
        document.getElementById("td").innerHTML = ("The World é um stand de curto alcance excepcionalmente poderoso, tem uma manifestação máxima de alcance de 10m. Apesar de exigir uma distância próxima para atacar, é incrivelmente difícil de parar uma vez dentro do alcance mencionado acima.");
        document.getElementById("td2").innerHTML = ("Parar o Tempo: A chave de poder que define The World é a sua capacidade de parar o tempo, permitindo apenas a si mesmo e Dio para agir dentro do período de tempo parado. Dado o estado enfraquecido de Dio durante a Parte III, essa habilidade só funciona em alguns segundos no sistema de referência de Dio antes que o tempo flua novamente. No entanto, também devido à imortalidade de Dio, a duração do tempo parado também aumenta à medida que Dio se torna mais acostumado para The World, atingindo um máximo de 11 segundos em toda a história. Se ele não tivesse morrido, o comprimento teria continuado a crescer.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://i.kym-cdn.com/photos/images/newsfeed/000/974/016/6e6.gif'>";
      }


      else if (stand == "Crazy Diamond"){

        document.getElementById("td").innerHTML = ("Crazy Diamond possui o poder de restaurar objetos quebrados e curar feridas de qualquer ser vivo, independente da gravidade do dano; restaura o objeto ao seu primeiro estado, devolvendo forma e componentes originais. Ele também pode recolocar membros decepados e recompor uma pessoa completamente enquanto ela estiver viva. Porém, Josuke não pode utilizar da habilidade em si mesmo; o temperamento dele pode alterar a eficácia da restauração, deixando-a distorcida de alguma maneira.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'http://pa1.narvii.com/6772/186ea22cb89656c91428a813ada030723834f42b_00.gif'>";
        document.getElementById("td2").innerHTML = ("") 
        document.getElementById("td3").innerHTML = ("")
    }
      else if (stand == "The Hand"){

        document.getElementById("td").innerHTML = ("A Mão do The Hand possui o poder de eliminar espaço e tempo. Toda vez que ele ataca com sua mão direita, ele elimina o espaço onde o corte foi feito. Qualquer coisa atingida pelo ataque é apagado imediatamente (da mesma maneira que Cream) The hand pode utilizar essa técnica não só para atacar diretamente, como também para eliminar o ar a sua frente, o que permite a ele atrair objetos ou seus oponentes para si assim como se teletransportar. Além de sua habilidade The Hand também é bastante forte fisicamente.")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'http://pa1.narvii.com/6772/186ea22cb89656c91428a813ada030723834f42b_00.gif'>";
        document.getElementById("td2").innerHTML = ("") 
        document.getElementById("td3").innerHTML = ("")
    }
      else if (stand == "Echoes"){

        document.getElementById("td").innerHTML = ("Ato 1, Criação de Sons: Ato 1 tem o poder de escrever sons, sejam onomatopéias ou frases, em objetos ou pessoas. Esses sons então passam a se repetir, com seu volume aumentando com o tempo. Ele pode criar vários sons ao mesmo tempo. Ato 1 possui longo alcance. A sonoridade de suas Palavras")
        document.getElementById("td2").innerHTML = ("Ato 2 tem o poder de transformar a ponta de sua cauda em um som sólido, que então pode ser colocado em qualquer objeto. Encostar no som causa o efeito representado pelo som. Ato 2 possui longo alcance e também é bastante rápido. O significado de suas palavras") 
        document.getElementById("td3").innerHTML = ("Ato 3, Paralisação: Ato 3 tem o poder de paralisar um objeto ou pessoa. Ao desferir uma série de socos no alvo, ele se torna extremamente pesado, incapaz de se mover. Seu alcance é de apenas dois metros. A potência de suas palavras")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'http://pa1.narvii.com/6772/186ea22cb89656c91428a813ada030723834f42b_00.gif'>";
      }
      else if (stand == "Heaven's Door"){

        document.getElementById("td").innerHTML = ("Leitura de Memória: Uma vez que alguém olhe para o desenho do stand, essa pessoa é transformada em um livro humano. As páginas contém todas as memórias dessa pessoa, que Rohan pode ler livremente. Rohan pode remover tais páginas, fazendo com que a pessoa perca as memórias contidas na página, assim como perder peso. Rohan também pode escrever novas memórias na pessoa, assim como comandos. Uma vez o poder desativado, a pessoa irá seguir o comando escrito nela inquestionavelmente.")
        document.getElementById("td2").innerHTML = ("Heaven's Door também garante a Rohan a habilidade de desenhar em velocidades incalculáveis, posicionando cada gota de tinta precisamente sobre o papel para formar uma imagem.        ") 
        document.getElementById("td3").innerHTML = ("")
        document.getElementById("img").innerHTML = "<img class = 'imgdp' src = 'https://static.wikia.nocookie.net/jjba/images/e/e0/Rfs.png/revision/latest?cb=20170520200420&path-prefix=pt-br'>";
      }

       else{
        document.getElementById("td").innerHTML = ("Selecione um stand!")
        document.getElementById("td2").innerHTML = ("") 
        document.getElementById("td3").innerHTML = ("")
        document.getElementById("img").innerHTML = ("")
       }

    }
    //"<img class = 'imgdp' src = ''>";