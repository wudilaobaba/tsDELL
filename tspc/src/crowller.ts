import superagent from 'superagent';
// ts -- .d.ts --js // ts文件中引入js文件，需要有一个对应的.d.ts文件做翻译

class Crowller{
  private secret = 'x3b174jsx';
  private url = `http://dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = '';
  async getRawHtml(){
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
    
  }
  constructor(){
    this.getRawHtml();
    
  }
}

const crowller = new Crowller();