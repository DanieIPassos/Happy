const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-10.9159906",
    lng: "-37.0996967",
    name: "Lar de amor",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9829828981",
    images: [
      "https://source.unsplash.com/daily",
      "https://source.unsplash.com/daily"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1"
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')

  //deletar dados da tabela
  //await db.run("DELETE FROM orphanages FROM WHERE id = '4'")
})
