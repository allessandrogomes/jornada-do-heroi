# Jornada do Herói
![hero-icon](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/cdb5ea92-1dc2-43a2-8e37-11db9b0e9195)

# O que é Jornada do Herói?
Trata-se de um desafio Front End fornecido pela Azapfy, uma aplicação de "jogo" envolvendo cartas de diversos heróis. Os usuários têm a capacidade de selecionar dois heróis e, em seguida, a aplicação exibe uma tela revelando o vencedor do confronto. Explore a diversidade dos seus heróis favoritos enquanto eles se enfrentam em batalhas emocionantes!

![Status do projeto](https://img.shields.io/badge/STATUS-FINALIZADO-green)

# Índice

- [Como jogar](#como-jogar)
- [Empate](#empate)
- [Filtragem](#filtragem)
- [Lazy Loading](#lazy-loading)
- [Responsividade](#responsividade)
- [Acesso ao Projeto](#file_folder-acesso-ao-projeto)
- [Tecnologias utilizadas](#heavy_check_mark-tecnologias-utilizadas)
- [Autor](#autor)

# Como jogar
O jogo é bem simples, basicamente você precisa selecionar duas cartas de heróis para efetuar um duelo entre eles. Após isso, será aberta uma nova tela mostrando os status dos heróis que são:
- Inteligência
- Força
- Velocidade
- Durabilidade
- Poder
- Combate

O vencedor final será o que obtiver o maior valor do somatório dessas habilidades

![Duelo](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/aeee8f9d-5f30-47b3-b249-a958b85f7944)

# Empate
Existe também a possibilidade de dar empate, visto que alguns heróis tem os mesmo níveis totais de habilidade. Diante disso, também está implementada a lógica de empate em caso de poder total ser igual.

![Empate](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/5f05c471-a554-429f-8ad5-a802bae11fc6)

# Filtragem
O game conta também um campo de filtragem para melhor auxiliar o usuário, indo diretamente à aquele herói que deseja, sem precisar procurar manualmente.

![Filtragem](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/98e23221-378e-4db2-9a0c-3a73eea41adb)

# Lazy Loading
Visto que existem mais de 400 heróis, foi implementada a funcionalidade do Lazy Loading que carrega as cartas dos heróis de acordo com a rolagem da página. Portanto, o desempenho da página será preservado sendo carregado somente o necessário.

![Lazy Loading](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/10b7b836-1139-4e0e-8126-7a82b2edb747)

# Responsividade
O projeto é totalmente responsivo, sendo possível utilizar nas versões Mobile, Tablet, Laptop e Desktop. Com o auxílio do Material UI podemos aproveitar um Menu Responsivo para Tablets e Smartphones.

![Responsividade](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/bb702db0-101b-4912-a5c1-e21617ce4d4e)

# :file_folder: Acesso ao Projeto

<h3>Faça a clonagem do Projeto</h3>

```
git clone https://github.com/allessandrogomes/jornada-do-heroi.git
```

<h3>Instale as dependências</h3>

```
npm install
```

<h3>Rode o Projeto</h3>

```
npm run dev
```

<h3>Ou pode acessar também o link</h3>

```![Duelo](https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/22225836-5c18-4345-bea6-18a7bb5605b8)

https://jornada-do-heroi-allessandrogomes.vercel.app/
```

# :heavy_check_mark: Tecnologias utilizadas

- ``React``
- ``TailwindCSS``
- ``Material UI``
- ``FetchAPI``
- ``React Context``

# Autor

| [<img loading="lazy" src="https://github.com/allessandrogomes.png" width=115><br><sub>Alessandro Gomes</sub>](https://github.com/allessandrogomes) |
| :---: |
