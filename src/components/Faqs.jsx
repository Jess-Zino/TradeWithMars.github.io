
const Faqs = () => {
    const que =  [
        {id:1, question:"What is TradeWithMars Forex Trading Mentorship Program?", answer:"TradeWithMars is a comprehensive forex trading mentorship program designed and owned by Michael Asuquo, a seasoned forex trader with years of experience. The program aims to empower individuals with the knowledge, skills, and support to navigate the forex market successfully."},
        {id:2, question:"Who is the mentor of the program?", answer:"The mentor of the TradeWithMars program is Michael Asuquo, a highly experienced forex trader with a proven track record of success. John is dedicated to providing personalized guidance and support to each participant."},
        {id:3, question:"Is this program suitable for beginners with no trading experience?", answer:"Yes, absolutely! TradeWithMars offers a Beginner's Path track that caters to individuals with no prior trading experience. We provide a solid foundation of forex trading knowledge to help beginners kickstart their trading journey."},
        {id:4, question:"What training tracks are available in the program?", answer:"The program offers three training tracks:  Beginner's Path, Intermediate Mastery and Advanced Strategies. Each track is designed to meet the needs of traders at different skill levels."},
        {id:5, question:"What is TradeWithMars Forex Trading Mentorship Program?", answer:"TradeWithMars is a comprehensive forex trading mentorship program designed and owned by Michael Asuquo, a seasoned forex trader with years of experience. The program aims to empower individuals with the knowledge, skills, and support to navigate the forex market successfully."},
        {id:6, question:"Is forex trading risky?", answer:"Yes, forex trading carries a significant level of risk. It's important to understand that trading in the forex market involves the potential for both profits and losses. We emphasize the importance of risk management and responsible trading practices."},
        {id:7, question:"Can I access the program materials after completing the training tracks?", answer:"Yes, once you have completed a training track, you will have lifetime access to the program materials and updates."},
        {id:8, question:"What kind of support does the program provide?", answer:"TradeWithMars offers continuous support through live webinars, a vibrant community forum, and direct communication with mentors. We are committed to helping you throughout your trading journey."},
        {id:9, question:"Is the program suitable for full-time working individuals?", answer:"Yes, the program is designed to be flexible, allowing individuals with busy schedules to learn at their own pace. You can access the materials and participate in the community activities at your convenience."},
        {id:10, question:"How do I enroll in TradeWithMars Forex Trading Mentorship Program?", answer:"Enrolling is easy! Simply visit our website, choose the training track that suits your needs, and follow the registration process."},
        {id:11, question:"How can I contact customer support?", answer:"For any inquiries or support, you can reach out to our customer support team through email, phone, or the contact form on our website."},
        {id:12, question:"Is there a money-back guarantee?", answer:"Yes, we offer a satisfaction guarantee. If you are not satisfied with the program within a certain period, you can request a refund."}
    ]
  return (
    <section className="faqs" id="faqs">
    <h2>  Frequently Asked Questions (FAQs)</h2>
    <div className="faq">
        {
            que.map((item) =>(
                <details key={item.id}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                </details>
            ))
        }
    </div>
   
</section>
  )
}

export default Faqs