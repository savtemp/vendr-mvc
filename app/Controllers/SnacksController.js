import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks(){
    let snacks = ProxyState.snacks
    console.log('drawing snacks', snacks);
    let template = ''
    snacks.forEach(s => template += s.snackTemplate)
    document.getElementById('snacks').innerHTML = template
}

function _drawOrders(){
    let orders = ProxyState.orders
    console.log('drawing orders', orders);
}





export class SnacksController{
    constructor(){
        console.log('Snacks Controller loaded');
        _drawSnacks()
        ProxyState.on('orders', _drawOrders)
        // _orderSnack()
    }
    orderSnack(selectedSnack){
        snacksService.orderSnack(selectedSnack)
    }
    
}