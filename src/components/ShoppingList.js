import Product from "./Product"
/*import {useState} from "react"*/

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList,filter,setFilter} = props
 
    const handleInputChange = (event) => {
        setFilter(event.target.value)
    }
    const filteredShopping =shopping.filter (el => el.startWord)
  
  return(
  <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.lentgh}) :</h2> 
          
          <div className="input-group mb-3">
              <span role="img" aria-label="search" className="input-group-text">
                  🔎
        </span>
              <input
                  type="search"
                  placeholder="Rechercher dans votre liste des courses ..."
                  aria-label="Chercher"
                  className="form-control"
                  onChange={handleInputChange}
              /> 
          </div>
                {filter && (
                  <p className="d-flex justify-content-between">
                      <span>
                          Produits qui commencent par <i>{filter}</i>
                      </span>
                      <button
                          className="btn btn-light btn-sm"
                          onClick={() => setFilter("")}
                      >
                      <span role="img" aria-hidden>
                              🔄
            </span>{" "}
            Réinitialiser
                    </button>
                  </p>
              )}

    <ol className="list-group mb-3 shadow">
        {filteredShopping.map((product) => {
        
         return (
            <li key={product} class="list-group-item">
                <Product 
                product={product} 
                removeFromShoppingList ={removeFromShoppingList}/>
            </li>
        )
 } )}
          
     </ol>
</>
) 
}


export default ShoppingList