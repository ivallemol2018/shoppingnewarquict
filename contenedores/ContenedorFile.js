const fs = require('fs')

class ContenedorFile{

  constructor(filename){
    this.filename = filename;
  }

  async write(items){
    try{
      if(items instanceof Array){
        await fs.promises.writeFile(this.filename,JSON.stringify(items))
        return
      }
    }
    catch(err){
      console.log(`error try saved ${this.filename} - description error :  ${error}`)
    }
  }
  
  async read(){
    try{
      const data = await fs.promises.readFile(this.filename, 'utf-8');
      return   data  ? JSON.parse(data) : [];
    }
    catch(err){
      if(err.code === 'ENOENT'){
        return [];
      }else{
        console.log(`error trying read file ${this.filename}`)
      }
    }
  }

  getMaxId(items){
    const length = items.length;

    if(length < 1) return 1

    return items[length-1].id + 1;
  }  

  async getAll(){
    return await this.read();
  }

  async deleteById(id) {
    const items = await this.read();
    const idx = items.findIndex(p => p.id == id) 
    items.splice(idx , 1)

    await this.write(items)
  }

  async deleteAll() {
    await this.write([])
  }  

  async getById(id){
    const items = await this.read();
    return items.find(p => p.id == id)
  }

  async save(item){
    const timestamp = new Date(Date.now()).toLocaleDateString() + " " + new Date(Date.now()).toLocaleTimeString();
    const items = await this.read();
    let newItem;

    if(typeof item.id === 'undefined'){
      const id = this.getMaxId(items);
      newItem = {id,timestamp,...item}
      items.push({id,timestamp,...item});
      await this.write(items);
    }else{  
      const idx = items.findIndex(p => p.id == item.id) 
      newItem =  item;
      items.splice(idx , 1, newItem)
      
      await this.write(items);
    }  
    return newItem;
  }

  async update(item){
    const timestamp = new Date(Date.now()).toLocaleDateString() + " " + new Date(Date.now()).toLocaleTimeString();
    const items = await this.read();
    let newItem;

    if(typeof item.id === 'undefined'){
      const id = this.getMaxId(items);
      newItem = {id,timestamp,...item}
      items.push({id,timestamp,...item});
      await this.write(items);
    }else{  
      const idx = items.findIndex(p => p.id == item.id) 
      newItem =  item;
      items.splice(idx , 1, newItem)
      
      await this.write(items);
    }  
    return newItem;
  }  

}

module.exports = ContenedorFile;