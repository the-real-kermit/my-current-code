module.exports = client => {
    console.log(`Discord Bot  /--/ ${client.user.tag} /--/  is online!`); 
    client.user.setActivity(`Type | m-help`, { type: "PLAYING"})
    
}

