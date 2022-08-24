import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  public cartItemList: any=[]
  public productList = new BehaviorSubject<any>([]) ;
  public search = new BehaviorSubject<string>(""); 

  constructor() { }
  getProducts() {
     return this.productList.asObservable();
    
  }
  setProducts(product:any){
  this.cartItemList.push(product);
  this.productList.next(product);
  }
  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.TotalPrice();
    console.log(this.cartItemList);
  }
  TotalPrice() : number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total *a.quantity;
    })
    return grandTotal;
  }
removeCartItem(product:any){
  this.cartItemList.map((a:any , index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1)
    }
  })
  this.productList.next(this.cartItemList);
}

removeAllCart(){
  this.cartItemList =[];
  this.productList.next(this.cartItemList);
}
inc(item:any){
// console.log(item);
item.quantity+=1;
}
dec(item:any) {
  if(item.quantity!=1){  // console.log(item);
item.quantity-=1;
}



}



  playstore=[
    {
      
      image: 'assets/images/barbell set.jpg',
      section: "gym",
      id: 1,
      name: 'Barbell',
      desc: 'The best muscle increaser',
      price: '700',
    },
    {
      
      image: 'assets/images/dumbellsets.png',
      section: "gym",
      id: 2,
      name: 'Dumbellsets',
      desc: 'Good to improve muscles',
      price: '500',
    },
    {
      
      image: 'assets/images/grip.jpg',
      section: 'gym',
      id: 3,
      name: 'Grips',
      desc: 'Enhances muscle power',
      price: '200',
    },
    {
      
      image: "../image/punchbag.jpg",
      section: 'gym',
      id: 4,
      name: 'punchbag',
      desc: 'Good for wrestlers and boxers',
      price: '1200',
    },
       {
    image: "../image/row-machine.jpg",
    section: 'gym',
    id: 5,
    name: "Row-machine",
    desc: 'For hand-power and muscle power',
    price: '1200',
  },
  {
      
    image: "../image/spinbike.jpg",
    section: 'gym',
    id: 6,
    name: "Spinbike",
    desc: "Boosts your stamina and cardio capacity",
    price: '1200',
  },

    {
      
      image: "../image/elliptical.jpg",
      section: 'gym',
      id: 7,
      name: 'Ellipticals',
      desc: 'Boosts your stamina and cardio capacity.',
      price: '5000',
    },
    {
      
      image: "../image/treadmill.jpg",
      section: 'gym',
      id: 8,
      name: "Tredmill",
      desc: "It's great for heart,lungs & builds power and endurance.",
      price: '1200',
    },
    {
      
      image: "../image/treadmill.jpg",
      section: 'gym',
      id: 8,
      name: "Tredmill",
      desc: "It's great for heart,lungs & builds power and endurance.",
      price: '1200',
    },
    {
      
      image: "../image/treadmill.jpg",
      section: 'gym',
      id: 8,
      name: "Tredmill",
      desc: "It's great for heart,lungs & builds power and endurance.",
      price: '1200',
    },

    {
 image:'assets/images/ckit.png',
  section:'outdoor',
  id:11,
  name:'cricketkit',
  description:'the complete cricket kit for the player',
  price:"10000",
},
{
image:'assets/images/vball.png',
section:'outdoor',
id:12,
name:'volleyball',
description:'hit me hard yar',
price:800,
},
{
image:'assets/images/vbn.jpg',
section:'outdoor',
id:13,
name:'volleyballnet',
description:'synthetic fibered net which lasts long',
price:500,   
},
{
  image:'assets/images/basball.jpg',
  section:'outdoor',
  id:14,
  name:'basketball',
  description:'hard to dribble but good to get points',
  price:1000,
},
{
  image:'assets/images/cricketbats.png',
  section:'outdoor',
  id:15,
  name:'cricketbats',
  description:'best bats for best players',
  price:1500, 
},
{
  image:'assets/images/shuttlebat.jpg',
  section:'outdoor',
  id:16,
  name:'shuttlebat',
  description:'strings which are as powerfull as your nerves',
  price:700,
},
{
  image:'assets/images/fscocks.jpg',
  section:'outdoor',
  id:17,
  name:'feathercocks',
  description:'fights with the air adn never ending partner',
  price:50,
},
{
  image:'assets/images/fscocks.jpg',
  section:'outdoor',
  id:18,
  name:'feathercocks',
  description:'fights with the air adn never ending partner',
  price:50,
},
{
  image:'assets/images/fscocks.jpg',
  section:'outdoor',
  id:19,
  name:'feathercocks',
  description:'fights with the air adn never ending partner',
  price:50,
},
{
  image:'assets/images/fscocks.jpg',
  section:'outdoor',
  id:20,
  name:'feathercocks',
  description:'fights with the air adn never ending partner',
  price:50,
},
{
  image:'assets/images/ludo.webp',
  section:'indoor',
  id:21,
  name:'Ludo',
  description:'Unites everyone',
  price:50,
},
{
  image:'assets/images/snake-ladder.jpg',
  section:'indoor',
  id:22,
  name:'snake-ladder',
  description:'have fun with your friends',
  price:500,
},
{
  image:'assets/images/uno.jpg',
  section:'indoor',
  id:23,
  name:'uno cards',
  description:'have fun and take revenge on your friend',
  price:50,
},
{
  image:'assets/images/darts.png',
  section:'indoor',
  id:24,
  name:'darts',
  description:'keeps your mind work faster',
  price:50,
},
{
  image:'assets/images/chess.jpg',
  section:'indoor',
  id:25,
  name:'chess',
  description:'improves  your thinking power in critical situations',
  price:50,
},
{
  image:'assets/images/caroms.jpg',
  section:'indoor',
  id:26,
  name:'caromboard',
  description:'improves your motor skills',
  price:50,
},
{
  image:'assets/images/bussiness.jpg',
  section:'indoor',
  id:27,
  name:'bussiness',
  description:'keeps everyone busy ',
  price:50,
},
{
  image:'assets/images/bussiness.jpg',
  section:'indoor',
  id:28,
  name:'bussiness',
  description:'keeps everyone busy ',
  price:50,
},
{
  image:'assets/images/bussiness.jpg',
  section:'indoor',
  id:29,
  name:'bussiness',
  description:'keeps everyone busy ',
  price:50,
},
{
  image:'assets/images/bussiness.jpg',
  section:'indoor',
  id:30,
  name:'bussiness',
  description:'keeps everyone busy ',
  price:50,
},
{
  image:'assets/images/powerade.png',
  section:'drinks',
  id:31,
  name:'powerdrink',
  description:'cautious for your health',
  price:500,
},
{
  image:'assets/images/ccnut.webp',
  section:'drinks',
  id:32,
  name:'cocconut water',
  description:'natural drinks',
  price:150,
},
{
  image:'assets/images/gatorade.webp',
  section:'drinks',
  id:33,
  name:'gatoride',
  description:'powerfull drink for powerfull people',
  price:1000,
},
{
  image:'assets/images/combopack.jfif',
  section:'drinks',
  id:34,
  name:'different drinks combo',
  description:'combopack of energy',
  price:2000,
},
{
  image:'assets/images/bdy.png',
  section:'drinks',
  id:35,
  name:'Bodyarmor',
  description:'best drink for strength',
  price:1500,
},
{
  image:'assets/images/proshake.jfif',
  section:'drinks',
  id:36,
  name:'proteinshek',
  description:'powerfull proteins help you work more',
  price:2000,
},
{
  image:'assets/images/oceandrink.webp',
  section:'drinks',
  id:37,
  name:'oceandrink',
  description:'instant energy giver',
  price:900,
},
{
  image:'assets/images/oceandrink.webp',
  section:'drinks',
  id:38,
  name:'oceandrink',
  description:'instant energy giver',
  price:900,
},
{
  image:'assets/images/oceandrink.webp',
  section:'drinks',
  id:39,
  name:'oceandrink',
  description:'instant energy giver',
  price:900,
},
{
  image:'assets/images/oceandrink.webp',
  section:'drinks',
  id:40,
  name:'oceandrink',
  description:'instant energy giver',
  price:900,
}

]
}