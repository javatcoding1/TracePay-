import React from 'react'
import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
const Home = () => {
  const loggedIn ={firstName:"Jayanth"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greetings"
          title="Welcome"
          user={loggedIn?.firstName||"Gust"}
          subtext="Access and Manage your Account and Transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section> 
  )
}

export default Home