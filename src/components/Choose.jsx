
const Choose = () => {
    const data = [
        {id:1, iconSrc:"trophy", title:"Proven Track Record", body:"Asuquos's experience in forex trading speaks for itself. His success and expertise make TradeWithMars a reliable program for aspiring traders."},
        {id:2, iconSrc:"partner_exchange", title:"Personalized Approach", body:"We understand that each trader has unique goals and challenges. Our personalized approach ensures that you get the support you need to thrive."},
        {id:3, iconSrc:"candlestick_chart", title:"Real-Life Experience", body:" Our program is not just theory; it's a practical journey that prepares you for real-life trading scenarios."},
        {id:4, iconSrc:"groups", title:"Positive Community", body:" Join a friendly and encouraging community where you can learn from others' experiences and share your own."},
        {id:5, iconSrc:"supervisor_account", title:"Transparency and Integrity", body:"At TradeWithMars, we believe in transparency and ethical practices. We are committed to your success and will always act in your best interest."}
    
      ]
  return (
    <section className="choose" id="choose">
    <h2>Why Choose TradeWithMars?</h2>
    <div className="cards" >
    {
      data.map((item) =>(
       
      <div className="card" key={item.id}>
      <div className="icon">
      <span className="material-symbols-outlined">{item.iconSrc}</span>

      </div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>

      </div>
  
      ))
    }
    </div>
  




    </section>
  )
}

export default Choose