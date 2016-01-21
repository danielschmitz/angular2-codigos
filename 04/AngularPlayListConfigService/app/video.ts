export class Video{
    id:number;
    title:string;
    url:string;
    desc:string;
    constructor(id:number,title:string,url?:string,desc?:string){
        this.id=id;
        this.title=title;
        this.url=url;
        this.desc=desc;
    }
}