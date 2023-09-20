import { Application } from 'pixi.js';

export default class Main{
    private app : Application;

    constructor(){
        this.app = new Application<HTMLCanvasElement>({
            height: 500,
            width: 500,
            hello: true,
            view: <HTMLCanvasElement>document.getElementById("pixi")
        });
    }
}