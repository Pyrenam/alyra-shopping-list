
const AddPopularProduct = (props) =>{
  const populars = [
    { text: "pain", emoji: "🥖" },
    { text: "lait", emoji: "🥛" },
    { text: "pizza", emoji: "🍕" },
    { text: "salade", emoji: "🥬" },
    { text: "oranges", emoji: "🍊" },
  ]
  const {shopping,addToShoppinList} = props 
  return (
  <section>
    <h3 class="h5">Avez vous besoin de ?</h3>
    <div class="mb-3 d-flex flex-wrap align-items-center">
      {populars.map(el=> {
        return (
        <button key={el.text}
          className="btn btn-outline-success me-2 mb-2 d-flex align-items-center"
          disabled ={shopping.includes (el.text)}
          onClick = {()=>addToShoppinList(el.text)}
        
        > 
          {el.text}
          <span class="fs-1" role="img" aria-hidden="true">{el.emoji}</span>
        </button>)
      
      })}
      </div>
      </section>
  )
}


export default AddPopularProduct 