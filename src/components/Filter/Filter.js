import style from './filter.module.css'

const Filter = ({genre ,setGenre, setAuthor}) => {

    const handleGenre = (e) => {
        // console.log(e.target.value)
        setGenre(e.target.value)
    }

    const handleAuthor = (e) => {
        // console.log(e.target.value)
        setAuthor(e.target.value)
    }



  return (
    <div className={style.filter}>
        <p>Filter:</p>
        <div className={style.genre}>
           <p>Genre</p>
            <select name="" id="" value={genre} onChange={handleGenre}>
                <option value="">None</option>
                <option value="Computers">Computers</option>
                <option value="Computer programs">Computer programs</option>
                <option value="Business & Economics">Business & Economics</option>
                <option value="Juvenile Nonfiction">Juvenile Nonfiction</option>
                <option value="Data mining">Data mining</option>
                <option value="Fiction">Fiction</option>
            </select>
        </div>
        <div className={style.author}>
            <p>Author</p>
            <select name="" id="" onChange={handleAuthor}>
                <option value="">None</option>
                <option value="Venkat Subramaniam">Venkat Subramaniam</option>
                <option value="Alexander Tarlinder">Alexander Tarlinder</option>
                <option value="Barry Burd">Barry Burd</option>
                <option value="Jeff Lawson">Jeff Lawson</option>
                <option value="Nick Alteen">Nick Alteen</option>
                <option value="Phil Dutson">Phil Dutson</option>
                <option value="Chris Shiflett">Chris Shiflett</option>
            </select>
        </div>
    </div>
  )
}

export default Filter
