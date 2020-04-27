import { Injectable } from '@angular/core';
// import { Z_FILTERED } from 'zlib';

export interface Description{
  name:string,
  text:string,
  price:number,
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class ColorChoiceService {
  firstImage:string = "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjYxODUyNjQ4MjcxMzQxZWViMDA5YWQ0YWM0NDBjNGZhLnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=469db844d4f6faab5447c350990859ad3a665820cf655b4a62dd21064a57b5d2";
  menuImage:string = "/assets/images/menu.png";
  underMenuImage:string = "/assets/images/menu-2.png";
  basket:string = "/assets/images/basket.png";
  basketWhite:string = "/assets/images/basket-2.png";
  iconMenu:boolean = true;
  showBar:boolean = false;
  changeButton:boolean = true;
  // darkOn:boolean = false;
  darkTeamOn:boolean = false;
  background:string = 'black';
  description:Description;
  bool:boolean = false;
  product:number = 0;
  phone:string = "/assets/images/phone.png";
  gmail:string = "/assets/images/gmail.png";
  quantity:number;
  index:boolean = true;
  counterOne:number = 0;
  counterTwo:number = 0;
  counterThree:number = 0;


  // options:string[];


  descriptionOne = {
    name: 'Jack Daniels',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Quasi nam expedita quisquam eos maiores vitae eum laborum accusantium natus et exercitationem laboriosam sapiente debitis voluptatum sunt necessitatibushic facilis autem asperiores amet tenetur minus? Excepturi distinctio Cumque perferendis eveniet soluta',
    price: 3000,
    quantity:1
  }

  descriptionTwo = {
    name: 'Johnnie Walker',
    text: 'Lorem ipsum dolor vitae eum laborum accusantium natus et exercitationem laboriosam sapiente debitis voluptatum sunt necessitatibushic facilis autem asperiores amet tenetur minus? Excepturi distinctio Cumque perferendis eveniet soluta',
    price: 3500,
    quantity:1
  }
  descriptionThree = {
    name: 'Black and White',
    text: 'Lorem ipsum dolor vitae eum laborum accusantium natus et exercitationem laboriosam sapiente debitis voluptatum sunt  dolor vitae eum laborum accusantium natus et exercitationem laboriosamnecessitatibushic facilis dolor vitae eum laborum accusantium natus et  dolor vitae eum laborum accusantium natus et exercitationem laboriosamexercitationem laboriosam autem asperiores amet tenetur minus? Excepturi distinctio Cumque perferendis eveniet soluta',
    price: 5500,
    quantity:1
  }


  descriptionAll = [];
  


  constructor() { }

  showInfo(Wisckey){
    this.bool = !this.bool;
      if(Wisckey == 'jack'){
        this.description = this.descriptionOne;
        // this.quantity = 1;
        }else if(Wisckey == 'john'){
          this.description = this.descriptionTwo;
          // this.quantity = 1;
      }else{
        this.description = this.descriptionThree;
      // this.description.quantity++;
      // console.log(this.description.quantity)
      }
        }
         
        
      
  addProduct(option){
    this.product++;
    this.descriptionAll.unshift(option); 
    this.index = false;


    for(let i = 0; i < this.descriptionAll.length; i++){
     
      if(option == this.descriptionOne){
        this.counterOne++;
        this.descriptionOne.quantity = this.counterOne;
      }else if(option == this.descriptionTwo){
        this.counterTwo++;
        this.descriptionTwo.quantity = this.counterTwo;
      }else{
        this.counterThree++;
        this.descriptionThree.quantity = this.counterThree;
      }

      if(this.descriptionAll.length > 1){
        for(let g = 1; g < this.descriptionAll.length; g++){


          if(this.descriptionAll[g] === this.descriptionAll[0]){
                this.descriptionAll.splice(this.descriptionAll[0],1);
            
          }else{}
        }
      }else{}

      return false;
    }

      }
      deleteProduct(opt){
        for(let i = 0; i < this.descriptionAll.length; i++){
        // this.descriptionAll.splice(i,1);
        if(this.descriptionAll[i] == opt){
          this.descriptionAll.splice(i,1);
        }
        if(this.descriptionAll.length === 0){
          this.index = true;
        }
    
        }
        if(opt == this.descriptionOne){
         this.product = this.product - this.counterOne;
         this.counterOne = 0;
        }else if(opt == this.descriptionTwo){
          this.product = this.product - this.counterTwo;
          this.counterTwo = 0;
        }else{
          this.product = this.product - this.counterThree;
          this.counterThree = 0;
        }
      }
    
     
}
