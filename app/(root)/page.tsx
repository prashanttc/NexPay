import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedin = {firstName: 'Prashant' ,lastName:"chouhan",email:"prashant@123"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title=" Welcome"
          user={loggedin?.firstName || 'guest'}
          subtext="Access and manage your account and transaction efficiently"
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedin} banks={[{currentBalance:1234.45},{currentBalance:1234.45}]} transactions={[]}/>
    </section>
  )
}

export default Home
