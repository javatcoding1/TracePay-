import React from 'react'
import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"
const Home = () => {
  const loggedIn ={firstName:"Jayanth" , lastName:"Madhav" , email:"jayanthmadhav1@gmail.com"}
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
        Recent Transctions
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance:123.50},{currentBalance:500.00}]}
      />
    </section> 
  )
}

export default Home