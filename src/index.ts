/** Pixi application boilerplate
 *  Jimy Houlbrook
 *  16/11/23
 */

import * as PIXI from 'pixi.js';

export default class Application {

    private app : PIXI.Application;

    private velocity;

    constructor(){
        this.app = new PIXI.Application<HTMLCanvasElement>({
            height: 720,
            width: 1080,
            backgroundColor: 0x000000,
            hello: true,
            resizeTo: window,
            view: <HTMLCanvasElement>document.getElementById('pixi')
        });

        this.velocity = {
            x: 1,
            y: 1
        };

        const textStyle : PIXI.TextStyle = new PIXI.TextStyle({
            fill: "#c09947",
            fontFamily: 'Arial',
            fontSize: 120,
            align: 'left',
            lineJoin: "round",
            stroke: "#694329",
            strokeThickness: 20              
        });


        const text : PIXI.Text = new PIXI.Text("Bounce", textStyle);
        text.anchor.set(0.5);
        text.position.set(this.app.view.width / 2, this.app.view.height / 4);
        this.app.stage.addChild(text);

        this.app.ticker.add( () => this.delta(text));
    }

    delta(text: PIXI.Text){
        text.x += this.velocity.x;
        text.y += this.velocity.y;

        if(
            text.x + text.width / 2 >= this.app.view.width ||
            text.x - text.width / 2 <= 0
        ){
            this.velocity.x *= -1;
        } else if (
            text.y + text.height / 4 >= this.app.view.height ||
            text.y - text.height / 4 <= 0
        ){
            this.velocity.y *= -1
        }
    }
}

window.addEventListener('DOMContentLoaded', () => new Application);
