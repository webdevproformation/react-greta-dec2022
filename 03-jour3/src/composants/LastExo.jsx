const LastExo = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))

        data["plats-favoris"] = [];
        document.querySelectorAll("input[name='plats-favoris']").forEach(function(item){
            if(item.checked){
                data["plats-favoris"].push(item.value)
            }
        })
        console.log(data);
    }

    return ( 
       <>
        <h2>Last Exo</h2>
        <form onSubmit={handleSubmit}>
                <p>Vous êtes ?</p>
                <div>
                    <input type="radio" value="F" name="sexe" id="femme" className="form-check-input me-2" />
                    <label htmlFor="femme" className="form-check-label" >femme</label>
                </div>
                <div className="mb-3">
                    <input type="radio" value="H" name="sexe" id="homme" className="form-check-input  me-2" />
                    <label htmlFor="homme" className="form-check-label">homme</label>
                </div>
                <input type="text" className="form-control mb-3" placeholder="votre nom" name="nom" />
                <label htmlFor="pays">Vous êtes né en :</label>
                <select name="pays" id="pays" className="form-select mb-3">
                    <option value="">sélectionner un pays</option>
                    <option value="france">France</option>
                    <option value="allemagne">Allemagne</option>
                    <option value="belgique">Belgique</option>
                </select>
                <div className="mb-3">
                    <p>vous aimez :</p>
                    <input type="checkbox" value="frite" id="frite" name="plats-favoris" className="me-2"/>
                    <label htmlFor="frite">frite</label>
                    <br />
                    <input type="checkbox" value="burger"  id="burger" name="plats-favoris" className="me-2"/>
                    <label htmlFor="burger">burger</label>
                    <br />
                    <input type="checkbox" value="blanquette de veau"  id="blanquette" name="plats-favoris" className="me-2"/>
                    <label htmlFor="blanquette">blanquette de veau</label>
                    <br />
                    <input type="checkbox" value="pizza" id="pizza" name="plats-favoris" className="me-2"/>
                    <label htmlFor="pizza">pizza</label>
                </div>
                
                <input type="submit" className="btn btn-danger mb-3" />
        </form>
       </>

     );
}
 
export default LastExo;