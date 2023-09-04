import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem  from "../data/items.json";
import { currency } from "../utilities/formateCurrencey";
type CartItemsProps = {
    id : number
    quantity : number
}

export function CartItem({id, quantity}: CartItemsProps){
  const {removeCartQuantity } = useShoppingCart();
  const item = storeItem.find(i=> i.id === id)
  if(item == null) return null;
  return(
    <Stack direction="horizontal" 
    gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl}
        style={{width:"125px", height: "75px", objectFit: "contain"}}
        />
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1 && <span 
                className="text-muted"
                style={{fontSize: ".65rem"}}
                >x{quantity}</span>}
            </div>
            <div className="text-muted"
            style={{fontSize: ".75rem"}}>
                {currency(item.price)}
            </div>
        </div>
        <div>
            {currency(item.price * quantity )}
        </div>
        <Button variant="outline-danger" size="sm"
        onClick={()=> removeCartQuantity(item.id)}>&times;</Button>

    </Stack>

  )
}
