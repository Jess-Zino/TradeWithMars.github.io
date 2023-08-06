
const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h2>Contact Us</h2>
        <form>
            <div>
                <input type='text' placeholder="Name"/>
            </div>
            <div>
                <input type='mail' placeholder="Email"/>
            </div>
            <div>
                <input type='tel' placeholder="Phone Number"/>
            </div>
            <div>
                <input type='text' placeholder="Message"/>
            </div>
           
            <input type='submit'/>
        </form>
    </section>
  )
}

export default Contact