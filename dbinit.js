import { Surreal } from "surrealdb.js";

const websites = [
    { publicUrl: 'http://localhost:5173', pageUrl: '/coffedahl', name: 'Coffe Dahl', imgUrl: '' },
    { publicUrl: '', pageUrl: '/jdtek', name: 'JDTEK', imgUrl: '' },
    { publicUrl: 'https://www.madittbasta.se', pageUrl: '/madittbasta', name: 'Må ditt bästa', imgUrl: '/images/madittbasta.png' },
    { publicUrl: 'https://kjell.coffedahl.com', pageUrl: '/opensp', name: 'Open SP', imgUrl: '/images/open-sp.png' }
]

const db = new Surreal('http://localhost:8000/rpc')
await db.signin({ user: 'root', pass: 'root' })
await db.use('test', 'test')
await db.query('CREATE user:coffedahl SET username = "coffedahl", firstName = "christoffer", lastName = "dahl", password = "test";')

websites.forEach(async website => {
    console.log(website.name)
    const response = await db.query('CREATE $website SET publicUrl = $publicUrl, pageUrl = $pageUrl, name = $name, imgUrl = $imgUrl;', {
        website: 'website:' + website.pageUrl.split('/')[1],
        pageUrl: website.pageUrl,
        publicUrl: website.publicUrl,
        name: website.name,
        imgUrl: website.imgUrl
    })
    console.log(JSON.stringify(response))
})

await db.query('CREATE featured:website SET website = $website;', { website: 'website:opensp' })
