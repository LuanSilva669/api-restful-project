const mongoose = require("mongoose")

async function main() {

    try{
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://luanfuria:uyKQuiZYeT7DQJfO@cluster0.fwlffbo.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("conectado ao banco!")
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;
