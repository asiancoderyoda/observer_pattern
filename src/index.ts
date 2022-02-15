import { CorporateCustomer, RegularCustomer } from "./Customer";
import { Warehouse } from "./Warehouse";


const happyWarehouse = new Warehouse();

const Ibm = new CorporateCustomer();
const McDonalds = new CorporateCustomer();
const ZNews = new CorporateCustomer();

const John = new RegularCustomer();
const Daniel = new RegularCustomer();
const Maria = new RegularCustomer();

happyWarehouse.attach(Ibm);
happyWarehouse.attach(McDonalds);
happyWarehouse.attach(ZNews);

happyWarehouse.attach(John);
happyWarehouse.attach(Daniel);
happyWarehouse.attach(Maria);

let counter = 0;
const id = setInterval(() => {
  const news = Math.round(Math.random());
  console.log(`${news === 0? 'Corporate' : 'Product'} news showUpdate:`);
  switch(news) {
    case 0:
      happyWarehouse.updateCorporatePrice(100);
      break;
    case 1: 
      happyWarehouse.updateRegularPrice(80);
      break;
    default:
      console.log("impossible!");
  }
  if(counter === 2) {
    happyWarehouse.detach(Ibm);
    happyWarehouse.detach(John);
    happyWarehouse.detach(Maria);
  }
  if(counter === 3) {
    happyWarehouse.detach(McDonalds);
  }
  if(counter > 4) {
    clearInterval(id);
  }
  counter += 1;
}, 3000)