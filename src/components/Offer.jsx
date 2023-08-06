
const Offer = () => {
  const offers = [
    {id:1, title:"Guided Mentorship", body:"Our program provides a guided mentorship approach, where John Doe and our team of expert traders personally mentor each participant. We work closely with you, offering personalized advice and insights to enhance your trading skills and build confidence."},
    {id:2, title:"Proven Strategies", body:" Through years of trading experience, John Doe has developed and tested various strategies that have proven to be successful. We teach you these battle-tested strategies to give you a solid foundation for making informed trading decisions."},
    {id:3, title:"Community Support", body:" Join a supportive community of like-minded individuals who share a passion for forex trading. Our community provides a platform to interact, share ideas, and support each other in your trading journey."},
    {id:4, title:"Practical Simulations", body:" Practice makes perfect! We offer practical simulations and trading exercises to help you apply your knowledge and develop a strategic mindset in a risk-free environment."},
    {id:5, title:"Risk Management", body:"Effective risk management is essential in forex trading. We emphasize the importance of risk management techniques to protect your capital and ensure sustainable growth."},
    {id:6, title:"Continuous Improvement", body:"The forex market is dynamic and constantly evolving. Our mentorship program encourages continuous learning and improvement to keep up with market trends and stay ahead of the game."}
  ]
  return (
    <section className="offer" id="offer">
      <h2>What Each Course Offers</h2>

      <div className="cards">
      {
        offers.map((item) => (
          
          <div className="card" key={item.id}>

              <h3>{item.title}</h3>
              <p>{item.body}</p>

          </div>
               ))
      }
      </div>
    </section>
  )
}

export default Offer