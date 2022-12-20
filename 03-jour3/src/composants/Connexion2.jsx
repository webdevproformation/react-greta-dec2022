const Connexion2 = () => {

    const handleSubmit = (e) => {
        // autre manière de faire la même chose (sans passer par des hook)
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData))
        e.target.reset(); // vider le formulaire => reset 
        // jod => 
        // joi 
        // formik PropTypes
    }

    return ( 
        <>
            <h2>Formulaire de connexion 2</h2>
             <form onSubmit={handleSubmit}>
                <input type="text" placeholder="votre login" className="form-control mb-3" name="login" />
                <input type="password" placeholder="votre password" className="form-control mb-3" name="password" />
                <input type="submit"  className="btn btn-secondary"/>
            </form>
        </>
       
     );
}
 
export default Connexion2;