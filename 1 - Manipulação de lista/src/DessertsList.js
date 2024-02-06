function DessertsList(props) {
  // Implement the component here.
  const data = props.data

  const listItems = data.filter(dessert => dessert.calories <= 500)
  .sort((a, b) => a.calories - b.calories)
  .map(dessert => {
    const textItem = `${dessert.name} - ${dessert.calories} cal`
    return <li>{textItem}</li>
  })
  
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default DessertsList;
