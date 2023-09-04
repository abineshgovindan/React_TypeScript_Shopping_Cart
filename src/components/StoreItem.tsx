import {Card, Button} from "react-bootstrap"
import { currency } from "../utilities/formateCurrencey"
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemsProp = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
  
}
export function StoreItem({id, name, price, imgUrl}:StoreItemsProp){
    const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartQuantity} = useShoppingCart();
    const quantity =  getItemsQuantity(id);
    return <Card className="h-100">
        <Card.Img
        variant = "top"
        src={imgUrl}
        height="300px"
        style={{objectFit:"contain"}}
        
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex
            justify-content-between align-items-baseline
            mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{currency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity===0? <Button className="w-100"
                onClick={()=> increaseCartQuantity(id)}
                >Add to Cart 
                    </Button>: 
                    <div className="d-flex align-items-center 
                     flex-column" style={{gap:".5rem"}}>
                        <div className="d-flex align-items-center
                        justify-content-center"style={{gap:".5rem"}}>
                            <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                            <div>
                            <span className="fs-3">{quantity}</span>
                            in Cart
                            </div>
                            <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm"
                        onClick={()=> removeCartQuantity(id)}
                        >Remove</Button>
                    </div>}


            </div>
            
        </Card.Body>
        
       
    </Card>
}