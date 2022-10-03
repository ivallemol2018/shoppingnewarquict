
class DBClient {
    async connect(){
        throw new Error('NO DB Client configured')
    }

    async disconnect(){
        throw new Error('NO DB Client configured')
    }
}

module.exports = DBClient