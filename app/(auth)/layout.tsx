import Image from "next/image"
import Link from "next/link"


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth-layout'>
          <section>
            <Link href="/" className="auth-logo">
                 <Image src="assets/icons/logo.svg" alt="Signalist logo" width={140} height={140}/>
            </Link>

            <div className="pb-6 lg:pb-8 flex-1">{children}</div>
          </section>

          <section className="auth-right-section">
             <div className="z-10 relative lg:mt-4 lg:mb-16">
                <blockquote className="auth-blockquote">
                     Signalist turned my watchlist into winning list.The alerts are sp
                </blockquote>
                <div className="flex items-center justify-between">
                    <cite className="auth-testimonial-author">- Ethan R.</cite>
                    <p className="max-md:test-xs text-gray-500">Retail Investor</p>
                </div>
             
             <div className="flex items-center gap-0.5">
               {[1,2,3,4,5].map((star)=>(
                 <Image src="/assests/icons/star.svg" alt ="Star" key = {star} width={20} height={20} className="w-5 h-5"/>
               ))}
               </div>
             </div>
             <div className="flex-1 relative">
                <Image src="/assests/images/dashboard.png" alt="Dashboard Preview" width={1440} />
             </div>
          </section>
    </main>
  )
}

export default Layout