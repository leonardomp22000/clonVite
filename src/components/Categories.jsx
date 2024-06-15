export default function Categories() {
    const categoriesList = [
        {text: "Get Started", color: "purple"},
        {text: "Why Vite?", color: "gray"},
        {text: "Viewon GitHub", color: "gray"},
        {text: "🎉ViteConf 23!", color: "purple"}

    ]
    return(
        <div id="categories">

            {
                categoriesList.map((category)=>{
                    return(
                
                             <a key={`category-${category.text}`}  className={`color-${category.color}`} href="#">{category.text}</a>
                       
                       
                    )

                })
            }
        
        </div>


    )
    
}