import "./caategory-item.style.scss";

export function CategoryItem ({ category}){
    const {imageUrl, id, title} = category;
    return (
        <div className="category-container" key={id}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >

            </div>
            <div className="category-body-container">
                <div className="title"><h3>{title}</h3></div>
                <div className="subtiltle"><p>SHOP NOW</p></div>
            </div>
      </div>
    );
    
}