import "./Absent.css"

const Absents = () => {
    return(
        <main>
        <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Apply for leave</h1>
                    <p>* is required</p>
                </div>
            </div>
            <div className="chart">
                <div className="chart__form">
                    <div className="chart__form__cards">
                        <div className="card">
                            <label>From *</label>
                            <input type='text' name='from' required />
                        </div> 
                        <div className="card">
                            <label>Date *</label>
                            <input type='text' name='date' required />
                        </div>
                        <div className="card">
                            <label>Content *</label>
                            <textarea name='more' className="content" name='content' required />
                        </div>
                        <button className="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
export default Absents;