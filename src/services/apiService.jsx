export const chamadaAPI = async () => {
    try {
        const resposta = await fetch('https://raw.githubusercontent.com/allessandrogomes/jornada-do-heroi/main/herois.json')

        if (!resposta.ok) {
            throw new Error('Erro ao obter dados da API')
        }

        const dados = await resposta.json()

        if (Array.isArray(dados)) {

            const dadosHerois = dados.map(item => {
                const poderTotal = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat;

                return {
                    id: item.id,
                    nome: item.name,
                    imagem: item.images.sm,
                    status: item.powerstats,
                    poderTotal: poderTotal,
                    corDaCarta: poderTotal < 200 ? '#474747' : poderTotal < 300 ? '#056305' : poderTotal < 400 ? '#c0b10c' : poderTotal < 500 ? '#8822d1' : '#880228',
                    selecionado: false
                }
            })

            return dadosHerois
        }

        return dados
    } catch (error) {
        console.error('Erro na chamada da API', error)
        throw error
    }
}
